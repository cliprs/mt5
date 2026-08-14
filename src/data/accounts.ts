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
    name: 'AD SOYAD',
    broker: 'Pepperstone',
    accountNo: '514343063',
    server: 'Pepperstone-MT5',
    history: withDefaultCommission([
  {
    "id": "514344001",
    "symbol": "Deposit",
    "type": "balance",
    "volume": 0,
    "openTime": "2026.08.13 20:00:00",
    "closeTime": "2026.08.13 20:00:00",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 12500.0
  },
  {
    "id": "514344002",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.13 20:15:00",
    "closeTime": "2026.08.13 20:50:00",
    "openPrice": 5015.00,
    "closePrice": 5026.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 1105.76
  },
  {
    "id": "514344003",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.13 21:15:00",
    "closeTime": "2026.08.13 21:50:00",
    "openPrice": 5026.06,
    "closePrice": 5039.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 1329.80
  }
]),
  },
];

