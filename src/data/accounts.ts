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
    "id": "514344018",
    "symbol": "Deposit",
    "type": "balance",
    "volume": 0,
    "openTime": "2026.08.10 07:00:00",
    "closeTime": "2026.08.10 07:00:00",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4000.0
  },
  {
    "id": "514344019",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.11 09:30:00",
    "closeTime": "2026.08.11 09:30:00",
    "openPrice": 4995.0,
    "closePrice": 5001.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 620.3
  },
  {
    "id": "514344020",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.11 14:15:00",
    "closeTime": "2026.08.11 14:15:00",
    "openPrice": 4998.4,
    "closePrice": 5007.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 915.75
  },
  {
    "id": "514344021",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.12 10:20:00",
    "closeTime": "2026.08.12 10:20:00",
    "openPrice": 5001.7,
    "closePrice": 5006.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 480.6
  },
  {
    "id": "514344022",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 1.0,
    "openTime": "2026.08.12 16:40:00",
    "closeTime": "2026.08.12 16:40:00",
    "openPrice": 5004.3,
    "closePrice": 5015.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -1143.0
  },
  {
    "id": "514344023",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.13 08:45:00",
    "closeTime": "2026.08.13 08:45:00",
    "openPrice": 5007.9,
    "closePrice": 5015.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 760.85
  },
  {
    "id": "514344024",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.13 12:30:00",
    "closeTime": "2026.08.13 12:30:00",
    "openPrice": 5010.1,
    "closePrice": 5022.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 1222.5
  },

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
    "openPrice": 5015.0,
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
    "profit": 1329.8
  },
  {
    "id": "514344006",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.17 09:15:00",
    "closeTime": "2026.08.17 09:15:00",
    "openPrice": 5011.3,
    "closePrice": 5017.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 620.15
  },
  {
    "id": "514344007",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.17 14:40:00",
    "closeTime": "2026.08.17 14:40:00",
    "openPrice": 5012.6,
    "closePrice": 5020.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 745.8
  },
  {
    "id": "514344008",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.18 10:05:00",
    "closeTime": "2026.08.18 10:05:00",
    "openPrice": 5013.9,
    "closePrice": 5022.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 890.35
  },
  {
    "id": "514344009",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.18 16:20:00",
    "closeTime": "2026.08.18 16:20:00",
    "openPrice": 5015.2,
    "closePrice": 5020.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 534.6
  },
  {
    "id": "514344010",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.19 08:50:00",
    "closeTime": "2026.08.19 08:50:00",
    "openPrice": 5016.5,
    "closePrice": 5026.48,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 998.75
  },
  {
    "id": "514344011",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.19 13:10:00",
    "closeTime": "2026.08.19 13:10:00",
    "openPrice": 5017.8,
    "closePrice": 5021.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 410.2
  },
  {
    "id": "514344012",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.20 09:40:00",
    "closeTime": "2026.08.20 09:40:00",
    "openPrice": 5019.1,
    "closePrice": 5026.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 763.45
  },
  {
    "id": "514344013",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.20 17:05:00",
    "closeTime": "2026.08.20 17:05:00",
    "openPrice": 5020.4,
    "closePrice": 5029.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 875.9
  },
  {
    "id": "514344014",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.21 11:30:00",
    "closeTime": "2026.08.21 11:30:00",
    "openPrice": 5021.7,
    "closePrice": 5028.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 690.85
  },
  {
    "id": "514344004",
    "symbol": "Deposit",
    "type": "balance",
    "volume": 0,
    "openTime": "2026.08.24 07:30:00",
    "closeTime": "2026.08.24 07:30:00",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 14300.0
  },
  {
    "id": "514344015",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.24 09:20:00",
    "closeTime": "2026.08.24 09:20:00",
    "openPrice": 5023.0,
    "closePrice": 5024.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 132.5
  },
  {
    "id": "514344016",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 1.0,
    "openTime": "2026.08.24 15:45:00",
    "closeTime": "2026.08.24 15:45:00",
    "openPrice": 5024.3,
    "closePrice": 5042.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 1775.45
  },
  {
    "id": "514344017",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2026.08.28 12:00:00",
    "closeTime": "2026.08.28 12:00:00",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -14480.0
  }

]),
  },
];

