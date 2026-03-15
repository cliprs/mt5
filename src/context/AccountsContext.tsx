import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { HistoryDeal } from '../data/transactions';
import { AccountProfile, defaultAccounts } from '../data/accounts';

const STORAGE_KEY = 'mt5Accounts';
const SELECTED_ACCOUNT_KEY = 'mt5SelectedAccount';
const COMMISSION_PER_LOT = 7;
const TICKET_SEQUENCE_KEY = 'mt5TicketSequence';
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

// Robust date parsing for "YYYY.MM.DD HH:mm:ss"
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
  // If already in MT5 format, leave it
  if (/^\d{4}\.\d{2}\.\d{2}\s\d{2}:\d{2}:\d{2}$/.test(value)) {
    return value;
  }
  
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
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

const randomTicketIncrement = () => Math.floor(Math.random() * 900) + 50;

const extractNumericTicket = (rawId: string): number | null => {
  if (!rawId) return null;
  const match = rawId.match(/^(\d{5,})/);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isNaN(value) ? null : value;
};

const normalizeTicketIds = (accounts: AccountProfile[]): { accounts: AccountProfile[]; lastTicket: number } => {
  const used = new Set<number>();
  let lastTicket = DEFAULT_TICKET_BASE;

  const allocateTicket = (rawId: string) => {
    const candidate = extractNumericTicket(rawId);
    if (candidate && !used.has(candidate)) {
      used.add(candidate);
      if (candidate > lastTicket) {
        lastTicket = candidate;
      }
      return String(candidate);
    }
    let generated = lastTicket;
    do {
      generated += randomTicketIncrement();
    } while (used.has(generated));
    used.add(generated);
    lastTicket = generated;
    return String(generated);
  };

  return {
    accounts: accounts.map((account) => ({
      ...account,
      history: account.history.map((deal) => ({
        ...deal,
        id: allocateTicket(deal.id),
      })),
    })),
    lastTicket,
  };
};

const hydrateAccounts = (accounts: AccountProfile[]): AccountProfile[] =>
  accounts.map((account) => ({
    ...account,
    history: sortDeals(
      account.history.map((deal) => {
        if (deal.type === 'balance') {
          return deal;
        }
        return {
          ...deal,
          commission: deal.commission ?? Number((deal.volume * COMMISSION_PER_LOT).toFixed(2)) * -1,
        };
      }),
    ),
  }));

const createHistoryDeal = (payload: EntryInput, ticketId: string): HistoryDeal => {
  if (payload.kind === 'trade') {
    const pointDifference = payload.side === 'buy'
      ? payload.closePrice - payload.openPrice
      : payload.openPrice - payload.closePrice;
    const profit = pointDifference * payload.volume * 100;
    const commission = Number((payload.volume * COMMISSION_PER_LOT).toFixed(2)) * -1;
    return {
      id: ticketId,
      symbol: payload.symbol || 'GOLD',
      type: payload.side,
      volume: payload.volume,
      openTime: normalizeDateString(payload.openTime),
      closeTime: normalizeDateString(payload.closeTime),
      openPrice: payload.openPrice,
      closePrice: payload.closePrice,
      sl: 0,
      tp: 0,
      commission,
      swap: 0,
      profit: Number(profit.toFixed(2)),
    };
  }

  const amount = payload.kind === 'deposit' ? Math.abs(payload.amount) : -Math.abs(payload.amount);
  return {
    id: ticketId,
    symbol: payload.kind === 'deposit' ? 'Deposit' : 'Withdrawal',
    type: 'balance',
    volume: 0,
    openTime: normalizeDateString(payload.timestamp),
    closeTime: normalizeDateString(payload.timestamp),
    openPrice: 0,
    closePrice: 0,
    sl: 0,
    tp: 0,
    commission: 0,
    swap: 0,
    profit: Number(amount.toFixed(2)),
  };
};

export const AccountsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const highestTicketRef = useRef<number>(DEFAULT_TICKET_BASE);

  const initializeAccounts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let baseAccounts: AccountProfile[] = defaultAccounts;
    if (stored) {
      try {
        baseAccounts = JSON.parse(stored) as AccountProfile[];
      } catch (error) {
        console.error('Failed to parse accounts state, using defaults', error);
        baseAccounts = defaultAccounts;
      }
    }
    const hydrated = hydrateAccounts(baseAccounts);
    const { accounts: normalizedAccounts, lastTicket } = normalizeTicketIds(hydrated);
    highestTicketRef.current = Math.max(lastTicket, DEFAULT_TICKET_BASE);
    return normalizedAccounts;
  };

  const [accounts, setAccounts] = useState<AccountProfile[]>(initializeAccounts);

  const computeInitialTicketSequence = () => {
    const storedValue = Number(localStorage.getItem(TICKET_SEQUENCE_KEY));
    if (!Number.isNaN(storedValue) && storedValue > highestTicketRef.current) {
      return storedValue;
    }
    return highestTicketRef.current;
  };

  const [ticketSeed, setTicketSeed] = useState<number>(computeInitialTicketSequence);
  const ticketSequenceRef = useRef<number>(ticketSeed);

  const [selectedAccountId, setSelectedAccountId] = useState<string>(() => {
    return localStorage.getItem(SELECTED_ACCOUNT_KEY) || defaultAccounts[0]?.id || '';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem(TICKET_SEQUENCE_KEY, String(ticketSeed));
  }, [ticketSeed]);

  const generateTicketId = () => {
    const baseValue = Math.max(ticketSequenceRef.current, highestTicketRef.current);
    const nextValue = baseValue + randomTicketIncrement();
    ticketSequenceRef.current = nextValue;
    highestTicketRef.current = nextValue;
    setTicketSeed(nextValue);
    return String(nextValue);
  };

  useEffect(() => {
    if (selectedAccountId) {
      localStorage.setItem(SELECTED_ACCOUNT_KEY, selectedAccountId);
    }
  }, [selectedAccountId]);

  const selectAccount = (id: string) => {
    setSelectedAccountId(id);
  };

  const addEntry = (accountId: string, payload: EntryInput) => {
    const nextTicketId = generateTicketId();
    setAccounts((prev) =>
      prev.map((account) => {
        if (account.id !== accountId) return account;
        const newDeal = createHistoryDeal(payload, nextTicketId);
        return {
          ...account,
          history: sortDeals([...account.history, newDeal]),
        };
      }),
    );
  };

  const removeEntry = (accountId: string, ticketId: string) => {
    let removed = false;
    setAccounts((prev) =>
      prev.map((account) => {
        if (account.id !== accountId) return account;
        const filteredHistory = account.history.filter((deal) => {
          if (deal.id === ticketId) {
            removed = true;
            return false;
          }
          return true;
        });
        return filteredHistory.length === account.history.length
          ? account
          : {
              ...account,
              history: filteredHistory,
            };
      }),
    );
    return removed;
  };

  const updateAccountDetails = (
    accountId: string,
    payload: { name?: string; accountNo?: string; server?: string }
  ) => {
    setAccounts((prev) =>
      prev.map((account) => {
        if (account.id !== accountId) return account;
        return {
          ...account,
          name: payload.name ?? account.name,
          accountNo: payload.accountNo ?? account.accountNo,
          server: payload.server ?? account.server,
        };
      }),
    );
  };

  const selectedAccount = useMemo(
    () => accounts.find((acc) => acc.id === selectedAccountId) || null,
    [accounts, selectedAccountId],
  );

  const value: AccountsContextValue = {
    accounts,
    selectedAccountId,
    selectedAccount,
    selectAccount,
    addEntry,
    removeEntry,
    updateAccountDetails,
  };

  return <AccountsContext.Provider value={value}>{children}</AccountsContext.Provider>;
};

export const useAccounts = () => {
  const context = useContext(AccountsContext);
  if (!context) {
    throw new Error('useAccounts must be used within AccountsProvider');
  }
  return context;
};
