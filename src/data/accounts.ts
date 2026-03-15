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

export const defaultAccounts: AccountProfile[] = [
  {
    id: 'account-1',
    name: 'ESMA OZUGUR',
    broker: 'FxPro',
    accountNo: '514343063',
    server: 'FxPro-MT5',
    history: withDefaultCommission([
      {
        id: '20250403',
        symbol: 'Deposit',
        type: 'balance',
        volume: 0,
        openTime: '2025.04.03 09:43:28',
        closeTime: '2025.04.03 09:43:28',
        openPrice: 0,
        closePrice: 0,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 980.0,
      },
      {
        id: '20250511',
        symbol: 'GOLD',
        type: 'buy',
        volume: 0.01,
        openTime: '2025.04.03 16:20:11',
        closeTime: '2025.04.03 16:31:05',
        openPrice: 3071.17,
        closePrice: 3080.34,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 9.17,
      },
      {
        id: '20250602',
        symbol: 'GOLD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.04.03 17:12:54',
        closeTime: '2025.04.03 17:30:22',
        openPrice: 3123.77,
        closePrice: 3120.04,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 3.73,
      },
      {
        id: '20250763',
        symbol: 'GOLD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.04.04 05:12:03',
        closeTime: '2025.04.04 05:31:39',
        openPrice: 3102.97,
        closePrice: 3105.32,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: -2.59,
      },
      {
        id: '20250854',
        symbol: 'GOLD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.04.04 14:12:00',
        closeTime: '2025.04.04 14:45:06',
        openPrice: 3101.75,
        closePrice: 3104.92,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: -3.17,
      },
      {
        id: '20250977',
        symbol: 'GOLD',
        type: 'sell',
        volume: 0.01,
        openTime: '2025.04.04 16:05:12',
        closeTime: '2025.04.04 16:30:47',
        openPrice: 3070.48,
        closePrice: 3064.33,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: 6.15,
      },
      {
        id: '20251204',
        symbol: 'Withdrawal',
        type: 'balance',
        volume: 0,
        openTime: '2025.04.04 20:39:12',
        closeTime: '2025.04.04 20:39:12',
        openPrice: 0,
        closePrice: 0,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: -100.0,
      },
    ]),
  },
];

