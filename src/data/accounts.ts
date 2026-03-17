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
    "id": "514343001",
    "symbol": "Deposit",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.04.30 10:15:42",
    "closeTime": "2025.04.30 10:15:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 1000
  },
  {
    "id": "514343002",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.01 15:16:24",
    "closeTime": "2025.05.01 15:37:25",
    "openPrice": 3294.55,
    "closePrice": 3300.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.58
  },
  {
    "id": "514343003",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.01 15:34:20",
    "closeTime": "2025.05.01 15:45:38",
    "openPrice": 3193.21,
    "closePrice": 3198.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.02
  },
  {
    "id": "514343004",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.01 16:30:14",
    "closeTime": "2025.05.01 16:48:16",
    "openPrice": 3245.95,
    "closePrice": 3241.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.73
  },
  {
    "id": "514343005",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.02 10:31:27",
    "closeTime": "2025.05.02 10:51:13",
    "openPrice": 3198.78,
    "closePrice": 3192.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.65
  },
  {
    "id": "514343006",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.02 12:24:27",
    "closeTime": "2025.05.02 12:36:39",
    "openPrice": 3290.73,
    "closePrice": 3295.11,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.38
  },
  {
    "id": "514343007",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.02 13:07:21",
    "closeTime": "2025.05.02 13:12:53",
    "openPrice": 3239.01,
    "closePrice": 3244.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.61
  },
  {
    "id": "514343008",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.05 11:34:45",
    "closeTime": "2025.05.05 11:44:30",
    "openPrice": 3244.98,
    "closePrice": 3238.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.03
  },
  {
    "id": "514343009",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.05 11:36:12",
    "closeTime": "2025.05.05 11:47:43",
    "openPrice": 3295.14,
    "closePrice": 3290.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.74
  },
  {
    "id": "514343010",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.05 12:05:30",
    "closeTime": "2025.05.05 12:14:31",
    "openPrice": 3212.45,
    "closePrice": 3207.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343011",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.06 09:25:37",
    "closeTime": "2025.05.06 09:44:26",
    "openPrice": 3240.21,
    "closePrice": 3233.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.33
  },
  {
    "id": "514343012",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.06 10:18:07",
    "closeTime": "2025.05.06 10:35:45",
    "openPrice": 3214.81,
    "closePrice": 3209.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.79
  },
  {
    "id": "514343013",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.06 13:25:43",
    "closeTime": "2025.05.06 13:48:48",
    "openPrice": 3285.37,
    "closePrice": 3278.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343014",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.07 09:06:42",
    "closeTime": "2025.05.07 09:11:05",
    "openPrice": 3301.74,
    "closePrice": 3308.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.31
  },
  {
    "id": "514343015",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.07 13:13:36",
    "closeTime": "2025.05.07 13:20:20",
    "openPrice": 3217.32,
    "closePrice": 3210.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.99
  },
  {
    "id": "514343016",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.07 14:15:17",
    "closeTime": "2025.05.07 14:39:10",
    "openPrice": 3248.1,
    "closePrice": 3252.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.56
  },
  {
    "id": "514343017",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.08 09:25:50",
    "closeTime": "2025.05.08 09:35:54",
    "openPrice": 3212.39,
    "closePrice": 3205.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.15
  },
  {
    "id": "514343018",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.08 15:10:29",
    "closeTime": "2025.05.08 15:15:53",
    "openPrice": 3244.87,
    "closePrice": 3239.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.85
  },
  {
    "id": "514343019",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.08 16:37:50",
    "closeTime": "2025.05.08 16:59:54",
    "openPrice": 3296.43,
    "closePrice": 3289.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.03
  },
  {
    "id": "514343020",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.09 09:19:18",
    "closeTime": "2025.05.09 09:24:54",
    "openPrice": 3248.7,
    "closePrice": 3255.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.87
  },
  {
    "id": "514343021",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.09 12:17:56",
    "closeTime": "2025.05.09 12:38:15",
    "openPrice": 3215.01,
    "closePrice": 3209.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.28
  },
  {
    "id": "514343022",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.12 12:08:08",
    "closeTime": "2025.05.12 12:22:36",
    "openPrice": 3265.64,
    "closePrice": 3270.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.25
  },
  {
    "id": "514343023",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.12 12:26:53",
    "closeTime": "2025.05.12 12:41:46",
    "openPrice": 3208.6,
    "closePrice": 3206.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.15
  },
  {
    "id": "514343024",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.13 11:19:12",
    "closeTime": "2025.05.13 11:42:35",
    "openPrice": 3214.94,
    "closePrice": 3207.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.12
  },
  {
    "id": "514343025",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.13 14:39:09",
    "closeTime": "2025.05.13 14:50:06",
    "openPrice": 3255.78,
    "closePrice": 3263.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.64
  },
  {
    "id": "514343026",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.14 11:08:40",
    "closeTime": "2025.05.14 11:15:52",
    "openPrice": 3214.29,
    "closePrice": 3217.77,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.48
  },
  {
    "id": "514343027",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.14 11:36:16",
    "closeTime": "2025.05.14 12:00:55",
    "openPrice": 3269.04,
    "closePrice": 3275.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.28
  },
  {
    "id": "514343028",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.15 10:15:20",
    "closeTime": "2025.05.15 10:28:36",
    "openPrice": 3225.26,
    "closePrice": 3219.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.9
  },
  {
    "id": "514343029",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.15 11:34:21",
    "closeTime": "2025.05.15 11:52:48",
    "openPrice": 3268.06,
    "closePrice": 3272.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.56
  },
  {
    "id": "514343030",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.16 12:14:40",
    "closeTime": "2025.05.16 12:24:56",
    "openPrice": 3267.74,
    "closePrice": 3262.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.58
  },
  {
    "id": "514343031",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.16 15:31:31",
    "closeTime": "2025.05.16 15:39:33",
    "openPrice": 3215.19,
    "closePrice": 3209,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.19
  },
  {
    "id": "514343032",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.19 11:29:12",
    "closeTime": "2025.05.19 11:37:08",
    "openPrice": 3226.22,
    "closePrice": 3218.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343033",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.19 13:16:28",
    "closeTime": "2025.05.19 13:28:21",
    "openPrice": 3275.24,
    "closePrice": 3272.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.22
  },
  {
    "id": "514343034",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.20 13:23:46",
    "closeTime": "2025.05.20 13:34:48",
    "openPrice": 3225.29,
    "closePrice": 3231.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.24
  },
  {
    "id": "514343035",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.20 15:14:35",
    "closeTime": "2025.05.20 15:26:31",
    "openPrice": 3275.15,
    "closePrice": 3269.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.93
  },
  {
    "id": "514343036",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.21 12:23:56",
    "closeTime": "2025.05.21 12:42:09",
    "openPrice": 3271.53,
    "closePrice": 3277.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.23
  },
  {
    "id": "514343037",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.21 13:08:30",
    "closeTime": "2025.05.21 13:25:04",
    "openPrice": 3222.74,
    "closePrice": 3229.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.93
  },
  {
    "id": "514343038",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.22 09:04:53",
    "closeTime": "2025.05.22 09:22:17",
    "openPrice": 3279.16,
    "closePrice": 3273.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.01
  },
  {
    "id": "514343039",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.22 10:18:22",
    "closeTime": "2025.05.22 10:25:48",
    "openPrice": 3234.1,
    "closePrice": 3241.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.06
  },
  {
    "id": "514343040",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.23 10:24:06",
    "closeTime": "2025.05.23 10:33:20",
    "openPrice": 3233.97,
    "closePrice": 3228.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.99
  },
  {
    "id": "514343041",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.23 13:34:55",
    "closeTime": "2025.05.23 13:49:13",
    "openPrice": 3281.76,
    "closePrice": 3276.21,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.55
  },
  {
    "id": "514343042",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.26 14:02:28",
    "closeTime": "2025.05.26 14:21:34",
    "openPrice": 3242.38,
    "closePrice": 3237,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.38
  },
  {
    "id": "514343043",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.26 14:35:04",
    "closeTime": "2025.05.26 14:44:45",
    "openPrice": 3280.72,
    "closePrice": 3273.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.92
  },
  {
    "id": "514343044",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.27 10:10:37",
    "closeTime": "2025.05.27 10:28:37",
    "openPrice": 3271.46,
    "closePrice": 3278.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.87
  },
  {
    "id": "514343045",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.27 16:23:20",
    "closeTime": "2025.05.27 16:47:58",
    "openPrice": 3237.01,
    "closePrice": 3244.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.08
  },
  {
    "id": "514343046",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.28 09:20:02",
    "closeTime": "2025.05.28 09:40:44",
    "openPrice": 3290.51,
    "closePrice": 3284.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.59
  },
  {
    "id": "514343047",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.28 11:02:28",
    "closeTime": "2025.05.28 11:08:16",
    "openPrice": 3246.38,
    "closePrice": 3251.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.56
  },
  {
    "id": "514343048",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.29 12:06:43",
    "closeTime": "2025.05.29 12:30:17",
    "openPrice": 3236.19,
    "closePrice": 3242.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.82
  },
  {
    "id": "514343049",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.29 15:36:14",
    "closeTime": "2025.05.29 15:50:16",
    "openPrice": 3285.94,
    "closePrice": 3293.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.09
  },
  {
    "id": "514343050",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.30 09:15:12",
    "closeTime": "2025.05.30 09:24:45",
    "openPrice": 3290.66,
    "closePrice": 3283.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.37
  },
  {
    "id": "514343051",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.30 15:30:12",
    "closeTime": "2025.05.30 15:44:34",
    "openPrice": 3238.08,
    "closePrice": 3230.97,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.11
  },
  {
    "id": "514343053",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.02 11:31:54",
    "closeTime": "2025.06.02 11:39:22",
    "openPrice": 3339.27,
    "closePrice": 3334.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.19
  },
  {
    "id": "514343052",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.02 11:26:28",
    "closeTime": "2025.06.02 11:42:04",
    "openPrice": 3354.06,
    "closePrice": 3346.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.07
  },
  {
    "id": "514343054",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.02 13:16:33",
    "closeTime": "2025.06.02 13:33:14",
    "openPrice": 3293.75,
    "closePrice": 3299.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.47
  },
  {
    "id": "514343055",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.02 16:28:10",
    "closeTime": "2025.06.02 16:34:37",
    "openPrice": 3393,
    "closePrice": 3399.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.98
  },
  {
    "id": "514343056",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.03 13:19:28",
    "closeTime": "2025.06.03 13:39:38",
    "openPrice": 3396.61,
    "closePrice": 3403.64,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.03
  },
  {
    "id": "514343057",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.03 13:35:17",
    "closeTime": "2025.06.03 13:50:23",
    "openPrice": 3355.57,
    "closePrice": 3362.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.12
  },
  {
    "id": "514343058",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.03 15:19:59",
    "closeTime": "2025.06.03 15:24:45",
    "openPrice": 3296.68,
    "closePrice": 3289.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.3
  },
  {
    "id": "514343059",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.03 15:21:43",
    "closeTime": "2025.06.03 15:35:45",
    "openPrice": 3339.02,
    "closePrice": 3334.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.7
  },
  {
    "id": "514343060",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.04 09:24:54",
    "closeTime": "2025.06.04 09:38:03",
    "openPrice": 3329.45,
    "closePrice": 3332.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.89
  },
  {
    "id": "514343061",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 10:08:27",
    "closeTime": "2025.06.04 10:27:41",
    "openPrice": 3355.37,
    "closePrice": 3360.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.57
  },
  {
    "id": "514343062",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.04 11:33:45",
    "closeTime": "2025.06.04 11:54:55",
    "openPrice": 3300.47,
    "closePrice": 3292.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.94
  },
  {
    "id": "514343063",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 13:32:07",
    "closeTime": "2025.06.04 13:48:04",
    "openPrice": 3398.77,
    "closePrice": 3403.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.56
  },
  {
    "id": "514343064",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.05 09:17:54",
    "closeTime": "2025.06.05 09:36:51",
    "openPrice": 3394,
    "closePrice": 3396.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.9
  },
  {
    "id": "514343065",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.05 09:19:45",
    "closeTime": "2025.06.05 09:37:35",
    "openPrice": 3343.8,
    "closePrice": 3338.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.3
  },
  {
    "id": "514343066",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.05 14:05:20",
    "closeTime": "2025.06.05 14:14:20",
    "openPrice": 3374,
    "closePrice": 3368.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.17
  },
  {
    "id": "514343067",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.05 15:11:24",
    "closeTime": "2025.06.05 15:26:41",
    "openPrice": 3308.7,
    "closePrice": 3301.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.39
  },
  {
    "id": "514343068",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.06 12:23:22",
    "closeTime": "2025.06.06 12:42:55",
    "openPrice": 3365.18,
    "closePrice": 3371.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.17
  },
  {
    "id": "514343069",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.06 13:27:54",
    "closeTime": "2025.06.06 13:32:52",
    "openPrice": 3303.41,
    "closePrice": 3308.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.32
  },
  {
    "id": "514343070",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.06 16:25:22",
    "closeTime": "2025.06.06 16:43:48",
    "openPrice": 3326.68,
    "closePrice": 3331.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.72
  },
  {
    "id": "514343071",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.06 16:25:52",
    "closeTime": "2025.06.06 16:48:55",
    "openPrice": 3391.35,
    "closePrice": 3384.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.67
  },
  {
    "id": "514343072",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 10:09:11",
    "closeTime": "2025.06.09 10:29:37",
    "openPrice": 3404.04,
    "closePrice": 3409.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.2
  },
  {
    "id": "514343073",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.09 11:13:49",
    "closeTime": "2025.06.09 11:19:40",
    "openPrice": 3341.89,
    "closePrice": 3333.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.91
  },
  {
    "id": "514343074",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 13:10:48",
    "closeTime": "2025.06.09 13:25:13",
    "openPrice": 3374.49,
    "closePrice": 3381.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.2
  },
  {
    "id": "514343075",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 15:35:18",
    "closeTime": "2025.06.09 15:53:00",
    "openPrice": 3306.22,
    "closePrice": 3312.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.61
  },
  {
    "id": "514343076",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.10 13:10:48",
    "closeTime": "2025.06.10 13:24:25",
    "openPrice": 3328.57,
    "closePrice": 3336.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.84
  },
  {
    "id": "514343078",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.10 14:37:50",
    "closeTime": "2025.06.10 14:49:39",
    "openPrice": 3304.36,
    "closePrice": 3296.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.79
  },
  {
    "id": "514343077",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.10 14:36:44",
    "closeTime": "2025.06.10 14:54:45",
    "openPrice": 3366.63,
    "closePrice": 3359.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.27
  },
  {
    "id": "514343079",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.10 15:21:57",
    "closeTime": "2025.06.10 15:34:26",
    "openPrice": 3406.57,
    "closePrice": 3413.65,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.08
  },
  {
    "id": "514343080",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.11 12:32:24",
    "closeTime": "2025.06.11 12:40:00",
    "openPrice": 3368.5,
    "closePrice": 3373.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.1
  },
  {
    "id": "514343082",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.11 15:23:54",
    "closeTime": "2025.06.11 15:29:31",
    "openPrice": 3348.82,
    "closePrice": 3341.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.16
  },
  {
    "id": "514343081",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.11 15:23:53",
    "closeTime": "2025.06.11 15:47:11",
    "openPrice": 3303.04,
    "closePrice": 3305.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.16
  },
  {
    "id": "514343083",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 12:37:23",
    "closeTime": "2025.06.12 12:53:39",
    "openPrice": 3301.69,
    "closePrice": 3309.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343084",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 14:33:02",
    "closeTime": "2025.06.12 14:46:03",
    "openPrice": 3345.83,
    "closePrice": 3351.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.66
  },
  {
    "id": "514343085",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 15:15:09",
    "closeTime": "2025.06.12 15:34:08",
    "openPrice": 3365.47,
    "closePrice": 3373.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.93
  },
  {
    "id": "514343086",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.13 13:29:51",
    "closeTime": "2025.06.13 13:53:13",
    "openPrice": 3370.98,
    "closePrice": 3364.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.47
  },
  {
    "id": "514343087",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.13 14:17:21",
    "closeTime": "2025.06.13 14:38:48",
    "openPrice": 3334.86,
    "closePrice": 3336.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.05
  },
  {
    "id": "514343088",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.13 15:07:44",
    "closeTime": "2025.06.13 15:15:55",
    "openPrice": 3306.03,
    "closePrice": 3303.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3
  },
  {
    "id": "514343089",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.16 10:03:04",
    "closeTime": "2025.06.16 10:23:49",
    "openPrice": 3305.34,
    "closePrice": 3297.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.46
  },
  {
    "id": "514343090",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 12:11:35",
    "closeTime": "2025.06.16 12:19:09",
    "openPrice": 3367.13,
    "closePrice": 3372.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.02
  },
  {
    "id": "514343091",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 16:30:05",
    "closeTime": "2025.06.16 16:35:08",
    "openPrice": 3346.76,
    "closePrice": 3353.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.27
  },
  {
    "id": "514343092",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.17 13:04:57",
    "closeTime": "2025.06.17 13:14:11",
    "openPrice": 3345.24,
    "closePrice": 3340.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.58
  },
  {
    "id": "514343093",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.17 14:01:30",
    "closeTime": "2025.06.17 14:20:32",
    "openPrice": 3384.55,
    "closePrice": 3377.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.09
  },
  {
    "id": "514343094",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.17 16:05:25",
    "closeTime": "2025.06.17 16:11:38",
    "openPrice": 3316.73,
    "closePrice": 3324.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.88
  },
  {
    "id": "514343095",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.18 09:10:19",
    "closeTime": "2025.06.18 09:17:17",
    "openPrice": 3351.23,
    "closePrice": 3343.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.89
  },
  {
    "id": "514343096",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.18 15:23:55",
    "closeTime": "2025.06.18 15:40:26",
    "openPrice": 3324.05,
    "closePrice": 3316.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.61
  },
  {
    "id": "514343097",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.18 15:33:38",
    "closeTime": "2025.06.18 15:55:55",
    "openPrice": 3378.75,
    "closePrice": 3383.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.96
  },
  {
    "id": "514343098",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.19 10:21:56",
    "closeTime": "2025.06.19 10:32:59",
    "openPrice": 3340.59,
    "closePrice": 3337.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.58
  },
  {
    "id": "514343099",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.19 10:30:53",
    "closeTime": "2025.06.19 10:52:04",
    "openPrice": 3317.58,
    "closePrice": 3322.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.77
  },
  {
    "id": "514343100",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.19 15:03:17",
    "closeTime": "2025.06.19 15:10:42",
    "openPrice": 3372.03,
    "closePrice": 3365.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.12
  },
  {
    "id": "514343101",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.20 12:16:24",
    "closeTime": "2025.06.20 12:25:28",
    "openPrice": 3312.06,
    "closePrice": 3304.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.14
  },
  {
    "id": "514343102",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.20 15:10:26",
    "closeTime": "2025.06.20 15:24:17",
    "openPrice": 3376.7,
    "closePrice": 3381.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.88
  },
  {
    "id": "514343103",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.20 15:31:51",
    "closeTime": "2025.06.20 15:37:28",
    "openPrice": 3344.25,
    "closePrice": 3351.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.67
  },
  {
    "id": "514343104",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 09:06:39",
    "closeTime": "2025.06.23 09:24:19",
    "openPrice": 3345.69,
    "closePrice": 3353.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.83
  },
  {
    "id": "514343105",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 15:22:01",
    "closeTime": "2025.06.23 15:27:42",
    "openPrice": 3327.33,
    "closePrice": 3324.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.59
  },
  {
    "id": "514343106",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 16:24:01",
    "closeTime": "2025.06.23 16:43:09",
    "openPrice": 3384.85,
    "closePrice": 3382.77,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.08
  },
  {
    "id": "514343107",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.24 11:31:36",
    "closeTime": "2025.06.24 11:37:15",
    "openPrice": 3379.01,
    "closePrice": 3374.07,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.94
  },
  {
    "id": "514343108",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.24 13:15:58",
    "closeTime": "2025.06.24 13:25:09",
    "openPrice": 3332.42,
    "closePrice": 3339.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.83
  },
  {
    "id": "514343109",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.24 16:23:15",
    "closeTime": "2025.06.24 16:47:33",
    "openPrice": 3359.14,
    "closePrice": 3366.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.11
  },
  {
    "id": "514343110",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.25 09:24:26",
    "closeTime": "2025.06.25 09:41:09",
    "openPrice": 3393.04,
    "closePrice": 3399.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.1
  },
  {
    "id": "514343111",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.25 14:25:04",
    "closeTime": "2025.06.25 14:30:07",
    "openPrice": 3346.43,
    "closePrice": 3341.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343112",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.25 15:06:14",
    "closeTime": "2025.06.25 15:14:20",
    "openPrice": 3331.08,
    "closePrice": 3324.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.64
  },
  {
    "id": "514343113",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.26 10:23:39",
    "closeTime": "2025.06.26 10:30:46",
    "openPrice": 3330.71,
    "closePrice": 3325.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.65
  },
  {
    "id": "514343114",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.26 11:20:40",
    "closeTime": "2025.06.26 11:26:59",
    "openPrice": 3348.34,
    "closePrice": 3342.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.41
  },
  {
    "id": "514343115",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.26 15:22:17",
    "closeTime": "2025.06.26 15:41:42",
    "openPrice": 3377.01,
    "closePrice": 3370.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.59
  },
  {
    "id": "514343116",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 10:04:06",
    "closeTime": "2025.06.27 10:22:36",
    "openPrice": 3355.36,
    "closePrice": 3362.7,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.34
  },
  {
    "id": "514343117",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 14:32:00",
    "closeTime": "2025.06.27 14:49:48",
    "openPrice": 3384.73,
    "closePrice": 3392.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.87
  },
  {
    "id": "514343118",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 15:03:10",
    "closeTime": "2025.06.27 15:21:22",
    "openPrice": 3319.73,
    "closePrice": 3326.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.49
  },
  {
    "id": "514343119",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.06.27 20:05:42",
    "closeTime": "2025.06.27 20:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -200
  },
  {
    "id": "514343120",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.30 11:10:39",
    "closeTime": "2025.06.30 11:17:29",
    "openPrice": 3379.47,
    "closePrice": 3375.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.76
  },
  {
    "id": "514343121",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.30 12:37:17",
    "closeTime": "2025.06.30 12:55:17",
    "openPrice": 3329.99,
    "closePrice": 3322.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.94
  },
  {
    "id": "514343122",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.30 16:01:35",
    "closeTime": "2025.06.30 16:25:48",
    "openPrice": 3359.76,
    "closePrice": 3366.07,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.31
  },
  {
    "id": "514343123",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.01 10:06:06",
    "closeTime": "2025.07.01 10:19:41",
    "openPrice": 3500.63,
    "closePrice": 3494.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.36
  },
  {
    "id": "514343124",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.01 14:15:23",
    "closeTime": "2025.07.01 14:28:06",
    "openPrice": 3455.28,
    "closePrice": 3461.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.35
  },
  {
    "id": "514343125",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.01 15:37:55",
    "closeTime": "2025.07.01 15:53:54",
    "openPrice": 3392.23,
    "closePrice": 3396.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.73
  },
  {
    "id": "514343126",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.02 11:23:56",
    "closeTime": "2025.07.02 11:40:21",
    "openPrice": 3487.17,
    "closePrice": 3492.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.82
  },
  {
    "id": "514343127",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.02 12:16:56",
    "closeTime": "2025.07.02 12:27:17",
    "openPrice": 3438.38,
    "closePrice": 3443.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.52
  },
  {
    "id": "514343128",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.02 12:23:50",
    "closeTime": "2025.07.02 12:35:27",
    "openPrice": 3410.85,
    "closePrice": 3404.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.83
  },
  {
    "id": "514343129",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.03 09:07:52",
    "closeTime": "2025.07.03 09:19:44",
    "openPrice": 3503.72,
    "closePrice": 3498.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.35
  },
  {
    "id": "514343130",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.03 09:18:21",
    "closeTime": "2025.07.03 09:36:47",
    "openPrice": 3410.16,
    "closePrice": 3415.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.25
  },
  {
    "id": "514343131",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.03 16:26:32",
    "closeTime": "2025.07.03 16:39:23",
    "openPrice": 3457.6,
    "closePrice": 3462.59,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.99
  },
  {
    "id": "514343132",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.04 09:02:50",
    "closeTime": "2025.07.04 09:09:27",
    "openPrice": 3446.46,
    "closePrice": 3448.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.5
  },
  {
    "id": "514343133",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.04 09:13:01",
    "closeTime": "2025.07.04 09:34:58",
    "openPrice": 3502.14,
    "closePrice": 3509.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.22
  },
  {
    "id": "514343134",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.04 16:08:57",
    "closeTime": "2025.07.04 16:21:59",
    "openPrice": 3415.66,
    "closePrice": 3422.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.22
  },
  {
    "id": "514343135",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.07 16:00:02",
    "closeTime": "2025.07.07 16:16:52",
    "openPrice": 3453.87,
    "closePrice": 3460.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.14
  },
  {
    "id": "514343136",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.07 16:14:32",
    "closeTime": "2025.07.07 16:31:55",
    "openPrice": 3415.31,
    "closePrice": 3407.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.86
  },
  {
    "id": "514343137",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.08 13:38:23",
    "closeTime": "2025.07.08 14:02:59",
    "openPrice": 3458.58,
    "closePrice": 3453.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.07
  },
  {
    "id": "514343138",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.08 15:15:38",
    "closeTime": "2025.07.08 15:30:02",
    "openPrice": 3403.58,
    "closePrice": 3398.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.91
  },
  {
    "id": "514343139",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.09 11:36:29",
    "closeTime": "2025.07.09 11:56:22",
    "openPrice": 3415.35,
    "closePrice": 3409.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.9
  },
  {
    "id": "514343140",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.09 13:08:12",
    "closeTime": "2025.07.09 13:25:49",
    "openPrice": 3460.35,
    "closePrice": 3453.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.37
  },
  {
    "id": "514343141",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.10 09:27:07",
    "closeTime": "2025.07.10 09:34:25",
    "openPrice": 3417.5,
    "closePrice": 3423.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.96
  },
  {
    "id": "514343142",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.10 11:20:14",
    "closeTime": "2025.07.10 11:41:40",
    "openPrice": 3466.36,
    "closePrice": 3474.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.83
  },
  {
    "id": "514343143",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.11 09:29:12",
    "closeTime": "2025.07.11 09:41:13",
    "openPrice": 3412.83,
    "closePrice": 3406.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.7
  },
  {
    "id": "514343144",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.11 11:28:42",
    "closeTime": "2025.07.11 11:46:24",
    "openPrice": 3464.47,
    "closePrice": 3470.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.89
  },
  {
    "id": "514343146",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.14 11:14:31",
    "closeTime": "2025.07.14 11:20:09",
    "openPrice": 3465.91,
    "closePrice": 3471.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.19
  },
  {
    "id": "514343145",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.14 11:11:53",
    "closeTime": "2025.07.14 11:30:09",
    "openPrice": 3421.19,
    "closePrice": 3415.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.37
  },
  {
    "id": "514343147",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.15 12:09:50",
    "closeTime": "2025.07.15 12:26:48",
    "openPrice": 3416.89,
    "closePrice": 3420.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.01
  },
  {
    "id": "514343148",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.15 15:15:30",
    "closeTime": "2025.07.15 15:29:52",
    "openPrice": 3462.32,
    "closePrice": 3469.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343149",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.16 11:14:45",
    "closeTime": "2025.07.16 11:29:58",
    "openPrice": 3430.83,
    "closePrice": 3424.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.68
  },
  {
    "id": "514343150",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.16 12:31:13",
    "closeTime": "2025.07.16 12:39:52",
    "openPrice": 3477.64,
    "closePrice": 3470.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.93
  },
  {
    "id": "514343151",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.17 10:26:55",
    "closeTime": "2025.07.17 10:42:44",
    "openPrice": 3418.78,
    "closePrice": 3425.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.93
  },
  {
    "id": "514343152",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.17 10:39:41",
    "closeTime": "2025.07.17 11:01:27",
    "openPrice": 3463.87,
    "closePrice": 3458.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.64
  },
  {
    "id": "514343153",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.07.18 10:05:42",
    "closeTime": "2025.07.18 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -180
  },
  {
    "id": "514343154",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.18 14:25:35",
    "closeTime": "2025.07.18 14:49:11",
    "openPrice": 3471.71,
    "closePrice": 3466.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.73
  },
  {
    "id": "514343155",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.18 15:28:45",
    "closeTime": "2025.07.18 15:50:13",
    "openPrice": 3427.34,
    "closePrice": 3420,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.34
  },
  {
    "id": "514343156",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.21 13:27:34",
    "closeTime": "2025.07.21 13:33:07",
    "openPrice": 3469.92,
    "closePrice": 3477.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.83
  },
  {
    "id": "514343157",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.21 15:32:53",
    "closeTime": "2025.07.21 15:48:05",
    "openPrice": 3437.25,
    "closePrice": 3431.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.19
  },
  {
    "id": "514343158",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.22 14:28:21",
    "closeTime": "2025.07.22 14:46:20",
    "openPrice": 3436.15,
    "closePrice": 3428.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.87
  },
  {
    "id": "514343159",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.22 16:36:24",
    "closeTime": "2025.07.22 16:54:59",
    "openPrice": 3471.36,
    "closePrice": 3465.59,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.77
  },
  {
    "id": "514343160",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.23 13:33:28",
    "closeTime": "2025.07.23 13:47:59",
    "openPrice": 3431.84,
    "closePrice": 3425.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.15
  },
  {
    "id": "514343161",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.23 15:02:55",
    "closeTime": "2025.07.23 15:24:04",
    "openPrice": 3483.06,
    "closePrice": 3480.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.39
  },
  {
    "id": "514343162",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.24 16:38:43",
    "closeTime": "2025.07.24 16:48:54",
    "openPrice": 3483.24,
    "closePrice": 3478.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.86
  },
  {
    "id": "514343163",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.24 16:38:48",
    "closeTime": "2025.07.24 16:56:21",
    "openPrice": 3432.74,
    "closePrice": 3425.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.52
  },
  {
    "id": "514343164",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.25 10:20:55",
    "closeTime": "2025.07.25 10:31:21",
    "openPrice": 3475.44,
    "closePrice": 3481.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.99
  },
  {
    "id": "514343165",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.25 16:07:27",
    "closeTime": "2025.07.25 16:18:22",
    "openPrice": 3430.39,
    "closePrice": 3435.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.37
  },
  {
    "id": "514343166",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.28 09:20:26",
    "closeTime": "2025.07.28 09:32:48",
    "openPrice": 3483.39,
    "closePrice": 3489.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.45
  },
  {
    "id": "514343167",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.28 16:20:17",
    "closeTime": "2025.07.28 16:27:42",
    "openPrice": 3432.72,
    "closePrice": 3437.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.41
  },
  {
    "id": "514343168",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.29 09:24:50",
    "closeTime": "2025.07.29 09:32:51",
    "openPrice": 3436.82,
    "closePrice": 3442.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.69
  },
  {
    "id": "514343169",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.29 16:28:37",
    "closeTime": "2025.07.29 16:52:07",
    "openPrice": 3477.38,
    "closePrice": 3483.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.16
  },
  {
    "id": "514343171",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.30 16:21:04",
    "closeTime": "2025.07.30 16:30:24",
    "openPrice": 3443.62,
    "closePrice": 3438.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.1
  },
  {
    "id": "514343170",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.30 16:16:15",
    "closeTime": "2025.07.30 16:31:55",
    "openPrice": 3487.5,
    "closePrice": 3494.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.43
  },
  {
    "id": "514343172",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.31 10:23:13",
    "closeTime": "2025.07.31 10:46:35",
    "openPrice": 3448.72,
    "closePrice": 3443.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.77
  },
  {
    "id": "514343173",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.31 14:15:54",
    "closeTime": "2025.07.31 14:21:11",
    "openPrice": 3487.61,
    "closePrice": 3492.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.69
  },
  {
    "id": "514343174",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.01 11:15:23",
    "closeTime": "2025.08.01 11:27:38",
    "openPrice": 3499.84,
    "closePrice": 3507.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343175",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.01 12:30:01",
    "closeTime": "2025.08.01 12:48:01",
    "openPrice": 3574.88,
    "closePrice": 3568.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.82
  },
  {
    "id": "514343176",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.01 15:34:06",
    "closeTime": "2025.08.01 15:42:54",
    "openPrice": 3543.22,
    "closePrice": 3535.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.88
  },
  {
    "id": "514343177",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.04 10:28:00",
    "closeTime": "2025.08.04 10:50:11",
    "openPrice": 3533.91,
    "closePrice": 3530,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.91
  },
  {
    "id": "514343178",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.04 11:10:29",
    "closeTime": "2025.08.04 11:32:03",
    "openPrice": 3574.89,
    "closePrice": 3567.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.86
  },
  {
    "id": "514343179",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.04 15:09:53",
    "closeTime": "2025.08.04 15:33:39",
    "openPrice": 3509.72,
    "closePrice": 3502.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.44
  },
  {
    "id": "514343180",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.05 15:26:55",
    "closeTime": "2025.08.05 15:50:27",
    "openPrice": 3506,
    "closePrice": 3500.7,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.3
  },
  {
    "id": "514343181",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.05 15:28:15",
    "closeTime": "2025.08.05 15:52:20",
    "openPrice": 3529.54,
    "closePrice": 3536.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.95
  },
  {
    "id": "514343182",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.05 15:34:03",
    "closeTime": "2025.08.05 15:56:06",
    "openPrice": 3573.71,
    "closePrice": 3567.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.69
  },
  {
    "id": "514343184",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.06 09:39:10",
    "closeTime": "2025.08.06 09:50:49",
    "openPrice": 3566.84,
    "closePrice": 3571.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.45
  },
  {
    "id": "514343183",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.06 09:39:06",
    "closeTime": "2025.08.06 09:56:09",
    "openPrice": 3532.34,
    "closePrice": 3526.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.35
  },
  {
    "id": "514343185",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.06 11:16:46",
    "closeTime": "2025.08.06 11:28:59",
    "openPrice": 3510.5,
    "closePrice": 3518.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.82
  },
  {
    "id": "514343186",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.07 11:26:35",
    "closeTime": "2025.08.07 11:41:09",
    "openPrice": 3505.1,
    "closePrice": 3512.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.13
  },
  {
    "id": "514343187",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.07 12:29:54",
    "closeTime": "2025.08.07 12:50:22",
    "openPrice": 3581.21,
    "closePrice": 3588.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.61
  },
  {
    "id": "514343188",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.07 15:13:15",
    "closeTime": "2025.08.07 15:35:31",
    "openPrice": 3538.92,
    "closePrice": 3531.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.76
  },
  {
    "id": "514343189",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.08.08 10:05:42",
    "closeTime": "2025.08.08 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -100
  },
  {
    "id": "514343190",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.08 11:18:55",
    "closeTime": "2025.08.08 11:36:02",
    "openPrice": 3534.25,
    "closePrice": 3530.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.3
  },
  {
    "id": "514343191",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.08 12:39:12",
    "closeTime": "2025.08.08 12:48:36",
    "openPrice": 3498.97,
    "closePrice": 3491.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.13
  },
  {
    "id": "514343192",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.08 16:06:46",
    "closeTime": "2025.08.08 16:27:55",
    "openPrice": 3587.98,
    "closePrice": 3580.21,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.77
  },
  {
    "id": "514343193",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.11 12:11:42",
    "closeTime": "2025.08.11 12:19:06",
    "openPrice": 3572.58,
    "closePrice": 3564.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.83
  },
  {
    "id": "514343194",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.11 14:31:04",
    "closeTime": "2025.08.11 14:55:27",
    "openPrice": 3511.86,
    "closePrice": 3507.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.85
  },
  {
    "id": "514343195",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.11 15:04:06",
    "closeTime": "2025.08.11 15:20:31",
    "openPrice": 3550.29,
    "closePrice": 3557.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.13
  },
  {
    "id": "514343196",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.12 09:20:26",
    "closeTime": "2025.08.12 09:29:17",
    "openPrice": 3585.09,
    "closePrice": 3592.64,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343197",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.12 10:29:53",
    "closeTime": "2025.08.12 10:43:20",
    "openPrice": 3511.6,
    "closePrice": 3516.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.86
  },
  {
    "id": "514343198",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.12 13:10:11",
    "closeTime": "2025.08.12 13:27:02",
    "openPrice": 3554.37,
    "closePrice": 3549.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.77
  },
  {
    "id": "514343199",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.13 14:15:46",
    "closeTime": "2025.08.13 14:20:02",
    "openPrice": 3540.5,
    "closePrice": 3548.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.53
  },
  {
    "id": "514343200",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.13 14:36:16",
    "closeTime": "2025.08.13 14:46:07",
    "openPrice": 3505.99,
    "closePrice": 3500.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.38
  },
  {
    "id": "514343201",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.13 16:31:24",
    "closeTime": "2025.08.13 16:53:13",
    "openPrice": 3578.89,
    "closePrice": 3586.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.48
  },
  {
    "id": "514343202",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.14 10:06:23",
    "closeTime": "2025.08.14 10:15:25",
    "openPrice": 3584.3,
    "closePrice": 3577.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.39
  },
  {
    "id": "514343203",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.14 12:18:43",
    "closeTime": "2025.08.14 12:26:07",
    "openPrice": 3509.8,
    "closePrice": 3515.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.33
  },
  {
    "id": "514343204",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.14 13:25:13",
    "closeTime": "2025.08.14 13:38:44",
    "openPrice": 3558.97,
    "closePrice": 3563.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.57
  },
  {
    "id": "514343205",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.15 12:14:50",
    "closeTime": "2025.08.15 12:29:38",
    "openPrice": 3552.13,
    "closePrice": 3557.47,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.34
  },
  {
    "id": "514343206",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.15 14:21:32",
    "closeTime": "2025.08.15 14:39:01",
    "openPrice": 3508.59,
    "closePrice": 3503.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.43
  },
  {
    "id": "514343207",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.15 15:03:15",
    "closeTime": "2025.08.15 15:14:23",
    "openPrice": 3590.65,
    "closePrice": 3585.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.4
  },
  {
    "id": "514343208",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.18 09:36:04",
    "closeTime": "2025.08.18 09:59:02",
    "openPrice": 3555.62,
    "closePrice": 3563.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.93
  },
  {
    "id": "514343209",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.18 10:20:17",
    "closeTime": "2025.08.18 10:27:06",
    "openPrice": 3524.27,
    "closePrice": 3517.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.97
  },
  {
    "id": "514343210",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.18 12:27:35",
    "closeTime": "2025.08.18 12:36:26",
    "openPrice": 3596.35,
    "closePrice": 3598.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.39
  },
  {
    "id": "514343211",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.19 09:22:11",
    "closeTime": "2025.08.19 09:28:30",
    "openPrice": 3588.18,
    "closePrice": 3582.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.28
  },
  {
    "id": "514343212",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.19 11:02:52",
    "closeTime": "2025.08.19 11:23:34",
    "openPrice": 3547.97,
    "closePrice": 3540.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.87
  },
  {
    "id": "514343213",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.19 14:34:31",
    "closeTime": "2025.08.19 14:57:48",
    "openPrice": 3529.83,
    "closePrice": 3526.79,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.04
  },
  {
    "id": "514343214",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.20 11:26:17",
    "closeTime": "2025.08.20 11:42:50",
    "openPrice": 3562.46,
    "closePrice": 3569.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343215",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.20 14:24:33",
    "closeTime": "2025.08.20 14:33:12",
    "openPrice": 3586.04,
    "closePrice": 3593.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.91
  },
  {
    "id": "514343216",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.20 14:31:12",
    "closeTime": "2025.08.20 14:47:31",
    "openPrice": 3531.36,
    "closePrice": 3524.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.13
  },
  {
    "id": "514343217",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.21 09:30:24",
    "closeTime": "2025.08.21 09:41:38",
    "openPrice": 3599.92,
    "closePrice": 3595.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.56
  },
  {
    "id": "514343218",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.21 14:13:11",
    "closeTime": "2025.08.21 14:20:35",
    "openPrice": 3556.32,
    "closePrice": 3551.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.95
  },
  {
    "id": "514343219",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.21 16:13:10",
    "closeTime": "2025.08.21 16:22:25",
    "openPrice": 3521.47,
    "closePrice": 3515.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.46
  },
  {
    "id": "514343220",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.22 10:26:51",
    "closeTime": "2025.08.22 10:47:16",
    "openPrice": 3603.1,
    "closePrice": 3607.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.66
  },
  {
    "id": "514343221",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.22 12:21:46",
    "closeTime": "2025.08.22 12:28:35",
    "openPrice": 3568.46,
    "closePrice": 3563.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.78
  },
  {
    "id": "514343222",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.22 14:04:17",
    "closeTime": "2025.08.22 14:21:57",
    "openPrice": 3531.32,
    "closePrice": 3524.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.69
  },
  {
    "id": "514343223",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.25 10:08:42",
    "closeTime": "2025.08.25 10:17:54",
    "openPrice": 3535.24,
    "closePrice": 3530.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.08
  },
  {
    "id": "514343224",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.25 10:28:32",
    "closeTime": "2025.08.25 10:49:50",
    "openPrice": 3557.77,
    "closePrice": 3560.11,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.34
  },
  {
    "id": "514343225",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.25 12:14:04",
    "closeTime": "2025.08.25 12:23:45",
    "openPrice": 3589.47,
    "closePrice": 3583.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.53
  },
  {
    "id": "514343226",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.26 13:13:24",
    "closeTime": "2025.08.26 13:27:53",
    "openPrice": 3559.07,
    "closePrice": 3552,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.07
  },
  {
    "id": "514343227",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.26 14:38:35",
    "closeTime": "2025.08.26 14:48:25",
    "openPrice": 3603.47,
    "closePrice": 3596.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.2
  },
  {
    "id": "514343228",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.26 15:11:44",
    "closeTime": "2025.08.26 15:21:45",
    "openPrice": 3527.26,
    "closePrice": 3534.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.15
  },
  {
    "id": "514343230",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.27 12:01:24",
    "closeTime": "2025.08.27 12:16:09",
    "openPrice": 3522.27,
    "closePrice": 3515.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.56
  },
  {
    "id": "514343229",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.27 12:00:43",
    "closeTime": "2025.08.27 12:21:05",
    "openPrice": 3570.87,
    "closePrice": 3563.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.68
  },
  {
    "id": "514343231",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.28 09:32:34",
    "closeTime": "2025.08.28 09:51:54",
    "openPrice": 3563.14,
    "closePrice": 3569.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.64
  },
  {
    "id": "514343232",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.28 12:05:36",
    "closeTime": "2025.08.28 12:15:16",
    "openPrice": 3526.51,
    "closePrice": 3520.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.23
  },
  {
    "id": "514343233",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.29 09:33:08",
    "closeTime": "2025.08.29 09:42:46",
    "openPrice": 3526.41,
    "closePrice": 3518.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.69
  },
  {
    "id": "514343234",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.29 14:20:56",
    "closeTime": "2025.08.29 14:41:25",
    "openPrice": 3561.11,
    "closePrice": 3567.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.5
  },
  {
    "id": "514343235",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.01 09:37:22",
    "closeTime": "2025.09.01 09:58:26",
    "openPrice": 3597.22,
    "closePrice": 3604.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.47
  },
  {
    "id": "514343236",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.01 10:19:05",
    "closeTime": "2025.09.01 10:41:49",
    "openPrice": 3799.38,
    "closePrice": 3793.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.44
  },
  {
    "id": "514343237",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.01 10:19:14",
    "closeTime": "2025.09.01 10:43:31",
    "openPrice": 3747.12,
    "closePrice": 3739.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.59
  },
  {
    "id": "514343238",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.01 11:02:29",
    "closeTime": "2025.09.01 11:18:42",
    "openPrice": 3655.62,
    "closePrice": 3647.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.86
  },
  {
    "id": "514343239",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.01 14:15:02",
    "closeTime": "2025.09.01 14:35:51",
    "openPrice": 3690.12,
    "closePrice": 3683.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.17
  },
  {
    "id": "514343240",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.02 09:08:27",
    "closeTime": "2025.09.02 09:29:21",
    "openPrice": 3697.1,
    "closePrice": 3689.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.97
  },
  {
    "id": "514343241",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.02 12:01:08",
    "closeTime": "2025.09.02 12:10:02",
    "openPrice": 3652.16,
    "closePrice": 3644.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.91
  },
  {
    "id": "514343242",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.02 14:26:13",
    "closeTime": "2025.09.02 14:50:32",
    "openPrice": 3745.39,
    "closePrice": 3751.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.73
  },
  {
    "id": "514343243",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.02 15:20:48",
    "closeTime": "2025.09.02 15:33:35",
    "openPrice": 3806.54,
    "closePrice": 3813.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.76
  },
  {
    "id": "514343244",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.02 16:34:35",
    "closeTime": "2025.09.02 16:39:50",
    "openPrice": 3601.78,
    "closePrice": 3597.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.42
  },
  {
    "id": "514343245",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 09:07:31",
    "closeTime": "2025.09.03 09:14:28",
    "openPrice": 3594.78,
    "closePrice": 3602.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.5
  },
  {
    "id": "514343246",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 09:23:28",
    "closeTime": "2025.09.03 09:45:34",
    "openPrice": 3692.67,
    "closePrice": 3699.47,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.8
  },
  {
    "id": "514343247",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.03 10:36:58",
    "closeTime": "2025.09.03 10:43:32",
    "openPrice": 3753.78,
    "closePrice": 3748.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.76
  },
  {
    "id": "514343248",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 14:35:43",
    "closeTime": "2025.09.03 14:56:18",
    "openPrice": 3661.52,
    "closePrice": 3667.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343249",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.04 11:32:32",
    "closeTime": "2025.09.04 11:39:34",
    "openPrice": 3758.94,
    "closePrice": 3753.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5
  },
  {
    "id": "514343250",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.04 16:31:37",
    "closeTime": "2025.09.04 16:54:10",
    "openPrice": 3605.8,
    "closePrice": 3600.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343252",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.04 16:39:44",
    "closeTime": "2025.09.04 16:59:52",
    "openPrice": 3704.08,
    "closePrice": 3699.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.42
  },
  {
    "id": "514343251",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.04 16:39:23",
    "closeTime": "2025.09.04 17:03:31",
    "openPrice": 3659.88,
    "closePrice": 3667.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.2
  },
  {
    "id": "514343253",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 10:11:25",
    "closeTime": "2025.09.05 10:18:03",
    "openPrice": 3750.96,
    "closePrice": 3758.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.3
  },
  {
    "id": "514343254",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.05 11:13:56",
    "closeTime": "2025.09.05 11:34:51",
    "openPrice": 3662.43,
    "closePrice": 3654.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.85
  },
  {
    "id": "514343255",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 12:24:32",
    "closeTime": "2025.09.05 12:45:55",
    "openPrice": 3618.83,
    "closePrice": 3625.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.34
  },
  {
    "id": "514343256",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 15:28:02",
    "closeTime": "2025.09.05 15:38:04",
    "openPrice": 3710.91,
    "closePrice": 3716.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.46
  },
  {
    "id": "514343257",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.08 09:20:05",
    "closeTime": "2025.09.08 09:39:31",
    "openPrice": 3662.22,
    "closePrice": 3666.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.79
  },
  {
    "id": "514343258",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.08 09:34:00",
    "closeTime": "2025.09.08 09:43:12",
    "openPrice": 3718.59,
    "closePrice": 3725.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.36
  },
  {
    "id": "514343259",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.08 11:08:04",
    "closeTime": "2025.09.08 11:27:26",
    "openPrice": 3766.36,
    "closePrice": 3772.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.74
  },
  {
    "id": "514343260",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.08 13:13:19",
    "closeTime": "2025.09.08 13:34:07",
    "openPrice": 3616.87,
    "closePrice": 3624.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343261",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.09 10:31:10",
    "closeTime": "2025.09.09 10:44:19",
    "openPrice": 3662.43,
    "closePrice": 3665.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.75
  },
  {
    "id": "514343262",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.09 11:11:44",
    "closeTime": "2025.09.09 11:32:26",
    "openPrice": 3616.05,
    "closePrice": 3611.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.8
  },
  {
    "id": "514343264",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.09 15:05:36",
    "closeTime": "2025.09.09 15:11:34",
    "openPrice": 3761.98,
    "closePrice": 3759.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.72
  },
  {
    "id": "514343263",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.09 15:01:37",
    "closeTime": "2025.09.09 15:25:05",
    "openPrice": 3711.98,
    "closePrice": 3705.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.29
  },
  {
    "id": "514343265",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 09:07:20",
    "closeTime": "2025.09.10 09:27:22",
    "openPrice": 3665.49,
    "closePrice": 3668.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.18
  },
  {
    "id": "514343266",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.10 11:15:06",
    "closeTime": "2025.09.10 11:23:12",
    "openPrice": 3617.95,
    "closePrice": 3624.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.14
  },
  {
    "id": "514343267",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 11:21:03",
    "closeTime": "2025.09.10 11:40:11",
    "openPrice": 3709.85,
    "closePrice": 3712.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.34
  },
  {
    "id": "514343268",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 16:30:24",
    "closeTime": "2025.09.10 16:52:20",
    "openPrice": 3765.74,
    "closePrice": 3760.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.29
  },
  {
    "id": "514343269",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.11 09:05:11",
    "closeTime": "2025.09.11 09:16:16",
    "openPrice": 3668.34,
    "closePrice": 3675.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.26
  },
  {
    "id": "514343270",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.11 12:17:53",
    "closeTime": "2025.09.11 12:24:34",
    "openPrice": 3756.35,
    "closePrice": 3763.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.83
  },
  {
    "id": "514343271",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.11 14:28:07",
    "closeTime": "2025.09.11 14:49:56",
    "openPrice": 3720.48,
    "closePrice": 3726.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.15
  },
  {
    "id": "514343272",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.11 16:09:28",
    "closeTime": "2025.09.11 16:27:23",
    "openPrice": 3615.24,
    "closePrice": 3618.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.07
  },
  {
    "id": "514343273",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.12 12:20:27",
    "closeTime": "2025.09.12 12:25:15",
    "openPrice": 3720.38,
    "closePrice": 3715.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.05
  },
  {
    "id": "514343274",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.12 13:29:28",
    "closeTime": "2025.09.12 13:46:04",
    "openPrice": 3757.2,
    "closePrice": 3761.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.46
  },
  {
    "id": "514343275",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.12 14:26:43",
    "closeTime": "2025.09.12 14:32:44",
    "openPrice": 3627.85,
    "closePrice": 3635.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.3
  },
  {
    "id": "514343276",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.12 15:27:17",
    "closeTime": "2025.09.12 15:47:09",
    "openPrice": 3662.24,
    "closePrice": 3665.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.81
  },
  {
    "id": "514343277",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.15 10:06:45",
    "closeTime": "2025.09.15 10:27:28",
    "openPrice": 3668.82,
    "closePrice": 3676.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.79
  },
  {
    "id": "514343278",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.15 10:14:29",
    "closeTime": "2025.09.15 10:38:31",
    "openPrice": 3630.35,
    "closePrice": 3622.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.5
  },
  {
    "id": "514343279",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.15 13:13:18",
    "closeTime": "2025.09.15 13:26:28",
    "openPrice": 3769.12,
    "closePrice": 3763.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.36
  },
  {
    "id": "514343280",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.15 16:38:17",
    "closeTime": "2025.09.15 17:02:35",
    "openPrice": 3721.83,
    "closePrice": 3727.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.26
  },
  {
    "id": "514343281",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.16 11:25:08",
    "closeTime": "2025.09.16 11:42:07",
    "openPrice": 3780.68,
    "closePrice": 3776.11,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.57
  },
  {
    "id": "514343282",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.16 15:18:20",
    "closeTime": "2025.09.16 15:42:58",
    "openPrice": 3729.93,
    "closePrice": 3735.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.91
  },
  {
    "id": "514343283",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.16 15:35:08",
    "closeTime": "2025.09.16 15:55:29",
    "openPrice": 3674.13,
    "closePrice": 3668.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.29
  },
  {
    "id": "514343284",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.16 16:13:04",
    "closeTime": "2025.09.16 16:31:56",
    "openPrice": 3618.42,
    "closePrice": 3613.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.93
  },
  {
    "id": "514343285",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.17 09:23:51",
    "closeTime": "2025.09.17 09:37:00",
    "openPrice": 3675.76,
    "closePrice": 3668.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.56
  },
  {
    "id": "514343286",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.17 10:24:21",
    "closeTime": "2025.09.17 10:37:20",
    "openPrice": 3763.79,
    "closePrice": 3759.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.3
  },
  {
    "id": "514343287",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 11:13:25",
    "closeTime": "2025.09.17 11:36:19",
    "openPrice": 3633.67,
    "closePrice": 3639.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.13
  },
  {
    "id": "514343288",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 13:17:28",
    "closeTime": "2025.09.17 13:34:03",
    "openPrice": 3722.7,
    "closePrice": 3729.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.02
  },
  {
    "id": "514343289",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.18 11:33:09",
    "closeTime": "2025.09.18 11:48:13",
    "openPrice": 3718.7,
    "closePrice": 3710.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.74
  },
  {
    "id": "514343290",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.18 16:04:14",
    "closeTime": "2025.09.18 16:12:29",
    "openPrice": 3686.9,
    "closePrice": 3679.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.07
  },
  {
    "id": "514343291",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 16:10:28",
    "closeTime": "2025.09.18 16:23:45",
    "openPrice": 3766.4,
    "closePrice": 3774.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.82
  },
  {
    "id": "514343292",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 16:38:40",
    "closeTime": "2025.09.18 17:02:32",
    "openPrice": 3628.83,
    "closePrice": 3634.47,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.64
  },
  {
    "id": "514343293",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.09.19 10:05:42",
    "closeTime": "2025.09.19 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -350
  },
  {
    "id": "514343294",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.19 12:14:29",
    "closeTime": "2025.09.19 12:21:13",
    "openPrice": 3727.3,
    "closePrice": 3732.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.04
  },
  {
    "id": "514343295",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.19 12:38:05",
    "closeTime": "2025.09.19 12:49:37",
    "openPrice": 3773.13,
    "closePrice": 3767.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.32
  },
  {
    "id": "514343296",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.19 13:19:51",
    "closeTime": "2025.09.19 13:30:12",
    "openPrice": 3675.04,
    "closePrice": 3679.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.42
  },
  {
    "id": "514343297",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.19 16:33:33",
    "closeTime": "2025.09.19 16:42:43",
    "openPrice": 3633.7,
    "closePrice": 3626.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.98
  },
  {
    "id": "514343298",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.22 09:05:12",
    "closeTime": "2025.09.22 09:22:00",
    "openPrice": 3727.75,
    "closePrice": 3720.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7
  },
  {
    "id": "514343299",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.22 12:21:39",
    "closeTime": "2025.09.22 12:28:37",
    "openPrice": 3637.22,
    "closePrice": 3631.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.04
  },
  {
    "id": "514343300",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.22 15:20:36",
    "closeTime": "2025.09.22 15:38:14",
    "openPrice": 3778.3,
    "closePrice": 3774.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.69
  },
  {
    "id": "514343301",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.22 16:03:15",
    "closeTime": "2025.09.22 16:21:12",
    "openPrice": 3681.06,
    "closePrice": 3673.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.81
  },
  {
    "id": "514343302",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.23 10:19:54",
    "closeTime": "2025.09.23 10:35:36",
    "openPrice": 3679.62,
    "closePrice": 3672.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.27
  },
  {
    "id": "514343303",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.23 11:04:02",
    "closeTime": "2025.09.23 11:19:35",
    "openPrice": 3790.25,
    "closePrice": 3785.7,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.55
  },
  {
    "id": "514343304",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 13:28:30",
    "closeTime": "2025.09.23 13:33:17",
    "openPrice": 3634.6,
    "closePrice": 3639.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.75
  },
  {
    "id": "514343305",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 14:02:35",
    "closeTime": "2025.09.23 14:09:10",
    "openPrice": 3729.68,
    "closePrice": 3736.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.23
  },
  {
    "id": "514343306",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.24 09:38:08",
    "closeTime": "2025.09.24 09:48:16",
    "openPrice": 3685.38,
    "closePrice": 3687.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.42
  },
  {
    "id": "514343307",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.24 13:04:55",
    "closeTime": "2025.09.24 13:18:00",
    "openPrice": 3647.08,
    "closePrice": 3640.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343308",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.24 13:07:40",
    "closeTime": "2025.09.24 13:27:01",
    "openPrice": 3739.81,
    "closePrice": 3732.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.13
  },
  {
    "id": "514343309",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.24 13:24:46",
    "closeTime": "2025.09.24 13:37:56",
    "openPrice": 3790.43,
    "closePrice": 3796.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.58
  },
  {
    "id": "514343310",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.25 09:05:55",
    "closeTime": "2025.09.25 09:16:58",
    "openPrice": 3734.12,
    "closePrice": 3728.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.66
  },
  {
    "id": "514343311",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.25 14:04:35",
    "closeTime": "2025.09.25 14:12:50",
    "openPrice": 3682.32,
    "closePrice": 3688.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.51
  },
  {
    "id": "514343312",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.25 14:39:47",
    "closeTime": "2025.09.25 14:53:12",
    "openPrice": 3641.62,
    "closePrice": 3643.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.05
  },
  {
    "id": "514343313",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.25 15:21:15",
    "closeTime": "2025.09.25 15:38:58",
    "openPrice": 3789.02,
    "closePrice": 3794.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.76
  },
  {
    "id": "514343314",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 11:35:27",
    "closeTime": "2025.09.26 11:48:12",
    "openPrice": 3694.11,
    "closePrice": 3701.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.72
  },
  {
    "id": "514343315",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 12:13:42",
    "closeTime": "2025.09.26 12:37:13",
    "openPrice": 3737.62,
    "closePrice": 3745.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.54
  },
  {
    "id": "514343316",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 13:05:43",
    "closeTime": "2025.09.26 13:28:38",
    "openPrice": 3641.7,
    "closePrice": 3648.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343317",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 13:29:50",
    "closeTime": "2025.09.26 13:43:18",
    "openPrice": 3783.6,
    "closePrice": 3789.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.31
  },
  {
    "id": "514343318",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 10:12:54",
    "closeTime": "2025.09.29 10:20:42",
    "openPrice": 3640.16,
    "closePrice": 3646.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.82
  },
  {
    "id": "514343319",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.29 10:35:20",
    "closeTime": "2025.09.29 10:48:18",
    "openPrice": 3800.99,
    "closePrice": 3794.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.85
  },
  {
    "id": "514343320",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 12:13:09",
    "closeTime": "2025.09.29 12:30:05",
    "openPrice": 3701.21,
    "closePrice": 3696.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.9
  },
  {
    "id": "514343321",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 13:03:30",
    "closeTime": "2025.09.29 13:17:45",
    "openPrice": 3748.66,
    "closePrice": 3753.21,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.55
  },
  {
    "id": "514343322",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.30 10:16:30",
    "closeTime": "2025.09.30 10:40:53",
    "openPrice": 3637.18,
    "closePrice": 3632.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.55
  },
  {
    "id": "514343323",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 13:08:27",
    "closeTime": "2025.09.30 13:25:21",
    "openPrice": 3796.43,
    "closePrice": 3801.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.07
  },
  {
    "id": "514343324",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 15:25:47",
    "closeTime": "2025.09.30 15:33:46",
    "openPrice": 3752.4,
    "closePrice": 3757.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.89
  },
  {
    "id": "514343325",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 16:01:18",
    "closeTime": "2025.09.30 16:18:48",
    "openPrice": 3689.32,
    "closePrice": 3695.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.88
  },
  {
    "id": "514343326",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.01 10:22:17",
    "closeTime": "2025.10.01 10:44:17",
    "openPrice": 3857.27,
    "closePrice": 3863.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.58
  },
  {
    "id": "514343327",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.01 18:09:31",
    "closeTime": "2025.10.01 20:06:31",
    "openPrice": 3669.87,
    "closePrice": 3663.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.02
  },
  {
    "id": "514343328",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.02 13:46:36",
    "closeTime": "2025.10.02 14:49:36",
    "openPrice": 3820.93,
    "closePrice": 3813.65,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.28
  },
  {
    "id": "514343329",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.02 20:16:58",
    "closeTime": "2025.10.02 21:25:58",
    "openPrice": 3689.14,
    "closePrice": 3685.07,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.07
  },
  {
    "id": "514343330",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.03 08:56:46",
    "closeTime": "2025.10.03 11:00:46",
    "openPrice": 3705.32,
    "closePrice": 3700.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.41
  },
  {
    "id": "514343331",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.03 17:12:50",
    "closeTime": "2025.10.03 18:03:50",
    "openPrice": 3880.48,
    "closePrice": 3876.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.98
  },
  {
    "id": "514343332",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.03 20:15:58",
    "closeTime": "2025.10.03 21:02:58",
    "openPrice": 3868.14,
    "closePrice": 3871.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.74
  },
  {
    "id": "514343333",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.04 08:23:40",
    "closeTime": "2025.10.04 10:18:40",
    "openPrice": 3868.59,
    "closePrice": 3864,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.59
  },
  {
    "id": "514343334",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.04 20:58:53",
    "closeTime": "2025.10.04 21:17:53",
    "openPrice": 3686.33,
    "closePrice": 3691.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.29
  },
  {
    "id": "514343335",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.05 09:48:46",
    "closeTime": "2025.10.05 09:57:46",
    "openPrice": 3869.63,
    "closePrice": 3865.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.37
  },
  {
    "id": "514343336",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.05 14:44:29",
    "closeTime": "2025.10.05 15:44:29",
    "openPrice": 3822.2,
    "closePrice": 3828.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.74
  },
  {
    "id": "514343337",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.06 10:37:41",
    "closeTime": "2025.10.06 11:30:41",
    "openPrice": 3817.42,
    "closePrice": 3810.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.18
  },
  {
    "id": "514343338",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.06 18:31:36",
    "closeTime": "2025.10.06 19:47:36",
    "openPrice": 3765.48,
    "closePrice": 3769.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.47
  },
  {
    "id": "514343339",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.06 20:02:39",
    "closeTime": "2025.10.06 21:27:39",
    "openPrice": 3875.76,
    "closePrice": 3868.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.18
  },
  {
    "id": "514343340",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.07 09:41:09",
    "closeTime": "2025.10.07 10:15:09",
    "openPrice": 3822.54,
    "closePrice": 3828.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.42
  },
  {
    "id": "514343341",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.07 16:53:27",
    "closeTime": "2025.10.07 18:13:27",
    "openPrice": 3663.76,
    "closePrice": 3670.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.6
  },
  {
    "id": "514343342",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.08 06:28:27",
    "closeTime": "2025.10.08 08:18:27",
    "openPrice": 3882.87,
    "closePrice": 3875.97,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.9
  },
  {
    "id": "514343343",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.08 18:29:44",
    "closeTime": "2025.10.08 20:30:44",
    "openPrice": 3676.12,
    "closePrice": 3682.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.94
  },
  {
    "id": "514343344",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.09 07:13:11",
    "closeTime": "2025.10.09 08:23:11",
    "openPrice": 3712.08,
    "closePrice": 3707.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.71
  },
  {
    "id": "514343345",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.09 12:04:26",
    "closeTime": "2025.10.09 12:36:26",
    "openPrice": 3735.15,
    "closePrice": 3730.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.16
  },
  {
    "id": "514343346",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.09 11:05:56",
    "closeTime": "2025.10.09 12:43:56",
    "openPrice": 3682.28,
    "closePrice": 3676.39,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.89
  },
  {
    "id": "514343347",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.10 08:53:37",
    "closeTime": "2025.10.10 10:07:37",
    "openPrice": 3744.67,
    "closePrice": 3738.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.01
  },
  {
    "id": "514343348",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.10 14:09:34",
    "closeTime": "2025.10.10 14:30:34",
    "openPrice": 3874.55,
    "closePrice": 3878.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.35
  },
  {
    "id": "514343349",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.11 11:22:30",
    "closeTime": "2025.10.11 11:40:30",
    "openPrice": 3780.32,
    "closePrice": 3786.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.95
  },
  {
    "id": "514343350",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.11 20:38:04",
    "closeTime": "2025.10.11 20:51:04",
    "openPrice": 3853.44,
    "closePrice": 3846.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.78
  },
  {
    "id": "514343351",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.12 05:51:05",
    "closeTime": "2025.10.12 08:04:05",
    "openPrice": 3788.78,
    "closePrice": 3793.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.09
  },
  {
    "id": "514343352",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.12 11:01:02",
    "closeTime": "2025.10.12 13:08:02",
    "openPrice": 3799.61,
    "closePrice": 3805.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343353",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.12 12:08:34",
    "closeTime": "2025.10.12 14:04:34",
    "openPrice": 3718.22,
    "closePrice": 3723.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.32
  },
  {
    "id": "514343354",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.13 16:22:39",
    "closeTime": "2025.10.13 18:27:39",
    "openPrice": 3743.06,
    "closePrice": 3738.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.97
  },
  {
    "id": "514343355",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.13 18:16:22",
    "closeTime": "2025.10.13 19:37:22",
    "openPrice": 3700.26,
    "closePrice": 3706.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.28
  },
  {
    "id": "514343356",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.14 12:38:47",
    "closeTime": "2025.10.14 14:17:47",
    "openPrice": 3862.09,
    "closePrice": 3855.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.43
  },
  {
    "id": "514343357",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.14 15:12:46",
    "closeTime": "2025.10.14 17:17:46",
    "openPrice": 3685.69,
    "closePrice": 3679.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343358",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.15 07:38:45",
    "closeTime": "2025.10.15 08:47:45",
    "openPrice": 3865.82,
    "closePrice": 3859.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.79
  },
  {
    "id": "514343359",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.15 07:16:57",
    "closeTime": "2025.10.15 08:59:57",
    "openPrice": 3841.82,
    "closePrice": 3834.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.83
  },
  {
    "id": "514343360",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.15 11:01:40",
    "closeTime": "2025.10.15 12:02:40",
    "openPrice": 3744.13,
    "closePrice": 3750.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.44
  },
  {
    "id": "514343361",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.16 09:12:23",
    "closeTime": "2025.10.16 09:18:23",
    "openPrice": 3666.31,
    "closePrice": 3672.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.07
  },
  {
    "id": "514343362",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.16 14:24:01",
    "closeTime": "2025.10.16 16:26:01",
    "openPrice": 3786.85,
    "closePrice": 3781.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.82
  },
  {
    "id": "514343363",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.17 07:11:06",
    "closeTime": "2025.10.17 08:26:06",
    "openPrice": 3746.64,
    "closePrice": 3742.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.95
  },
  {
    "id": "514343364",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.17 09:07:06",
    "closeTime": "2025.10.17 11:28:06",
    "openPrice": 3786.19,
    "closePrice": 3782.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.76
  },
  {
    "id": "514343365",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.18 09:54:47",
    "closeTime": "2025.10.18 10:55:47",
    "openPrice": 3743.47,
    "closePrice": 3736.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.25
  },
  {
    "id": "514343366",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.18 15:03:41",
    "closeTime": "2025.10.18 17:20:41",
    "openPrice": 3705.44,
    "closePrice": 3698.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.21
  },
  {
    "id": "514343367",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.18 19:29:48",
    "closeTime": "2025.10.18 21:30:48",
    "openPrice": 3702.86,
    "closePrice": 3709.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.67
  },
  {
    "id": "514343368",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.19 12:52:57",
    "closeTime": "2025.10.19 14:53:57",
    "openPrice": 3672.5,
    "closePrice": 3678.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.68
  },
  {
    "id": "514343369",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.19 17:55:34",
    "closeTime": "2025.10.19 19:28:34",
    "openPrice": 3889.35,
    "closePrice": 3895.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.7
  },
  {
    "id": "514343370",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.20 15:52:48",
    "closeTime": "2025.10.20 16:18:48",
    "openPrice": 3827.81,
    "closePrice": 3820.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.03
  },
  {
    "id": "514343371",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.20 14:33:16",
    "closeTime": "2025.10.20 16:41:16",
    "openPrice": 3682.31,
    "closePrice": 3686.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.18
  },
  {
    "id": "514343372",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.21 11:09:45",
    "closeTime": "2025.10.21 11:20:45",
    "openPrice": 3848.62,
    "closePrice": 3854.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.33
  },
  {
    "id": "514343373",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.21 12:53:34",
    "closeTime": "2025.10.21 14:09:34",
    "openPrice": 3664.77,
    "closePrice": 3671.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.92
  },
  {
    "id": "514343374",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.21 17:18:01",
    "closeTime": "2025.10.21 18:22:01",
    "openPrice": 3772.01,
    "closePrice": 3778.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.66
  },
  {
    "id": "514343375",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.22 09:26:27",
    "closeTime": "2025.10.22 11:26:27",
    "openPrice": 3661.78,
    "closePrice": 3654.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.02
  },
  {
    "id": "514343376",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.22 15:00:01",
    "closeTime": "2025.10.22 16:19:01",
    "openPrice": 3754.81,
    "closePrice": 3747.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.98
  },
  {
    "id": "514343377",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.23 11:06:47",
    "closeTime": "2025.10.23 13:01:47",
    "openPrice": 3689.71,
    "closePrice": 3683.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.27
  },
  {
    "id": "514343378",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.23 12:59:16",
    "closeTime": "2025.10.23 14:34:16",
    "openPrice": 3856.65,
    "closePrice": 3862.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.27
  },
  {
    "id": "514343379",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.10.24 10:05:42",
    "closeTime": "2025.10.24 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -500
  },
  {
    "id": "514343380",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 08:48:05",
    "closeTime": "2025.10.24 10:33:05",
    "openPrice": 3837.27,
    "closePrice": 3842.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343381",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 13:19:43",
    "closeTime": "2025.10.24 14:07:43",
    "openPrice": 3733.32,
    "closePrice": 3738.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.8
  },
  {
    "id": "514343382",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 16:59:32",
    "closeTime": "2025.10.24 18:40:32",
    "openPrice": 3811.03,
    "closePrice": 3816.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.73
  },
  {
    "id": "514343383",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.25 11:17:45",
    "closeTime": "2025.10.25 13:04:45",
    "openPrice": 3839.52,
    "closePrice": 3843.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.09
  },
  {
    "id": "514343384",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.25 15:11:27",
    "closeTime": "2025.10.25 17:34:27",
    "openPrice": 3741.89,
    "closePrice": 3737.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.29
  },
  {
    "id": "514343385",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.26 08:30:32",
    "closeTime": "2025.10.26 08:41:32",
    "openPrice": 3875.59,
    "closePrice": 3869.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.49
  },
  {
    "id": "514343386",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.26 09:02:53",
    "closeTime": "2025.10.26 09:40:53",
    "openPrice": 3714.72,
    "closePrice": 3708.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.59
  },
  {
    "id": "514343387",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.27 07:23:03",
    "closeTime": "2025.10.27 08:52:03",
    "openPrice": 3879.2,
    "closePrice": 3884.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.55
  },
  {
    "id": "514343388",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.27 10:27:40",
    "closeTime": "2025.10.27 10:51:40",
    "openPrice": 3850.64,
    "closePrice": 3856.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.69
  },
  {
    "id": "514343389",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.27 18:33:58",
    "closeTime": "2025.10.27 18:59:58",
    "openPrice": 3666.64,
    "closePrice": 3659.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.78
  },
  {
    "id": "514343390",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.28 13:46:32",
    "closeTime": "2025.10.28 14:06:32",
    "openPrice": 3894.54,
    "closePrice": 3890.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.82
  },
  {
    "id": "514343391",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.28 12:42:02",
    "closeTime": "2025.10.28 14:33:02",
    "openPrice": 3768.48,
    "closePrice": 3762.39,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.09
  },
  {
    "id": "514343392",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.29 11:27:45",
    "closeTime": "2025.10.29 13:07:45",
    "openPrice": 3697.57,
    "closePrice": 3694.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.45
  },
  {
    "id": "514343393",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.29 19:05:26",
    "closeTime": "2025.10.29 20:53:26",
    "openPrice": 3696.67,
    "closePrice": 3693,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.67
  },
  {
    "id": "514343394",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.30 11:34:44",
    "closeTime": "2025.10.30 13:30:44",
    "openPrice": 3724.17,
    "closePrice": 3721.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.56
  },
  {
    "id": "514343395",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.30 16:21:19",
    "closeTime": "2025.10.30 16:50:19",
    "openPrice": 3725.1,
    "closePrice": 3721.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.42
  },
  {
    "id": "514343396",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.30 16:20:25",
    "closeTime": "2025.10.30 18:23:25",
    "openPrice": 3807.79,
    "closePrice": 3803.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.38
  },
  {
    "id": "514343397",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.02 22:40:00",
    "closeTime": "2025.11.03 01:00:00",
    "openPrice": 3975.95,
    "closePrice": 3983.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343398",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.03 05:39:00",
    "closeTime": "2025.11.03 07:28:00",
    "openPrice": 4002.62,
    "closePrice": 4010.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343399",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.03 12:22:00",
    "closeTime": "2025.11.03 13:57:00",
    "openPrice": 3997.46,
    "closePrice": 4005.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343400",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.03 18:19:00",
    "closeTime": "2025.11.03 20:26:00",
    "openPrice": 3991.81,
    "closePrice": 3999.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343401",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.04 03:03:00",
    "closeTime": "2025.11.04 03:55:00",
    "openPrice": 3984.07,
    "closePrice": 3989.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.68
  },
  {
    "id": "514343402",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.04 08:36:00",
    "closeTime": "2025.11.04 10:24:00",
    "openPrice": 3988.66,
    "closePrice": 3995.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.35
  },
  {
    "id": "514343403",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.04 16:14:00",
    "closeTime": "2025.11.04 16:52:00",
    "openPrice": 3934.34,
    "closePrice": 3942.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343404",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.04 21:20:00",
    "closeTime": "2025.11.04 23:21:00",
    "openPrice": 3929.18,
    "closePrice": 3934.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.65
  },
  {
    "id": "514343405",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.05 06:40:00",
    "closeTime": "2025.11.05 06:50:00",
    "openPrice": 3963.65,
    "closePrice": 3969.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.69
  },
  {
    "id": "514343406",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.05 12:32:00",
    "closeTime": "2025.11.05 13:19:00",
    "openPrice": 3954.78,
    "closePrice": 3960.77,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.99
  },
  {
    "id": "514343407",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.05 19:39:00",
    "closeTime": "2025.11.05 19:48:00",
    "openPrice": 3975.12,
    "closePrice": 3983.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.9
  },
  {
    "id": "514343408",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.06 03:11:00",
    "closeTime": "2025.11.06 03:16:00",
    "openPrice": 3961.75,
    "closePrice": 3969.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343409",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.06 09:32:00",
    "closeTime": "2025.11.06 09:45:00",
    "openPrice": 3998.12,
    "closePrice": 4003.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.84
  },
  {
    "id": "514343410",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.06 14:14:00",
    "closeTime": "2025.11.06 16:14:00",
    "openPrice": 4003.48,
    "closePrice": 4007.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.48
  },
  {
    "id": "514343411",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.06 21:37:00",
    "closeTime": "2025.11.06 22:43:00",
    "openPrice": 3989.51,
    "closePrice": 3982.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.7
  },
  {
    "id": "514343412",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.07 04:04:00",
    "closeTime": "2025.11.07 06:12:00",
    "openPrice": 3998.33,
    "closePrice": 3992.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.59
  },
  {
    "id": "514343413",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.07 10:57:00",
    "closeTime": "2025.11.07 12:41:00",
    "openPrice": 3997.55,
    "closePrice": 4005.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343414",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.07 18:43:00",
    "closeTime": "2025.11.07 19:09:00",
    "openPrice": 3992.68,
    "closePrice": 4000.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.74
  },
  {
    "id": "514343415",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.10 01:49:00",
    "closeTime": "2025.11.10 02:38:00",
    "openPrice": 4004.66,
    "closePrice": 4012.64,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.98
  },
  {
    "id": "514343416",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.10 09:02:00",
    "closeTime": "2025.11.10 09:07:00",
    "openPrice": 4068.29,
    "closePrice": 4074.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.01
  },
  {
    "id": "514343417",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.10 15:03:00",
    "closeTime": "2025.11.10 15:36:00",
    "openPrice": 4093.22,
    "closePrice": 4101.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343418",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.10 19:46:00",
    "closeTime": "2025.11.10 22:05:00",
    "openPrice": 4105.72,
    "closePrice": 4113.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.53
  },
  {
    "id": "514343419",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.11 03:50:00",
    "closeTime": "2025.11.11 05:33:00",
    "openPrice": 4142.72,
    "closePrice": 4146.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.79
  },
  {
    "id": "514343420",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.11 10:37:00",
    "closeTime": "2025.11.11 12:02:00",
    "openPrice": 4131.95,
    "closePrice": 4139.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343421",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.11 16:44:00",
    "closeTime": "2025.11.11 18:31:00",
    "openPrice": 4101.38,
    "closePrice": 4107.16,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.78
  },
  {
    "id": "514343422",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.12 01:28:00",
    "closeTime": "2025.11.12 02:00:00",
    "openPrice": 4132.64,
    "closePrice": 4140.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343423",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.12 07:17:00",
    "closeTime": "2025.11.12 08:29:00",
    "openPrice": 4106.91,
    "closePrice": 4114.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.82
  },
  {
    "id": "514343424",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.12 13:53:00",
    "closeTime": "2025.11.12 14:57:00",
    "openPrice": 4122.24,
    "closePrice": 4130.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.79
  },
  {
    "id": "514343425",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.12 20:34:00",
    "closeTime": "2025.11.12 21:26:00",
    "openPrice": 4190.49,
    "closePrice": 4194.79,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.3
  },
  {
    "id": "514343426",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.13 03:09:00",
    "closeTime": "2025.11.13 04:55:00",
    "openPrice": 4184.32,
    "closePrice": 4191.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.18
  },
  {
    "id": "514343427",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.13 10:44:00",
    "closeTime": "2025.11.13 11:24:00",
    "openPrice": 4227.96,
    "closePrice": 4232.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.57
  },
  {
    "id": "514343428",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.13 16:02:00",
    "closeTime": "2025.11.13 17:53:00",
    "openPrice": 4188.91,
    "closePrice": 4196.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.81
  },
  {
    "id": "514343429",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.14 00:21:00",
    "closeTime": "2025.11.14 01:22:00",
    "openPrice": 4174.65,
    "closePrice": 4180.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.53
  },
  {
    "id": "514343430",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.14 07:38:00",
    "closeTime": "2025.11.14 07:50:00",
    "openPrice": 4188.88,
    "closePrice": 4193.48,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.6
  },
  {
    "id": "514343431",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.14 13:20:00",
    "closeTime": "2025.11.14 14:19:00",
    "openPrice": 4113.68,
    "closePrice": 4118.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.72
  },
  {
    "id": "514343432",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.14 19:44:00",
    "closeTime": "2025.11.14 20:48:00",
    "openPrice": 4089.74,
    "closePrice": 4096.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.93
  },
  {
    "id": "514343433",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.17 03:00:00",
    "closeTime": "2025.11.17 04:17:00",
    "openPrice": 4084.02,
    "closePrice": 4088.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.11
  },
  {
    "id": "514343434",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.17 09:37:00",
    "closeTime": "2025.11.17 10:46:00",
    "openPrice": 4070.93,
    "closePrice": 4077.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343435",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.17 15:51:00",
    "closeTime": "2025.11.17 17:14:00",
    "openPrice": 4061.02,
    "closePrice": 4068.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.56
  },
  {
    "id": "514343436",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.17 21:28:00",
    "closeTime": "2025.11.17 23:43:00",
    "openPrice": 4047.67,
    "closePrice": 4042.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.16
  },
  {
    "id": "514343437",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.18 05:45:00",
    "closeTime": "2025.11.18 07:12:00",
    "openPrice": 4014.29,
    "closePrice": 4011,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.29
  },
  {
    "id": "514343438",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.18 11:21:00",
    "closeTime": "2025.11.18 13:41:00",
    "openPrice": 4038.76,
    "closePrice": 4046.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343439",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.18 18:59:00",
    "closeTime": "2025.11.18 20:10:00",
    "openPrice": 4063.91,
    "closePrice": 4070.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.36
  },
  {
    "id": "514343440",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.19 03:30:00",
    "closeTime": "2025.11.19 03:39:00",
    "openPrice": 4056.9,
    "closePrice": 4061.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.2
  },
  {
    "id": "514343441",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.19 09:18:00",
    "closeTime": "2025.11.19 10:07:00",
    "openPrice": 4076.43,
    "closePrice": 4084.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343442",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.19 15:09:00",
    "closeTime": "2025.11.19 16:36:00",
    "openPrice": 4108.38,
    "closePrice": 4115.64,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.26
  },
  {
    "id": "514343443",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.19 20:55:00",
    "closeTime": "2025.11.19 23:05:00",
    "openPrice": 4064.55,
    "closePrice": 4071.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.07
  },
  {
    "id": "514343444",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.20 05:41:00",
    "closeTime": "2025.11.20 06:34:00",
    "openPrice": 4079.59,
    "closePrice": 4076.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.49
  },
  {
    "id": "514343445",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.20 10:48:00",
    "closeTime": "2025.11.20 13:03:00",
    "openPrice": 4049.46,
    "closePrice": 4056.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.22
  },
  {
    "id": "514343446",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.20 18:00:00",
    "closeTime": "2025.11.20 19:31:00",
    "openPrice": 4048.76,
    "closePrice": 4055.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.54
  },
  {
    "id": "514343447",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.21 02:39:00",
    "closeTime": "2025.11.21 03:00:00",
    "openPrice": 4062.37,
    "closePrice": 4069.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.25
  },
  {
    "id": "514343448",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.21 08:59:00",
    "closeTime": "2025.11.21 09:29:00",
    "openPrice": 4029.34,
    "closePrice": 4037.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343449",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.21 14:52:00",
    "closeTime": "2025.11.21 15:58:00",
    "openPrice": 4070.31,
    "closePrice": 4077.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.64
  },
  {
    "id": "514343450",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.21 22:07:00",
    "closeTime": "2025.11.21 22:27:00",
    "openPrice": 4065.34,
    "closePrice": 4070.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.51
  },
  {
    "id": "514343451",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.24 04:05:00",
    "closeTime": "2025.11.24 05:55:00",
    "openPrice": 4041.34,
    "closePrice": 4048.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.51
  },
  {
    "id": "514343452",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.24 10:23:00",
    "closeTime": "2025.11.24 12:24:00",
    "openPrice": 4061.77,
    "closePrice": 4068.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.69
  },
  {
    "id": "514343453",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.24 18:03:00",
    "closeTime": "2025.11.24 18:53:00",
    "openPrice": 4088.6,
    "closePrice": 4096.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.94
  },
  {
    "id": "514343454",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.25 01:38:00",
    "closeTime": "2025.11.25 02:22:00",
    "openPrice": 4131.71,
    "closePrice": 4137.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.86
  },
  {
    "id": "514343455",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.11.25 08:45:00",
    "closeTime": "2025.11.25 08:51:00",
    "openPrice": 4146.94,
    "closePrice": 4141.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.12
  },
  {
    "id": "514343456",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.25 13:32:00",
    "closeTime": "2025.11.25 15:20:00",
    "openPrice": 4135.3,
    "closePrice": 4143.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343457",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.25 19:52:00",
    "closeTime": "2025.11.25 21:48:00",
    "openPrice": 4122.9,
    "closePrice": 4130.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.88
  },
  {
    "id": "514343458",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.26 04:12:00",
    "closeTime": "2025.11.26 05:17:00",
    "openPrice": 4157.79,
    "closePrice": 4163.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.13
  },
  {
    "id": "514343459",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.26 10:31:00",
    "closeTime": "2025.11.26 11:46:00",
    "openPrice": 4150.96,
    "closePrice": 4158.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.86
  },
  {
    "id": "514343460",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.26 17:58:00",
    "closeTime": "2025.11.26 18:15:00",
    "openPrice": 4155.2,
    "closePrice": 4162.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.7
  },
  {
    "id": "514343461",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.26 23:38:00",
    "closeTime": "2025.11.27 01:44:00",
    "openPrice": 4157.21,
    "closePrice": 4164.79,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.58
  },
  {
    "id": "514343462",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.27 06:50:00",
    "closeTime": "2025.11.27 08:12:00",
    "openPrice": 4148.5,
    "closePrice": 4152.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.87
  },
  {
    "id": "514343463",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.27 13:12:00",
    "closeTime": "2025.11.27 14:41:00",
    "openPrice": 4150.55,
    "closePrice": 4155.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.41
  },
  {
    "id": "514343464",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.27 19:54:00",
    "closeTime": "2025.11.27 21:11:00",
    "openPrice": 4155.69,
    "closePrice": 4159.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.74
  },
  {
    "id": "514343465",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.28 05:48:00",
    "closeTime": "2025.11.28 07:12:00",
    "openPrice": 4173.38,
    "closePrice": 4181.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343467",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.11.28 10:05:42",
    "closeTime": "2025.11.28 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -230
  },
  {
    "id": "514343466",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.28 13:01:00",
    "closeTime": "2025.11.28 15:16:00",
    "openPrice": 4165.04,
    "closePrice": 4172.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.15
  },
  {
    "id": "514343468",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.11.30 22:47:00",
    "closeTime": "2025.12.01 01:00:00",
    "openPrice": 4220.43,
    "closePrice": 4228.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343469",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.01 08:30:00",
    "closeTime": "2025.12.01 08:36:00",
    "openPrice": 4223.38,
    "closePrice": 4231.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343470",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.01 14:03:00",
    "closeTime": "2025.12.01 16:13:00",
    "openPrice": 4238.96,
    "closePrice": 4246.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343471",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.01 22:14:00",
    "closeTime": "2025.12.01 23:49:00",
    "openPrice": 4224.19,
    "closePrice": 4232.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343472",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.02 06:43:00",
    "closeTime": "2025.12.02 08:26:00",
    "openPrice": 4200.24,
    "closePrice": 4208.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343473",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.02 14:59:00",
    "closeTime": "2025.12.02 16:02:00",
    "openPrice": 4208.49,
    "closePrice": 4216.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343474",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.02 22:28:00",
    "closeTime": "2025.12.02 23:39:00",
    "openPrice": 4203.8,
    "closePrice": 4210.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.53
  },
  {
    "id": "514343475",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.03 06:30:00",
    "closeTime": "2025.12.03 08:16:00",
    "openPrice": 4201.72,
    "closePrice": 4208.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.43
  },
  {
    "id": "514343476",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.03 14:56:00",
    "closeTime": "2025.12.03 15:52:00",
    "openPrice": 4223.62,
    "closePrice": 4231.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343477",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.03 21:51:00",
    "closeTime": "2025.12.03 23:29:00",
    "openPrice": 4199.35,
    "closePrice": 4206.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343478",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.04 07:41:00",
    "closeTime": "2025.12.04 08:05:00",
    "openPrice": 4188.7,
    "closePrice": 4183.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.84
  },
  {
    "id": "514343479",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.04 14:53:00",
    "closeTime": "2025.12.04 15:42:00",
    "openPrice": 4186.57,
    "closePrice": 4191.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.53
  },
  {
    "id": "514343480",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.04 23:05:00",
    "closeTime": "2025.12.04 23:18:00",
    "openPrice": 4199.46,
    "closePrice": 4207.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343481",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.05 06:31:00",
    "closeTime": "2025.12.05 07:55:00",
    "openPrice": 4215.26,
    "closePrice": 4219.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.35
  },
  {
    "id": "514343482",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.05 14:58:00",
    "closeTime": "2025.12.05 15:32:00",
    "openPrice": 4228.28,
    "closePrice": 4234.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.18
  },
  {
    "id": "514343483",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.05 21:33:00",
    "closeTime": "2025.12.05 23:08:00",
    "openPrice": 4192.63,
    "closePrice": 4200.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.59
  },
  {
    "id": "514343484",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.08 07:04:00",
    "closeTime": "2025.12.08 08:14:00",
    "openPrice": 4207,
    "closePrice": 4215,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343485",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.08 15:12:00",
    "closeTime": "2025.12.08 15:50:00",
    "openPrice": 4196.62,
    "closePrice": 4202,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.38
  },
  {
    "id": "514343486",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.08 21:29:00",
    "closeTime": "2025.12.08 23:27:00",
    "openPrice": 4186.19,
    "closePrice": 4190.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.67
  },
  {
    "id": "514343487",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.09 05:43:00",
    "closeTime": "2025.12.09 08:03:00",
    "openPrice": 4172.25,
    "closePrice": 4178.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.77
  },
  {
    "id": "514343488",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.09 13:51:00",
    "closeTime": "2025.12.09 15:40:00",
    "openPrice": 4190.35,
    "closePrice": 4198.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343489",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.09 21:19:00",
    "closeTime": "2025.12.09 23:17:00",
    "openPrice": 4202.53,
    "closePrice": 4210.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343490",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.10 07:29:00",
    "closeTime": "2025.12.10 07:53:00",
    "openPrice": 4206.41,
    "closePrice": 4212.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.28
  },
  {
    "id": "514343491",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.10 14:51:00",
    "closeTime": "2025.12.10 15:30:00",
    "openPrice": 4201.52,
    "closePrice": 4196.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.58
  },
  {
    "id": "514343492",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.10 21:57:00",
    "closeTime": "2025.12.10 23:06:00",
    "openPrice": 4214.66,
    "closePrice": 4221.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.26
  },
  {
    "id": "514343493",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.11 05:42:00",
    "closeTime": "2025.12.11 07:43:00",
    "openPrice": 4203.62,
    "closePrice": 4209.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.44
  },
  {
    "id": "514343494",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.11 15:11:00",
    "closeTime": "2025.12.11 15:19:00",
    "openPrice": 4215.66,
    "closePrice": 4209.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.49
  },
  {
    "id": "514343495",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.11 22:10:00",
    "closeTime": "2025.12.11 22:56:00",
    "openPrice": 4270.97,
    "closePrice": 4274.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.78
  },
  {
    "id": "514343496",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.12 06:34:00",
    "closeTime": "2025.12.12 07:33:00",
    "openPrice": 4271.31,
    "closePrice": 4276.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.72
  },
  {
    "id": "514343497",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.12 14:52:00",
    "closeTime": "2025.12.12 15:09:00",
    "openPrice": 4328.4,
    "closePrice": 4334.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.33
  },
  {
    "id": "514343498",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.12 22:04:00",
    "closeTime": "2025.12.12 22:46:00",
    "openPrice": 4292.94,
    "closePrice": 4300.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.69
  },
  {
    "id": "514343499",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.15 06:37:00",
    "closeTime": "2025.12.15 07:22:00",
    "openPrice": 4318.49,
    "closePrice": 4326.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343500",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.15 13:02:00",
    "closeTime": "2025.12.15 14:59:00",
    "openPrice": 4338.66,
    "closePrice": 4345.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.62
  },
  {
    "id": "514343501",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.15 20:20:00",
    "closeTime": "2025.12.15 22:36:00",
    "openPrice": 4297.05,
    "closePrice": 4302.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.56
  },
  {
    "id": "514343502",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.16 06:50:00",
    "closeTime": "2025.12.16 07:12:00",
    "openPrice": 4280.15,
    "closePrice": 4288.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343503",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.16 13:59:00",
    "closeTime": "2025.12.16 14:49:00",
    "openPrice": 4288.14,
    "closePrice": 4293.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.96
  },
  {
    "id": "514343504",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.16 21:33:00",
    "closeTime": "2025.12.16 22:25:00",
    "openPrice": 4317.37,
    "closePrice": 4310.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.47
  },
  {
    "id": "514343505",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.17 05:21:00",
    "closeTime": "2025.12.17 07:02:00",
    "openPrice": 4333.75,
    "closePrice": 4328.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.9
  },
  {
    "id": "514343506",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.17 12:26:00",
    "closeTime": "2025.12.17 14:38:00",
    "openPrice": 4312.44,
    "closePrice": 4317.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.85
  },
  {
    "id": "514343507",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.17 20:27:00",
    "closeTime": "2025.12.17 22:15:00",
    "openPrice": 4335.53,
    "closePrice": 4340.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.53
  },
  {
    "id": "514343508",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.18 05:25:00",
    "closeTime": "2025.12.18 06:52:00",
    "openPrice": 4325.98,
    "closePrice": 4331.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.73
  },
  {
    "id": "514343509",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.18 14:13:00",
    "closeTime": "2025.12.18 14:28:00",
    "openPrice": 4309.96,
    "closePrice": 4317.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343510",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.18 20:55:00",
    "closeTime": "2025.12.18 22:05:00",
    "openPrice": 4329.17,
    "closePrice": 4333.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.78
  },
  {
    "id": "514343511",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.19 05:49:00",
    "closeTime": "2025.12.19 06:41:00",
    "openPrice": 4314.88,
    "closePrice": 4319.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.8
  },
  {
    "id": "514343512",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.19 13:54:00",
    "closeTime": "2025.12.19 14:18:00",
    "openPrice": 4321.23,
    "closePrice": 4325.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.2
  },
  {
    "id": "514343513",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.19 21:01:00",
    "closeTime": "2025.12.19 21:54:00",
    "openPrice": 4354.2,
    "closePrice": 4347.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.68
  },
  {
    "id": "514343514",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.22 05:45:00",
    "closeTime": "2025.12.22 06:31:00",
    "openPrice": 4386.24,
    "closePrice": 4394.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343515",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.22 11:55:00",
    "closeTime": "2025.12.22 14:08:00",
    "openPrice": 4401.01,
    "closePrice": 4408.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.81
  },
  {
    "id": "514343516",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.22 19:59:00",
    "closeTime": "2025.12.22 21:44:00",
    "openPrice": 4427.54,
    "closePrice": 4432.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.96
  },
  {
    "id": "514343517",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.23 04:13:00",
    "closeTime": "2025.12.23 06:21:00",
    "openPrice": 4477.38,
    "closePrice": 4485.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343518",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.23 13:16:00",
    "closeTime": "2025.12.23 13:57:00",
    "openPrice": 4484.58,
    "closePrice": 4492.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343519",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.23 20:28:00",
    "closeTime": "2025.12.23 21:34:00",
    "openPrice": 4494.57,
    "closePrice": 4489.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.56
  },
  {
    "id": "514343520",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.24 03:56:00",
    "closeTime": "2025.12.24 06:10:00",
    "openPrice": 4488.14,
    "closePrice": 4493.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.28
  },
  {
    "id": "514343521",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.24 11:48:00",
    "closeTime": "2025.12.24 13:47:00",
    "openPrice": 4480.34,
    "closePrice": 4488.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343522",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.12.26 01:00:00",
    "closeTime": "2025.12.26 01:41:00",
    "openPrice": 4497.28,
    "closePrice": 4492.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.46
  },
  {
    "id": "514343523",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.26 08:15:00",
    "closeTime": "2025.12.26 09:17:00",
    "openPrice": 4508.12,
    "closePrice": 4514.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.33
  },
  {
    "id": "514343534",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.12.26 10:05:42",
    "closeTime": "2025.12.26 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -300
  },
  {
    "id": "514343524",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.26 15:04:00",
    "closeTime": "2025.12.26 16:54:00",
    "openPrice": 4510.72,
    "closePrice": 4516.39,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.67
  },
  {
    "id": "514343525",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.29 00:55:00",
    "closeTime": "2025.12.29 01:30:00",
    "openPrice": 4532.17,
    "closePrice": 4536.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.29
  },
  {
    "id": "514343526",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.29 07:40:00",
    "closeTime": "2025.12.29 09:07:00",
    "openPrice": 4444.13,
    "closePrice": 4451.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.28
  },
  {
    "id": "514343527",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.29 15:10:00",
    "closeTime": "2025.12.29 16:43:00",
    "openPrice": 4359,
    "closePrice": 4365.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.72
  },
  {
    "id": "514343528",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.30 01:06:00",
    "closeTime": "2025.12.30 01:20:00",
    "openPrice": 4321.22,
    "closePrice": 4326.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.8
  },
  {
    "id": "514343529",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.30 06:54:00",
    "closeTime": "2025.12.30 08:57:00",
    "openPrice": 4358.27,
    "closePrice": 4363.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.36
  },
  {
    "id": "514343530",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.30 16:04:00",
    "closeTime": "2025.12.30 16:33:00",
    "openPrice": 4375.82,
    "closePrice": 4380.97,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.15
  },
  {
    "id": "514343531",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.31 00:48:00",
    "closeTime": "2025.12.31 01:10:00",
    "openPrice": 4335.78,
    "closePrice": 4343.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343532",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.31 06:36:00",
    "closeTime": "2025.12.31 08:46:00",
    "openPrice": 4306.25,
    "closePrice": 4313.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.32
  },
  {
    "id": "514343533",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.12.31 15:07:00",
    "closeTime": "2025.12.31 16:23:00",
    "openPrice": 4332.25,
    "closePrice": 4337.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.04
  }
  ]),
  },
];

