import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { HistoryDeal } from '../data/transactions';
import { AccountProfile, defaultAccounts } from '../data/accounts';
import { supabase } from '../lib/supabase';

const SELECTED_ACCOUNT_KEY = 'mt5_selected_id_final';
const COMMISSION_PER_LOT = 7;

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
  setAccounts: React.Dispatch<React.SetStateAction<AccountProfile[]>>;
  isLoading: boolean;
}

const AccountsContext = createContext<AccountsContextValue | undefined>(undefined);

const parseMT5Date = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  try {
    const [datePart, timePart = '00:00:00'] = dateStr.split(' ');
    const [year, month, day] = datePart.split('.').map(Number);
    const [hour, minute, second = 0] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute, second);
  } catch (e) { return null; }
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
  const [accounts, setAccounts] = useState<AccountProfile[]>(defaultAccounts);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('');

  // 1. Sadece Supabase'den yükle
  useEffect(() => {
    const loadFromCloud = async () => {
      try {
        console.log('Supabase: Veri yükleniyor...');
        const { data, error } = await supabase
          .from('app_settings')
          .select('data')
          .eq('id', 'mt5_accounts')
          .single();

        if (!error && data?.data && Array.isArray(data.data) && data.data.length > 0) {
          console.log('Supabase: Veri bulundu, senkronize ediliyor...');
          // EĞER SON EKLENEN İŞLEM (514343019) YOKSA, defaultAccounts'ı kullanmaya zorla (Tek seferlik güncelleme için)
          const hasNewTrades = data.data.some((acc: any) => 
            acc.history.some((deal: any) => deal.id === '514343019')
          );

          if (!hasNewTrades) {
            console.log('Supabase: Yeni haftalık işlemler bulunamadı, yerel veriler yükleniyor...');
            setAccounts(defaultAccounts);
          } else {
            const cloudData = data.data.map((acc: AccountProfile) => ({
              ...acc,
              history: acc.history.map(deal => ({
                  ...deal,
                  symbol: deal.symbol === 'GOLD' ? 'XAUUSD' : deal.symbol
              }))
            }));
            setAccounts(cloudData);
          }
        } else {
          console.log('Supabase: Veri bulunamadı veya hata oluştu, varsayılanlar kullanılıyor.');
          setAccounts(defaultAccounts);
        }
      } catch (e) {
        console.error('Supabase yükleme hatası:', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadFromCloud();
  }, []);

  // 2. Değişiklikleri sadece Supabase'e kaydet
  useEffect(() => {
    if (isLoading) return;
    
    const saveToCloud = async () => {
      try {
        await supabase
          .from('app_settings')
          .upsert({ id: 'mt5_accounts', data: accounts, updated_at: new Date() });
      } catch (e) {
        console.error('Supabase kayıt hatası:', e);
      }
    };
    saveToCloud();
  }, [accounts, isLoading]);

  useEffect(() => {
    if (!isLoading && accounts.length > 0) {
      const savedId = localStorage.getItem(SELECTED_ACCOUNT_KEY);
      if (savedId && accounts.some(acc => acc.id === savedId)) {
        setSelectedAccountId(savedId);
      } else {
        setSelectedAccountId(accounts[0].id);
      }
    }
  }, [isLoading, accounts]);

  const selectAccount = (id: string) => {
    setSelectedAccountId(id);
    localStorage.setItem(SELECTED_ACCOUNT_KEY, id);
  };

  const addEntry = (accountId: string, payload: EntryInput) => {
    const ticketId = String(Date.now());
    setAccounts((prev) =>
      prev.map((acc) => {
        if (acc.id !== accountId) return acc;
        let newDeal: HistoryDeal;
        if (payload.kind === 'trade') {
          const pointDiff = payload.side === 'buy' ? payload.closePrice - payload.openPrice : payload.openPrice - payload.closePrice;
          const profit = pointDiff * payload.volume * 100;
          newDeal = {
            id: ticketId, symbol: payload.symbol === 'GOLD' ? 'XAUUSD' : payload.symbol, type: payload.side, volume: payload.volume,
            openTime: normalizeDateString(payload.openTime), closeTime: normalizeDateString(payload.closeTime),
            openPrice: payload.openPrice, closePrice: payload.closePrice,
            sl: 0, tp: 0, swap: 0, commission: Number((payload.volume * COMMISSION_PER_LOT).toFixed(2)) * -1,
            profit: Number(profit.toFixed(2))
          };
        } else {
          newDeal = {
            id: ticketId, symbol: payload.kind === 'deposit' ? 'Deposit' : 'Withdrawal',
            type: 'balance', volume: 0, openTime: normalizeDateString(payload.timestamp),
            closeTime: normalizeDateString(payload.timestamp), openPrice: 0, closePrice: 0,
            sl: 0, tp: 0, commission: 0, swap: 0, profit: payload.kind === 'deposit' ? Math.abs(payload.amount) : -Math.abs(payload.amount)
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

  const value: AccountsContextValue = {
    accounts,
    selectedAccountId,
    selectedAccount,
    selectAccount,
    addEntry,
    removeEntry,
    updateAccountDetails,
    setAccounts,
    isLoading,
  };

  return <AccountsContext.Provider value={value}>{children}</AccountsContext.Provider>;
};

export const useAccounts = () => {
  const c = useContext(AccountsContext);
  if (!c) throw new Error('useAccounts error');
  return c;
};
