import { HistoryDeal } from './transactions';

export interface AccountProfile {
  id: string;
  name: string;
  broker: string;
  accountNo: string;
  server: string;
  history: HistoryDeal[];
}

const withDefaultCommission = (history: HistoryDeal[]): HistoryDeal[] => {
  const COMMISSION_PER_LOT = 7;
  return history.map((deal) => {
    if (deal.type === 'balance') {
      return deal;
    }
    const commission = deal.commission !== undefined && deal.commission !== 0
      ? deal.commission
      : Number((deal.volume * COMMISSION_PER_LOT).toFixed(2)) * -1;
    return {
      ...deal,
      commission,
    };
  });
};

// Default values for new users or if storage is cleared
export const defaultAccounts: AccountProfile[] = [
  {
    id: 'account-1',
    name: 'AD SOYAD', // Daha jenerik bir isimle başlatalım
    broker: 'Pepperstone',
    accountNo: '514343063',
    server: 'Pepperstone-MT5',
    history: withDefaultCommission([
      {
        id: 'dep-20250430',
        symbol: 'Deposit',
        type: 'balance',
        volume: 0,
        openTime: '2025.04.30 10:15:42',
        closeTime: '2025.04.30 10:15:42',
        openPrice: 0,
        closePrice: 0,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 1000.0,
      },
      {
        id: 'tr-2025050101',
        symbol: 'XAUUSD',
        type: 'buy',
        volume: 0.01,
        openTime: '2025.05.01 01:40:24',
        closeTime: '2025.05.01 01:50:47',
        openPrice: 3272.50,
        closePrice: 3279.50,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 7.00,
      },
      {
        id: 'tr-2025050102',
        symbol: 'XAUUSD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.05.01 02:11:15',
        closeTime: '2025.05.01 02:17:42',
        openPrice: 3284.50,
        closePrice: 3276.50,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 8.00,
      },
      {
        id: 'tr-2025050103',
        symbol: 'XAUUSD',
        type: 'buy',
        volume: 0.01,
        openTime: '2025.05.01 02:45:12',
        closeTime: '2025.05.01 02:51:33',
        openPrice: 3274.80,
        closePrice: 3274.10,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: -0.70,
      },
      {
        id: 'tr-2025050201',
        symbol: 'XAUUSD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.05.02 01:06:18',
        closeTime: '2025.05.02 01:10:45',
        openPrice: 3242.80,
        closePrice: 3237.30,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 5.50,
      },
      {
        id: 'tr-2025050202',
        symbol: 'XAUUSD',
        type: 'buy',
        volume: 0.01,
        openTime: '2025.05.02 03:00:22',
        closeTime: '2025.05.02 03:15:54',
        openPrice: 3236.80,
        closePrice: 3241.20,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 4.40,
      },
      {
        id: 'tr-2025050203',
        symbol: 'XAUUSD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.05.02 05:17:12',
        closeTime: '2025.05.02 05:24:38',
        openPrice: 3242.50,
        closePrice: 3245.80,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: -3.30,
      },
    ]),
  },
];
