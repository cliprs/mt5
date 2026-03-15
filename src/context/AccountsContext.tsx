import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { HistoryDeal } from '../data/transactions';
import { AccountProfile, defaultAccounts } from '../data/accounts';

const STORAGE_KEY = 'mt5Accounts_v2'; // Key'i değiştirerek temiz bir başlangıç yapalım
const SELECTED_ACCOUNT_KEY = 'mt5SelectedAccount_v2';
const COMMISSION_PER_LOT = 7;
const TICKET_SEQUENCE_KEY = 'mt5TicketSequence_v2';
const DEFAULT_TICKET_BASE = 20250403;

type EntryInput =
  | {
      kind: 'deposit' | 'withdraw';
      amount: number;
      timestamp: string;
    }
  | {
      kind: 'trade';
      symbol: string;
      side: 'buy' | 'sell';
      volume: number;
      openTime: string;
      closeTime: string;
      openPrice: number;
      closePrice: number;
    };

interface AccountsContextValue {
  accounts: AccountProfile[];
  selectedAccountId: string | null;
  selectedAccount: AccountProfile | null;
  selectAccount: (id: string) => void;
  addEntry: (accountId: string, payload: EntryInput) => void;
  removeEntry: (accountId: string, ticketId: string) => boolean;
  updateAccountDetails: (accountId: string, payload: { name?: string; accountNo?: string; server?: string }) => void;
}

const AccountsContext = createContext<AccountsContextValue | undefined>(undefined);

const parseMT5Date = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  try {
    const [datePart, timePart = '00:00:00'] = dateStr.split(' ');
    const [year, month, day] = datePart.split('.').map(Number);
    const [hour, minute, second = 0] = timePart.split(':').map(Number);
    const date = new Date(year, month - 1, day, hour, minute, second);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch (e) {
    return null;
  }
};

const normalizeDateString = (value: string) => {
  if (!value) return value;
  if (/^\d{4}\.\d{2}\.\d{2}\s\d{2}:\d{2}:\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const pad = (num: number) => String(num).padStart(2, '0');
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

const sortDeals = (history: HistoryDeal[]) => {
  return [...history].sort((a, b) => {
    const dateA = parseMT5Date(a.closeTime)?.getTime() ?? 0;
    const dateB = parseMT5Date(b.closeTime)?.getTime() ?? 0;
    return dateA - dateB;
  });
};

export const AccountsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<AccountProfile[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Parse error', e);
      }
    }
    return defaultAccounts;
  });

  const [selectedAccountId, setSelectedAccountId] = useState<string>(() => {
    return localStorage.getItem(SELECTED_ACCOUNT_KEY) || accounts[0]?.id || '';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem(SELECTED_ACCOUNT_KEY, selectedAccountId);
  }, [selectedAccountId]);

  const selectAccount = (id: string) => setSelectedAccountId(id);

  const addEntry = (accountId: string, payload: EntryInput) => {
    const ticketId = String(Date.now()); // Basit ticket üretimi
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id !== accountId) return acc;
        
        let newDeal: HistoryDeal;
        if (payload.kind === 'trade') {
          const pointDiff = payload.side === 'buy' ? payload.closePrice - payload.openPrice : payload.openPrice - payload.closePrice;
          const profit = pointDiff * payload.volume * 100;
          newDeal = {
            id: ticketId,
            symbol: payload.symbol,
            type: payload.side,
            volume: payload.volume,
            openTime: normalizeDateString(payload.openTime),
            closeTime: normalizeDateString(payload.closeTime),
            openPrice: payload.openPrice,
            closePrice: payload.closePrice,
            sl: 0, tp: 0, swap: 0,
            commission: Number((payload.volume * COMMISSION_PER_LOT).toFixed(2)) * -1,
            profit: Number(profit.toFixed(2))
          };
        } else {
          newDeal = {
            id: ticketId,
            symbol: payload.kind === 'deposit' ? 'Deposit' : 'Withdrawal',
            type: 'balance',
            volume: 0,
            openTime: normalizeDateString(payload.timestamp),
            closeTime: normalizeDateString(payload.timestamp),
            openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0,
            profit: payload.kind === 'deposit' ? Math.abs(payload.amount) : -Math.abs(payload.amount)
          };
        }

        return { ...acc, history: sortDeals([...acc.history, newDeal]) };
      })
    );
  };

  const removeEntry = (accountId: string, ticketId: string) => {
    let found = false;
    setAccounts((prev) => prev.map(acc => {
      if (acc.id !== accountId) return acc;
      const filtered = acc.history.filter(d => d.id !== ticketId);
      if (filtered.length !== acc.history.length) found = true;
      return { ...acc, history: filtered };
    }));
    return found;
  };

  const updateAccountDetails = (id: string, data: any) => {
    setAccounts(prev => prev.map(acc => acc.id === id ? { ...acc, ...data } : acc));
  };

  const selectedAccount = useMemo(() => accounts.find(a => a.id === selectedAccountId) || null, [accounts, selectedAccountId]);

  return (
    <AccountsContext.Provider value={{ accounts, selectedAccountId, selectedAccount, selectAccount, addEntry, removeEntry, updateAccountDetails }}>
      {children}
    </AccountsContext.Provider>
  );
};

export const useAccounts = () => {
  const c = useContext(AccountsContext);
  if (!c) throw new Error('useAccounts error');
  return c;
};
