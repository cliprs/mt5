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
    "openTime": "2025.04.30 23:32:00",
    "closeTime": "2025.05.01 01:00:00",
    "openPrice": 3281.4,
    "closePrice": 3288.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.18
  },
  {
    "id": "514343003",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.01 09:06:00",
    "closeTime": "2025.05.01 11:00:00",
    "openPrice": 3235.1,
    "closePrice": 3231.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.22
  },
  {
    "id": "514343004",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.01 19:46:00",
    "closeTime": "2025.05.01 21:00:00",
    "openPrice": 3206.42,
    "closePrice": 3213.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.73
  },
  {
    "id": "514343005",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.02 07:24:00",
    "closeTime": "2025.05.02 08:01:00",
    "openPrice": 3241.78,
    "closePrice": 3249.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.91
  },
  {
    "id": "514343006",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.02 17:23:00",
    "closeTime": "2025.05.02 18:01:00",
    "openPrice": 3254.14,
    "closePrice": 3260.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.16
  },
  {
    "id": "514343007",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.05 03:20:00",
    "closeTime": "2025.05.05 05:02:00",
    "openPrice": 3258.71,
    "closePrice": 3263.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.71
  },
  {
    "id": "514343008",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.05 14:04:00",
    "closeTime": "2025.05.05 15:02:00",
    "openPrice": 3308.87,
    "closePrice": 3315.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.62
  },
  {
    "id": "514343009",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.06 00:28:00",
    "closeTime": "2025.05.06 02:02:00",
    "openPrice": 3333.92,
    "closePrice": 3331.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2.77
  },
  {
    "id": "514343010",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.06 11:25:00",
    "closeTime": "2025.05.06 12:03:00",
    "openPrice": 3371.58,
    "closePrice": 3377.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.66
  },
  {
    "id": "514343011",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.06 19:40:00",
    "closeTime": "2025.05.06 22:03:00",
    "openPrice": 3410.32,
    "closePrice": 3414.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.56
  },
  {
    "id": "514343012",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.07 08:07:00",
    "closeTime": "2025.05.07 09:03:00",
    "openPrice": 3396.38,
    "closePrice": 3391.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.69
  },
  {
    "id": "514343013",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.07 18:57:00",
    "closeTime": "2025.05.07 19:04:00",
    "openPrice": 3376.88,
    "closePrice": 3384.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.41
  },
  {
    "id": "514343014",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.08 04:02:00",
    "closeTime": "2025.05.08 06:04:00",
    "openPrice": 3393.92,
    "closePrice": 3401.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.63
  },
  {
    "id": "514343015",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.08 15:15:00",
    "closeTime": "2025.05.08 16:05:00",
    "openPrice": 3355.83,
    "closePrice": 3359.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.5
  },
  {
    "id": "514343016",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.09 02:00:00",
    "closeTime": "2025.05.09 03:05:00",
    "openPrice": 3311.9,
    "closePrice": 3319.39,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.49
  },
  {
    "id": "514343017",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.09 12:53:00",
    "closeTime": "2025.05.09 13:05:00",
    "openPrice": 3317.79,
    "closePrice": 3323.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343018",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.09 22:51:00",
    "closeTime": "2025.05.09 23:06:00",
    "openPrice": 3321.61,
    "closePrice": 3327.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.96
  },
  {
    "id": "514343019",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.12 12:56:00",
    "closeTime": "2025.05.12 13:17:00",
    "openPrice": 3210.19,
    "closePrice": 3213.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.53
  },
  {
    "id": "514343020",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.12 20:54:00",
    "closeTime": "2025.05.12 23:18:00",
    "openPrice": 3229.6,
    "closePrice": 3236.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.14
  },
  {
    "id": "514343021",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.13 08:13:00",
    "closeTime": "2025.05.13 10:18:00",
    "openPrice": 3252.25,
    "closePrice": 3258.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.9
  },
  {
    "id": "514343022",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.13 19:10:00",
    "closeTime": "2025.05.13 20:18:00",
    "openPrice": 3238.41,
    "closePrice": 3246.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.68
  },
  {
    "id": "514343023",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.14 06:28:00",
    "closeTime": "2025.05.14 07:19:00",
    "openPrice": 3228.15,
    "closePrice": 3224.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.57
  },
  {
    "id": "514343024",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.14 15:14:00",
    "closeTime": "2025.05.14 17:19:00",
    "openPrice": 3176.96,
    "closePrice": 3183.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.67
  },
  {
    "id": "514343025",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.15 03:38:00",
    "closeTime": "2025.05.15 04:20:00",
    "openPrice": 3178.58,
    "closePrice": 3183.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.84
  },
  {
    "id": "514343026",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.15 12:33:00",
    "closeTime": "2025.05.15 14:20:00",
    "openPrice": 3169.62,
    "closePrice": 3177.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.72
  },
  {
    "id": "514343027",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.15 23:19:00",
    "closeTime": "2025.05.16 01:20:00",
    "openPrice": 3241.19,
    "closePrice": 3245.59,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.4
  },
  {
    "id": "514343028",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.16 08:51:00",
    "closeTime": "2025.05.16 11:21:00",
    "openPrice": 3194.69,
    "closePrice": 3200.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.99
  },
  {
    "id": "514343029",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.16 20:54:00",
    "closeTime": "2025.05.16 21:21:00",
    "openPrice": 3183.66,
    "closePrice": 3187.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.09
  },
  {
    "id": "514343030",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.19 08:13:00",
    "closeTime": "2025.05.19 08:22:00",
    "openPrice": 3209.61,
    "closePrice": 3217.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343031",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.19 16:49:00",
    "closeTime": "2025.05.19 18:22:00",
    "openPrice": 3225.25,
    "closePrice": 3232.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.28
  },
  {
    "id": "514343032",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.20 04:45:00",
    "closeTime": "2025.05.20 05:22:00",
    "openPrice": 3210.35,
    "closePrice": 3214.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.94
  },
  {
    "id": "514343033",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.20 13:22:00",
    "closeTime": "2025.05.20 15:23:00",
    "openPrice": 3230.09,
    "closePrice": 3238.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343034",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.21 01:53:00",
    "closeTime": "2025.05.21 02:23:00",
    "openPrice": 3284.75,
    "closePrice": 3291.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.59
  },
  {
    "id": "514343035",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.21 12:18:00",
    "closeTime": "2025.05.21 12:24:00",
    "openPrice": 3301.5,
    "closePrice": 3309.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343036",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.21 21:57:00",
    "closeTime": "2025.05.21 22:24:00",
    "openPrice": 3316.27,
    "closePrice": 3323.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.95
  },
  {
    "id": "514343037",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.22 08:27:00",
    "closeTime": "2025.05.22 09:25:00",
    "openPrice": 3321.34,
    "closePrice": 3328.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.62
  },
  {
    "id": "514343038",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.22 17:48:00",
    "closeTime": "2025.05.22 19:25:00",
    "openPrice": 3293.78,
    "closePrice": 3297.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.67
  },
  {
    "id": "514343039",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.23 04:13:00",
    "closeTime": "2025.05.23 06:25:00",
    "openPrice": 3294.92,
    "closePrice": 3298.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.03
  },
  {
    "id": "514343040",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.23 15:16:00",
    "closeTime": "2025.05.23 16:26:00",
    "openPrice": 3338.82,
    "closePrice": 3345.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343041",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.26 02:23:00",
    "closeTime": "2025.05.26 03:26:00",
    "openPrice": 3328.73,
    "closePrice": 3334.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.71
  },
  {
    "id": "514343042",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.26 13:08:00",
    "closeTime": "2025.05.26 13:27:00",
    "openPrice": 3324.09,
    "closePrice": 3331.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.43
  },
  {
    "id": "514343043",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.27 01:40:00",
    "closeTime": "2025.05.27 02:56:00",
    "openPrice": 3339.57,
    "closePrice": 3344.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.37
  },
  {
    "id": "514343044",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.27 11:44:00",
    "closeTime": "2025.05.27 12:56:00",
    "openPrice": 3292.72,
    "closePrice": 3296.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.3
  },
  {
    "id": "514343045",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.05.27 20:31:00",
    "closeTime": "2025.05.27 22:57:00",
    "openPrice": 3309.87,
    "closePrice": 3305.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.84
  },
  {
    "id": "514343046",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.28 07:49:00",
    "closeTime": "2025.05.28 09:57:00",
    "openPrice": 3301.8,
    "closePrice": 3307.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.34
  },
  {
    "id": "514343047",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.28 19:26:00",
    "closeTime": "2025.05.28 19:58:00",
    "openPrice": 3286.34,
    "closePrice": 3292.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.68
  },
  {
    "id": "514343048",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.29 06:10:00",
    "closeTime": "2025.05.29 06:58:00",
    "openPrice": 3269.69,
    "closePrice": 3274.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.36
  },
  {
    "id": "514343049",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.29 15:55:00",
    "closeTime": "2025.05.29 16:58:00",
    "openPrice": 3309.52,
    "closePrice": 3312.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.16
  },
  {
    "id": "514343050",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.30 03:28:00",
    "closeTime": "2025.05.30 03:59:00",
    "openPrice": 3307.34,
    "closePrice": 3312.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.28
  },
  {
    "id": "514343051",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.05.30 12:30:00",
    "closeTime": "2025.05.30 13:59:00",
    "openPrice": 3286.68,
    "closePrice": 3294.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343052",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.02 00:47:00",
    "closeTime": "2025.06.02 01:00:00",
    "openPrice": 3289.97,
    "closePrice": 3297.97,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343053",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.02 07:19:00",
    "closeTime": "2025.06.02 07:51:00",
    "openPrice": 3315.75,
    "closePrice": 3313.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343054",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.02 13:17:00",
    "closeTime": "2025.06.02 14:43:00",
    "openPrice": 3349.11,
    "closePrice": 3356.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.82
  },
  {
    "id": "514343055",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.02 20:41:00",
    "closeTime": "2025.06.02 21:35:00",
    "openPrice": 3367.42,
    "closePrice": 3371.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.5
  },
  {
    "id": "514343056",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.03 04:43:00",
    "closeTime": "2025.06.03 05:27:00",
    "openPrice": 3376.75,
    "closePrice": 3372.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.88
  },
  {
    "id": "514343057",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.03 09:49:00",
    "closeTime": "2025.06.03 12:19:00",
    "openPrice": 3353.63,
    "closePrice": 3357.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.32
  },
  {
    "id": "514343058",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.03 17:47:00",
    "closeTime": "2025.06.03 19:11:00",
    "openPrice": 3346.93,
    "closePrice": 3352.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.58
  },
  {
    "id": "514343059",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 02:45:00",
    "closeTime": "2025.06.04 03:03:00",
    "openPrice": 3352.63,
    "closePrice": 3356.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.68
  },
  {
    "id": "514343060",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 07:31:00",
    "closeTime": "2025.06.04 09:54:00",
    "openPrice": 3348.59,
    "closePrice": 3356.59,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343061",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 15:25:00",
    "closeTime": "2025.06.04 16:46:00",
    "openPrice": 3345.44,
    "closePrice": 3353.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343062",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.04 22:52:00",
    "closeTime": "2025.06.04 23:38:00",
    "openPrice": 3368.66,
    "closePrice": 3374.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.67
  },
  {
    "id": "514343063",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.05 07:07:00",
    "closeTime": "2025.06.05 07:30:00",
    "openPrice": 3364.39,
    "closePrice": 3367.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.18
  },
  {
    "id": "514343064",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.05 13:48:00",
    "closeTime": "2025.06.05 14:22:00",
    "openPrice": 3392.54,
    "closePrice": 3397.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.71
  },
  {
    "id": "514343065",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.05 20:59:00",
    "closeTime": "2025.06.05 21:14:00",
    "openPrice": 3356.33,
    "closePrice": 3351.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.38
  },
  {
    "id": "514343066",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.06 03:31:00",
    "closeTime": "2025.06.06 05:06:00",
    "openPrice": 3356.04,
    "closePrice": 3363.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.95
  },
  {
    "id": "514343067",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.06 09:58:00",
    "closeTime": "2025.06.06 11:58:00",
    "openPrice": 3359.57,
    "closePrice": 3365.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.37
  },
  {
    "id": "514343068",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.06 18:13:00",
    "closeTime": "2025.06.06 18:49:00",
    "openPrice": 3325.88,
    "closePrice": 3332.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.27
  },
  {
    "id": "514343069",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 01:15:00",
    "closeTime": "2025.06.09 02:41:00",
    "openPrice": 3307.58,
    "closePrice": 3313.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.56
  },
  {
    "id": "514343070",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 07:59:00",
    "closeTime": "2025.06.09 09:33:00",
    "openPrice": 3312.09,
    "closePrice": 3318.46,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.37
  },
  {
    "id": "514343071",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 14:10:00",
    "closeTime": "2025.06.09 16:25:00",
    "openPrice": 3308,
    "closePrice": 3312.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.41
  },
  {
    "id": "514343072",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.09 23:12:00",
    "closeTime": "2025.06.09 23:17:00",
    "openPrice": 3321.69,
    "closePrice": 3326.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.83
  },
  {
    "id": "514343073",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.10 05:42:00",
    "closeTime": "2025.06.10 07:09:00",
    "openPrice": 3298.91,
    "closePrice": 3306.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343074",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.10 12:54:00",
    "closeTime": "2025.06.10 14:01:00",
    "openPrice": 3330.09,
    "closePrice": 3335.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.21
  },
  {
    "id": "514343075",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.10 19:26:00",
    "closeTime": "2025.06.10 20:53:00",
    "openPrice": 3317.78,
    "closePrice": 3324.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.3
  },
  {
    "id": "514343076",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.11 02:29:00",
    "closeTime": "2025.06.11 04:44:00",
    "openPrice": 3329.22,
    "closePrice": 3334.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.97
  },
  {
    "id": "514343077",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.11 11:28:00",
    "closeTime": "2025.06.11 11:36:00",
    "openPrice": 3340.19,
    "closePrice": 3344.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.16
  },
  {
    "id": "514343078",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.11 18:06:00",
    "closeTime": "2025.06.11 18:28:00",
    "openPrice": 3333.55,
    "closePrice": 3339.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.48
  },
  {
    "id": "514343079",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 00:58:00",
    "closeTime": "2025.06.12 02:20:00",
    "openPrice": 3357.38,
    "closePrice": 3365.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.74
  },
  {
    "id": "514343080",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 08:53:00",
    "closeTime": "2025.06.12 09:12:00",
    "openPrice": 3364.93,
    "closePrice": 3372.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.16
  },
  {
    "id": "514343081",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.12 14:24:00",
    "closeTime": "2025.06.12 16:04:00",
    "openPrice": 3387.39,
    "closePrice": 3392.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.8
  },
  {
    "id": "514343082",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.12 21:32:00",
    "closeTime": "2025.06.12 22:56:00",
    "openPrice": 3392.65,
    "closePrice": 3388.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.43
  },
  {
    "id": "514343083",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.13 06:13:00",
    "closeTime": "2025.06.13 06:48:00",
    "openPrice": 3425.6,
    "closePrice": 3430.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.14
  },
  {
    "id": "514343084",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.13 12:50:00",
    "closeTime": "2025.06.13 13:39:00",
    "openPrice": 3407.07,
    "closePrice": 3415.07,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343085",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.13 20:18:00",
    "closeTime": "2025.06.13 20:31:00",
    "openPrice": 3424.74,
    "closePrice": 3432.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343086",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 01:53:00",
    "closeTime": "2025.06.16 04:23:00",
    "openPrice": 3433.19,
    "closePrice": 3436.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.8
  },
  {
    "id": "514343087",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 09:56:00",
    "closeTime": "2025.06.16 11:15:00",
    "openPrice": 3412.32,
    "closePrice": 3415.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.62
  },
  {
    "id": "514343088",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 17:12:00",
    "closeTime": "2025.06.16 18:07:00",
    "openPrice": 3393.93,
    "closePrice": 3401.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343089",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.16 23:47:00",
    "closeTime": "2025.06.17 01:59:00",
    "openPrice": 3391.58,
    "closePrice": 3395.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.46
  },
  {
    "id": "514343090",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.17 06:41:00",
    "closeTime": "2025.06.17 08:51:00",
    "openPrice": 3385.35,
    "closePrice": 3392.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.03
  },
  {
    "id": "514343091",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.17 13:53:00",
    "closeTime": "2025.06.17 15:42:00",
    "openPrice": 3393.27,
    "closePrice": 3387.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.52
  },
  {
    "id": "514343092",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.17 22:00:00",
    "closeTime": "2025.06.17 22:34:00",
    "openPrice": 3380,
    "closePrice": 3384.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.08
  },
  {
    "id": "514343093",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.18 06:10:00",
    "closeTime": "2025.06.18 06:26:00",
    "openPrice": 3390.02,
    "closePrice": 3384.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.12
  },
  {
    "id": "514343094",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.18 11:39:00",
    "closeTime": "2025.06.18 13:18:00",
    "openPrice": 3370.23,
    "closePrice": 3377.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.57
  },
  {
    "id": "514343095",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.18 19:30:00",
    "closeTime": "2025.06.18 20:10:00",
    "openPrice": 3382.23,
    "closePrice": 3389.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.29
  },
  {
    "id": "514343096",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.19 02:35:00",
    "closeTime": "2025.06.19 04:02:00",
    "openPrice": 3370.13,
    "closePrice": 3378.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343097",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.19 08:53:00",
    "closeTime": "2025.06.19 10:54:00",
    "openPrice": 3362.5,
    "closePrice": 3366.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.39
  },
  {
    "id": "514343098",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.19 15:33:00",
    "closeTime": "2025.06.19 17:46:00",
    "openPrice": 3356.68,
    "closePrice": 3364.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.99
  },
  {
    "id": "514343099",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.20 01:50:00",
    "closeTime": "2025.06.20 04:06:00",
    "openPrice": 3360.34,
    "closePrice": 3364.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.62
  },
  {
    "id": "514343100",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.20 09:57:00",
    "closeTime": "2025.06.20 10:58:00",
    "openPrice": 3340.19,
    "closePrice": 3347.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343101",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.20 16:41:00",
    "closeTime": "2025.06.20 17:50:00",
    "openPrice": 3360.13,
    "closePrice": 3368.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343102",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 00:52:00",
    "closeTime": "2025.06.23 01:42:00",
    "openPrice": 3374.01,
    "closePrice": 3378.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.31
  },
  {
    "id": "514343103",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 06:50:00",
    "closeTime": "2025.06.23 08:34:00",
    "openPrice": 3344.33,
    "closePrice": 3351.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.53
  },
  {
    "id": "514343104",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 13:32:00",
    "closeTime": "2025.06.23 15:26:00",
    "openPrice": 3357.35,
    "closePrice": 3362.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.67
  },
  {
    "id": "514343105",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.23 21:54:00",
    "closeTime": "2025.06.23 22:18:00",
    "openPrice": 3373.4,
    "closePrice": 3380.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.72
  },
  {
    "id": "514343106",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.24 04:35:00",
    "closeTime": "2025.06.24 06:10:00",
    "openPrice": 3345.38,
    "closePrice": 3353.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343107",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.24 11:01:00",
    "closeTime": "2025.06.24 13:01:00",
    "openPrice": 3312.46,
    "closePrice": 3320.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.67
  },
  {
    "id": "514343108",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.24 19:27:00",
    "closeTime": "2025.06.24 19:53:00",
    "openPrice": 3310.57,
    "closePrice": 3318.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343109",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.25 02:03:00",
    "closeTime": "2025.06.25 03:45:00",
    "openPrice": 3316.36,
    "closePrice": 3324.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343110",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.25 09:19:00",
    "closeTime": "2025.06.25 10:37:00",
    "openPrice": 3328.5,
    "closePrice": 3334.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.44
  },
  {
    "id": "514343111",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.25 17:11:00",
    "closeTime": "2025.06.25 17:29:00",
    "openPrice": 3315.34,
    "closePrice": 3321.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.55
  },
  {
    "id": "514343112",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.26 00:22:00",
    "closeTime": "2025.06.26 01:21:00",
    "openPrice": 3324.72,
    "closePrice": 3332.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.32
  },
  {
    "id": "514343113",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.26 06:41:00",
    "closeTime": "2025.06.26 08:13:00",
    "openPrice": 3338.8,
    "closePrice": 3334.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.72
  },
  {
    "id": "514343114",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.26 14:44:00",
    "closeTime": "2025.06.26 15:05:00",
    "openPrice": 3329.9,
    "closePrice": 3334.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.11
  },
  {
    "id": "514343115",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.26 19:38:00",
    "closeTime": "2025.06.26 21:56:00",
    "openPrice": 3326.6,
    "closePrice": 3334.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.53
  },
  {
    "id": "514343116",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 05:17:00",
    "closeTime": "2025.06.27 05:48:00",
    "openPrice": 3303.13,
    "closePrice": 3309.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.39
  },
  {
    "id": "514343117",
    "symbol": "Withdrawal",
    "type": "balance",
    "volume": 0,
    "openTime": "2025.06.27 10:05:42",
    "closeTime": "2025.06.27 10:05:42",
    "openPrice": 0,
    "closePrice": 0,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -200
  },
  {
    "id": "514343118",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 12:29:00",
    "closeTime": "2025.06.27 12:40:00",
    "openPrice": 3280.16,
    "closePrice": 3287.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.47
  },
  {
    "id": "514343119",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.27 17:06:00",
    "closeTime": "2025.06.27 19:32:00",
    "openPrice": 3267.9,
    "closePrice": 3275.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343120",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.06.30 00:58:00",
    "closeTime": "2025.06.30 03:24:00",
    "openPrice": 3272.86,
    "closePrice": 3268.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.32
  },
  {
    "id": "514343121",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.30 08:31:00",
    "closeTime": "2025.06.30 10:16:00",
    "openPrice": 3289.73,
    "closePrice": 3293.8,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.07
  },
  {
    "id": "514343122",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.30 15:55:00",
    "closeTime": "2025.06.30 17:08:00",
    "openPrice": 3278.43,
    "closePrice": 3284.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.38
  },
  {
    "id": "514343123",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.06.30 22:31:00",
    "closeTime": "2025.07.01 01:00:00",
    "openPrice": 3295.2,
    "closePrice": 3303.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343124",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.01 10:24:00",
    "closeTime": "2025.07.01 11:30:00",
    "openPrice": 3341.52,
    "closePrice": 3339.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343125",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.01 21:43:00",
    "closeTime": "2025.07.01 22:00:00",
    "openPrice": 3329.17,
    "closePrice": 3337.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343126",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.02 08:35:00",
    "closeTime": "2025.07.02 09:30:00",
    "openPrice": 3326.41,
    "closePrice": 3334.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.96
  },
  {
    "id": "514343127",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.02 18:54:00",
    "closeTime": "2025.07.02 20:00:00",
    "openPrice": 3344.76,
    "closePrice": 3349.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.99
  },
  {
    "id": "514343128",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.03 06:25:00",
    "closeTime": "2025.07.03 07:30:00",
    "openPrice": 3342.36,
    "closePrice": 3348.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.54
  },
  {
    "id": "514343129",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.03 17:51:00",
    "closeTime": "2025.07.03 18:00:00",
    "openPrice": 3318.78,
    "closePrice": 3324.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.32
  },
  {
    "id": "514343130",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.04 04:11:00",
    "closeTime": "2025.07.04 05:30:00",
    "openPrice": 3325.71,
    "closePrice": 3332.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.39
  },
  {
    "id": "514343131",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.04 15:07:00",
    "closeTime": "2025.07.04 16:00:00",
    "openPrice": 3327.83,
    "closePrice": 3333.35,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.52
  },
  {
    "id": "514343132",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.07 06:53:00",
    "closeTime": "2025.07.07 07:30:00",
    "openPrice": 3300.02,
    "closePrice": 3307.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.51
  },
  {
    "id": "514343133",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.07 17:38:00",
    "closeTime": "2025.07.07 18:00:00",
    "openPrice": 3309.75,
    "closePrice": 3317.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.33
  },
  {
    "id": "514343134",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.08 04:07:00",
    "closeTime": "2025.07.08 05:30:00",
    "openPrice": 3327.78,
    "closePrice": 3335.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.8
  },
  {
    "id": "514343135",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.08 15:06:00",
    "closeTime": "2025.07.08 16:00:00",
    "openPrice": 3322.82,
    "closePrice": 3328.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.22
  },
  {
    "id": "514343136",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.09 02:12:00",
    "closeTime": "2025.07.09 03:30:00",
    "openPrice": 3297.7,
    "closePrice": 3305.7,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343137",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.09 12:54:00",
    "closeTime": "2025.07.09 14:00:00",
    "openPrice": 3287.77,
    "closePrice": 3294.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.54
  },
  {
    "id": "514343138",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.09 23:22:00",
    "closeTime": "2025.07.10 01:30:00",
    "openPrice": 3315.29,
    "closePrice": 3320.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5
  },
  {
    "id": "514343139",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.10 11:46:00",
    "closeTime": "2025.07.10 12:00:00",
    "openPrice": 3325.23,
    "closePrice": 3329.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.3
  },
  {
    "id": "514343140",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.10 21:46:00",
    "closeTime": "2025.07.10 22:30:00",
    "openPrice": 3315.28,
    "closePrice": 3323.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343141",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.11 08:11:00",
    "closeTime": "2025.07.11 10:00:00",
    "openPrice": 3323.62,
    "closePrice": 3331.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343142",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.11 19:08:00",
    "closeTime": "2025.07.11 20:30:00",
    "openPrice": 3346.44,
    "closePrice": 3351.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.61
  },
  {
    "id": "514343143",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.14 06:15:00",
    "closeTime": "2025.07.14 08:00:00",
    "openPrice": 3355.78,
    "closePrice": 3359.62,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.84
  },
  {
    "id": "514343144",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.14 16:47:00",
    "closeTime": "2025.07.14 18:30:00",
    "openPrice": 3341.18,
    "closePrice": 3347.65,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.47
  },
  {
    "id": "514343145",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.15 05:33:00",
    "closeTime": "2025.07.15 06:00:00",
    "openPrice": 3343.91,
    "closePrice": 3351.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343146",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.15 16:21:00",
    "closeTime": "2025.07.15 16:30:00",
    "openPrice": 3346.23,
    "closePrice": 3340.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.63
  },
  {
    "id": "514343147",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.16 03:14:00",
    "closeTime": "2025.07.16 04:00:00",
    "openPrice": 3325.06,
    "closePrice": 3329.84,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.78
  },
  {
    "id": "514343148",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.16 12:38:00",
    "closeTime": "2025.07.16 14:30:00",
    "openPrice": 3333.29,
    "closePrice": 3336.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.28
  },
  {
    "id": "514343149",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.17 01:55:00",
    "closeTime": "2025.07.17 02:00:00",
    "openPrice": 3342.5,
    "closePrice": 3349.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.76
  },
  {
    "id": "514343150",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.17 11:40:00",
    "closeTime": "2025.07.17 12:30:00",
    "openPrice": 3335.34,
    "closePrice": 3329.65,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.69
  },
  {
    "id": "514343151",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.17 20:34:00",
    "closeTime": "2025.07.17 23:00:00",
    "openPrice": 3334.32,
    "closePrice": 3340.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.73
  },
  {
    "id": "514343152",
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
    "id": "514343153",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.18 09:03:00",
    "closeTime": "2025.07.18 10:30:00",
    "openPrice": 3338.27,
    "closePrice": 3344.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.28
  },
  {
    "id": "514343154",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.18 19:11:00",
    "closeTime": "2025.07.18 21:00:00",
    "openPrice": 3358.92,
    "closePrice": 3353.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.9
  },
  {
    "id": "514343155",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.21 08:20:00",
    "closeTime": "2025.07.21 08:30:00",
    "openPrice": 3360.8,
    "closePrice": 3366.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.39
  },
  {
    "id": "514343156",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.21 16:57:00",
    "closeTime": "2025.07.21 19:00:00",
    "openPrice": 3392.16,
    "closePrice": 3397.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.76
  },
  {
    "id": "514343157",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.22 05:59:00",
    "closeTime": "2025.07.22 06:30:00",
    "openPrice": 3384.6,
    "closePrice": 3390,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.4
  },
  {
    "id": "514343158",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.22 16:22:00",
    "closeTime": "2025.07.22 17:00:00",
    "openPrice": 3400.35,
    "closePrice": 3406.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.96
  },
  {
    "id": "514343159",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.23 03:49:00",
    "closeTime": "2025.07.23 04:30:00",
    "openPrice": 3417.54,
    "closePrice": 3425.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.96
  },
  {
    "id": "514343160",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.23 12:31:00",
    "closeTime": "2025.07.23 15:00:00",
    "openPrice": 3424.19,
    "closePrice": 3427.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.75
  },
  {
    "id": "514343161",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.24 00:06:00",
    "closeTime": "2025.07.24 02:30:00",
    "openPrice": 3382.17,
    "closePrice": 3390.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343162",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.24 12:50:00",
    "closeTime": "2025.07.24 13:00:00",
    "openPrice": 3357.16,
    "closePrice": 3363.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.26
  },
  {
    "id": "514343163",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.24 21:13:00",
    "closeTime": "2025.07.24 23:30:00",
    "openPrice": 3373.92,
    "closePrice": 3369.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.09
  },
  {
    "id": "514343164",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.25 09:42:00",
    "closeTime": "2025.07.25 11:00:00",
    "openPrice": 3349.38,
    "closePrice": 3354.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.76
  },
  {
    "id": "514343165",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.25 19:52:00",
    "closeTime": "2025.07.25 21:30:00",
    "openPrice": 3330.56,
    "closePrice": 3338.56,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343166",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.28 08:25:00",
    "closeTime": "2025.07.28 09:00:00",
    "openPrice": 3337.15,
    "closePrice": 3344.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.74
  },
  {
    "id": "514343167",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.28 18:41:00",
    "closeTime": "2025.07.28 19:30:00",
    "openPrice": 3306.97,
    "closePrice": 3313.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.92
  },
  {
    "id": "514343168",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.29 04:38:00",
    "closeTime": "2025.07.29 07:00:00",
    "openPrice": 3308.37,
    "closePrice": 3312.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.41
  },
  {
    "id": "514343169",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.07.29 15:50:00",
    "closeTime": "2025.07.29 17:30:00",
    "openPrice": 3327.53,
    "closePrice": 3323.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.61
  },
  {
    "id": "514343170",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.30 04:32:00",
    "closeTime": "2025.07.30 05:00:00",
    "openPrice": 3317.94,
    "closePrice": 3324.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.2
  },
  {
    "id": "514343171",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.30 13:55:00",
    "closeTime": "2025.07.30 15:30:00",
    "openPrice": 3318.44,
    "closePrice": 3326.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343172",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.31 02:32:00",
    "closeTime": "2025.07.31 03:00:00",
    "openPrice": 3278.01,
    "closePrice": 3286.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343173",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.07.31 12:06:00",
    "closeTime": "2025.07.31 13:30:00",
    "openPrice": 3300.28,
    "closePrice": 3304.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.24
  },
  {
    "id": "514343174",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.01 00:10:00",
    "closeTime": "2025.08.01 01:00:00",
    "openPrice": 3281.58,
    "closePrice": 3289.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343175",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.01 06:42:00",
    "closeTime": "2025.08.01 09:02:00",
    "openPrice": 3287.94,
    "closePrice": 3295.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343176",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.01 16:47:00",
    "closeTime": "2025.08.01 17:05:00",
    "openPrice": 3340.3,
    "closePrice": 3348.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343177",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.04 01:20:00",
    "closeTime": "2025.08.04 02:08:00",
    "openPrice": 3350.07,
    "closePrice": 3358.07,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343178",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.04 08:52:00",
    "closeTime": "2025.08.04 10:11:00",
    "openPrice": 3352.69,
    "closePrice": 3360.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343179",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.04 18:03:00",
    "closeTime": "2025.08.04 18:14:00",
    "openPrice": 3366.68,
    "closePrice": 3374.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.33
  },
  {
    "id": "514343180",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.05 01:50:00",
    "closeTime": "2025.08.05 03:17:00",
    "openPrice": 3373.03,
    "closePrice": 3377.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.28
  },
  {
    "id": "514343181",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.05 09:46:00",
    "closeTime": "2025.08.05 11:20:00",
    "openPrice": 3365.25,
    "closePrice": 3372.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.16
  },
  {
    "id": "514343182",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.05 17:41:00",
    "closeTime": "2025.08.05 19:23:00",
    "openPrice": 3376.15,
    "closePrice": 3383.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.3
  },
  {
    "id": "514343183",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.06 02:45:00",
    "closeTime": "2025.08.06 04:26:00",
    "openPrice": 3370.19,
    "closePrice": 3377.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.54
  },
  {
    "id": "514343184",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.06 12:23:00",
    "closeTime": "2025.08.06 12:29:00",
    "openPrice": 3359.53,
    "closePrice": 3364.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.76
  },
  {
    "id": "514343185",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.06 20:00:00",
    "closeTime": "2025.08.06 20:32:00",
    "openPrice": 3367.2,
    "closePrice": 3372.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.79
  },
  {
    "id": "514343186",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.07 04:58:00",
    "closeTime": "2025.08.07 05:35:00",
    "openPrice": 3374.32,
    "closePrice": 3380.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.72
  },
  {
    "id": "514343187",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.07 12:22:00",
    "closeTime": "2025.08.07 13:38:00",
    "openPrice": 3378.91,
    "closePrice": 3375.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.08
  },
  {
    "id": "514343188",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.07 20:53:00",
    "closeTime": "2025.08.07 21:41:00",
    "openPrice": 3394.33,
    "closePrice": 3390.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.29
  },
  {
    "id": "514343189",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.08 05:06:00",
    "closeTime": "2025.08.08 06:45:00",
    "openPrice": 3387.81,
    "closePrice": 3394.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.01
  },
  {
    "id": "514343190",
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
    "id": "514343191",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.08 13:53:00",
    "closeTime": "2025.08.08 14:48:00",
    "openPrice": 3383.05,
    "closePrice": 3387.56,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.51
  },
  {
    "id": "514343192",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.08 21:43:00",
    "closeTime": "2025.08.08 22:51:00",
    "openPrice": 3392.64,
    "closePrice": 3396.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.85
  },
  {
    "id": "514343193",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.11 06:11:00",
    "closeTime": "2025.08.11 07:54:00",
    "openPrice": 3368.41,
    "closePrice": 3375.59,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.18
  },
  {
    "id": "514343194",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.11 15:35:00",
    "closeTime": "2025.08.11 15:57:00",
    "openPrice": 3351.47,
    "closePrice": 3355.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.36
  },
  {
    "id": "514343195",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.11 22:53:00",
    "closeTime": "2025.08.12 01:00:00",
    "openPrice": 3335.26,
    "closePrice": 3342.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343196",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.12 08:36:00",
    "closeTime": "2025.08.12 09:03:00",
    "openPrice": 3347.9,
    "closePrice": 3352.03,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.13
  },
  {
    "id": "514343197",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.12 14:46:00",
    "closeTime": "2025.08.12 17:06:00",
    "openPrice": 3338.66,
    "closePrice": 3343.64,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.98
  },
  {
    "id": "514343198",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.13 00:53:00",
    "closeTime": "2025.08.13 02:09:00",
    "openPrice": 3343.1,
    "closePrice": 3350.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.44
  },
  {
    "id": "514343199",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.13 08:07:00",
    "closeTime": "2025.08.13 10:12:00",
    "openPrice": 3350.17,
    "closePrice": 3358.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343200",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.13 15:53:00",
    "closeTime": "2025.08.13 18:15:00",
    "openPrice": 3349.61,
    "closePrice": 3357.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343201",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.14 02:58:00",
    "closeTime": "2025.08.14 03:18:00",
    "openPrice": 3362.36,
    "closePrice": 3369.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.82
  },
  {
    "id": "514343202",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.14 10:09:00",
    "closeTime": "2025.08.14 11:21:00",
    "openPrice": 3342.37,
    "closePrice": 3346.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.75
  },
  {
    "id": "514343203",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.14 17:07:00",
    "closeTime": "2025.08.14 19:24:00",
    "openPrice": 3325.18,
    "closePrice": 3332.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.34
  },
  {
    "id": "514343204",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.15 03:33:00",
    "closeTime": "2025.08.15 04:27:00",
    "openPrice": 3328.57,
    "closePrice": 3335.47,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.9
  },
  {
    "id": "514343205",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.15 12:23:00",
    "closeTime": "2025.08.15 12:30:00",
    "openPrice": 3337.92,
    "closePrice": 3344.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.69
  },
  {
    "id": "514343206",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.15 19:11:00",
    "closeTime": "2025.08.15 20:32:00",
    "openPrice": 3330.24,
    "closePrice": 3336.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.81
  },
  {
    "id": "514343207",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.18 04:16:00",
    "closeTime": "2025.08.18 05:35:00",
    "openPrice": 3335.88,
    "closePrice": 3343.43,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.55
  },
  {
    "id": "514343208",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.18 13:18:00",
    "closeTime": "2025.08.18 13:38:00",
    "openPrice": 3344.15,
    "closePrice": 3349.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.11
  },
  {
    "id": "514343209",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.18 19:21:00",
    "closeTime": "2025.08.18 21:41:00",
    "openPrice": 3325.85,
    "closePrice": 3331.31,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.46
  },
  {
    "id": "514343210",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.19 04:20:00",
    "closeTime": "2025.08.19 06:44:00",
    "openPrice": 3343.17,
    "closePrice": 3338.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.03
  },
  {
    "id": "514343211",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.19 13:11:00",
    "closeTime": "2025.08.19 14:47:00",
    "openPrice": 3345.82,
    "closePrice": 3341.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.38
  },
  {
    "id": "514343212",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.19 22:35:00",
    "closeTime": "2025.08.19 22:50:00",
    "openPrice": 3309.57,
    "closePrice": 3316.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.97
  },
  {
    "id": "514343213",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.20 06:20:00",
    "closeTime": "2025.08.20 07:53:00",
    "openPrice": 3315.08,
    "closePrice": 3319.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.04
  },
  {
    "id": "514343214",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.20 13:39:00",
    "closeTime": "2025.08.20 15:56:00",
    "openPrice": 3337.24,
    "closePrice": 3342.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.05
  },
  {
    "id": "514343215",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.20 22:01:00",
    "closeTime": "2025.08.20 23:59:00",
    "openPrice": 3351.73,
    "closePrice": 3348.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.41
  },
  {
    "id": "514343216",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.21 06:51:00",
    "closeTime": "2025.08.21 09:02:00",
    "openPrice": 3335.17,
    "closePrice": 3339.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.91
  },
  {
    "id": "514343217",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.21 16:01:00",
    "closeTime": "2025.08.21 17:05:00",
    "openPrice": 3332.67,
    "closePrice": 3340.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343218",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.22 01:23:00",
    "closeTime": "2025.08.22 02:08:00",
    "openPrice": 3332.23,
    "closePrice": 3338.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.05
  },
  {
    "id": "514343219",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.22 09:38:00",
    "closeTime": "2025.08.22 10:11:00",
    "openPrice": 3325.56,
    "closePrice": 3331.18,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.62
  },
  {
    "id": "514343220",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.22 17:08:00",
    "closeTime": "2025.08.22 18:14:00",
    "openPrice": 3381.07,
    "closePrice": 3376.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.66
  },
  {
    "id": "514343221",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.25 01:18:00",
    "closeTime": "2025.08.25 03:17:00",
    "openPrice": 3359.22,
    "closePrice": 3364.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.71
  },
  {
    "id": "514343222",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.25 11:15:00",
    "closeTime": "2025.08.25 11:20:00",
    "openPrice": 3357.04,
    "closePrice": 3364.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343223",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.25 19:13:00",
    "closeTime": "2025.08.25 19:23:00",
    "openPrice": 3365.2,
    "closePrice": 3372.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.17
  },
  {
    "id": "514343224",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.26 03:43:00",
    "closeTime": "2025.08.26 04:26:00",
    "openPrice": 3365.54,
    "closePrice": 3373.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343225",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.26 11:36:00",
    "closeTime": "2025.08.26 12:29:00",
    "openPrice": 3378.28,
    "closePrice": 3375.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.08
  },
  {
    "id": "514343226",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.08.26 18:22:00",
    "closeTime": "2025.08.26 20:32:00",
    "openPrice": 3387.13,
    "closePrice": 3383.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.94
  },
  {
    "id": "514343227",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.27 04:42:00",
    "closeTime": "2025.08.27 05:35:00",
    "openPrice": 3376.6,
    "closePrice": 3384.24,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.64
  },
  {
    "id": "514343228",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.27 13:31:00",
    "closeTime": "2025.08.27 13:38:00",
    "openPrice": 3369.26,
    "closePrice": 3376.45,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.19
  },
  {
    "id": "514343229",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.27 19:19:00",
    "closeTime": "2025.08.27 21:41:00",
    "openPrice": 3390.23,
    "closePrice": 3395.56,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.33
  },
  {
    "id": "514343230",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.28 06:38:00",
    "closeTime": "2025.08.28 06:44:00",
    "openPrice": 3386.41,
    "closePrice": 3390.13,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.72
  },
  {
    "id": "514343231",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.28 14:09:00",
    "closeTime": "2025.08.28 14:47:00",
    "openPrice": 3398.85,
    "closePrice": 3404.68,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.83
  },
  {
    "id": "514343232",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.28 21:29:00",
    "closeTime": "2025.08.28 22:50:00",
    "openPrice": 3411.92,
    "closePrice": 3419.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343233",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.29 07:00:00",
    "closeTime": "2025.08.29 07:54:00",
    "openPrice": 3400.27,
    "closePrice": 3408.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343234",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.29 14:00:00",
    "closeTime": "2025.08.29 15:57:00",
    "openPrice": 3409.86,
    "closePrice": 3415.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.87
  },
  {
    "id": "514343397",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.08.31 22:32:00",
    "closeTime": "2025.09.01 01:00:00",
    "openPrice": 3436.5,
    "closePrice": 3444.5,
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
    "openTime": "2025.09.01 06:12:00",
    "closeTime": "2025.09.01 06:35:00",
    "openPrice": 3466.42,
    "closePrice": 3474.42,
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
    "openTime": "2025.09.01 11:26:00",
    "closeTime": "2025.09.01 12:10:00",
    "openPrice": 3465.97,
    "closePrice": 3473.97,
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
    "openTime": "2025.09.01 15:45:00",
    "closeTime": "2025.09.01 17:46:00",
    "openPrice": 3466.93,
    "closePrice": 3474.93,
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
    "openTime": "2025.09.02 00:42:00",
    "closeTime": "2025.09.02 02:51:00",
    "openPrice": 3471.71,
    "closePrice": 3479.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343402",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.02 06:20:00",
    "closeTime": "2025.09.02 08:27:00",
    "openPrice": 3494.75,
    "closePrice": 3492.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343403",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.02 12:18:00",
    "closeTime": "2025.09.02 14:02:00",
    "openPrice": 3477,
    "closePrice": 3485,
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
    "openTime": "2025.09.02 18:59:00",
    "closeTime": "2025.09.02 19:38:00",
    "openPrice": 3519.81,
    "closePrice": 3527.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343405",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 02:00:00",
    "closeTime": "2025.09.03 02:13:00",
    "openPrice": 3520.7,
    "closePrice": 3528.7,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343406",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 06:23:00",
    "closeTime": "2025.09.03 07:49:00",
    "openPrice": 3529.67,
    "closePrice": 3537.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343407",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 11:50:00",
    "closeTime": "2025.09.03 13:24:00",
    "openPrice": 3527.02,
    "closePrice": 3535.02,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343408",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.03 17:40:00",
    "closeTime": "2025.09.03 19:00:00",
    "openPrice": 3555.24,
    "closePrice": 3563.24,
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
    "openTime": "2025.09.04 00:21:00",
    "closeTime": "2025.09.04 01:35:00",
    "openPrice": 3553.49,
    "closePrice": 3561.49,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343410",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.04 06:14:00",
    "closeTime": "2025.09.04 07:11:00",
    "openPrice": 3535.54,
    "closePrice": 3533.54,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343411",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.04 11:30:00",
    "closeTime": "2025.09.04 12:46:00",
    "openPrice": 3542.29,
    "closePrice": 3540.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343412",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.04 16:17:00",
    "closeTime": "2025.09.04 18:22:00",
    "openPrice": 3538.44,
    "closePrice": 3546.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343413",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.04 21:41:00",
    "closeTime": "2025.09.04 23:57:00",
    "openPrice": 3537,
    "closePrice": 3545,
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
    "openTime": "2025.09.05 04:21:00",
    "closeTime": "2025.09.05 06:33:00",
    "openPrice": 3549.22,
    "closePrice": 3557.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343415",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 11:21:00",
    "closeTime": "2025.09.05 12:08:00",
    "openPrice": 3541.94,
    "closePrice": 3549.94,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343416",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 17:06:00",
    "closeTime": "2025.09.05 17:44:00",
    "openPrice": 3571.91,
    "closePrice": 3579.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343417",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.05 22:13:00",
    "closeTime": "2025.09.05 23:19:00",
    "openPrice": 3581.01,
    "closePrice": 3589.01,
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
    "openTime": "2025.09.08 03:25:00",
    "closeTime": "2025.09.08 05:55:00",
    "openPrice": 3583.25,
    "closePrice": 3591.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343419",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.08 09:22:00",
    "closeTime": "2025.09.08 11:30:00",
    "openPrice": 3604.91,
    "closePrice": 3612.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343420",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.08 15:35:00",
    "closeTime": "2025.09.08 17:10:00",
    "openPrice": 3628.61,
    "closePrice": 3636.61,
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
    "openTime": "2025.09.08 21:16:00",
    "closeTime": "2025.09.08 22:46:00",
    "openPrice": 3627.14,
    "closePrice": 3635.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343422",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.09 04:21:00",
    "closeTime": "2025.09.09 05:21:00",
    "openPrice": 3654.38,
    "closePrice": 3652.38,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343423",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.09 09:05:00",
    "closeTime": "2025.09.09 10:57:00",
    "openPrice": 3634.2,
    "closePrice": 3642.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343424",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.09 16:20:00",
    "closeTime": "2025.09.09 16:32:00",
    "openPrice": 3664.32,
    "closePrice": 3662.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343425",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.09 20:49:00",
    "closeTime": "2025.09.09 22:08:00",
    "openPrice": 3632.1,
    "closePrice": 3640.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343426",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 03:58:00",
    "closeTime": "2025.09.10 04:43:00",
    "openPrice": 3630.14,
    "closePrice": 3628.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343427",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.10 10:09:00",
    "closeTime": "2025.09.10 10:19:00",
    "openPrice": 3638.37,
    "closePrice": 3646.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343428",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 14:42:00",
    "closeTime": "2025.09.10 15:59:00",
    "openPrice": 3645.74,
    "closePrice": 3643.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343429",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.10 19:22:00",
    "closeTime": "2025.09.10 21:35:00",
    "openPrice": 3649.3,
    "closePrice": 3647.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343430",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.11 03:52:00",
    "closeTime": "2025.09.11 04:10:00",
    "openPrice": 3638.57,
    "closePrice": 3646.57,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343431",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.11 09:32:00",
    "closeTime": "2025.09.11 09:46:00",
    "openPrice": 3638.1,
    "closePrice": 3636.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343432",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.11 13:46:00",
    "closeTime": "2025.09.11 15:21:00",
    "openPrice": 3623.93,
    "closePrice": 3621.93,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343433",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.11 20:25:00",
    "closeTime": "2025.09.11 20:57:00",
    "openPrice": 3627.19,
    "closePrice": 3635.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343434",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.12 01:50:00",
    "closeTime": "2025.09.12 03:32:00",
    "openPrice": 3633.92,
    "closePrice": 3631.92,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343435",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.12 08:11:00",
    "closeTime": "2025.09.12 09:08:00",
    "openPrice": 3644.41,
    "closePrice": 3652.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343436",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.12 13:17:00",
    "closeTime": "2025.09.12 14:43:00",
    "openPrice": 3640.04,
    "closePrice": 3648.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343437",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.12 19:17:00",
    "closeTime": "2025.09.12 20:19:00",
    "openPrice": 3642.01,
    "closePrice": 3650.01,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343438",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.15 01:17:00",
    "closeTime": "2025.09.15 02:54:00",
    "openPrice": 3629.52,
    "closePrice": 3637.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343439",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.15 07:25:00",
    "closeTime": "2025.09.15 08:30:00",
    "openPrice": 3646.28,
    "closePrice": 3644.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343440",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.15 13:09:00",
    "closeTime": "2025.09.15 14:05:00",
    "openPrice": 3632.28,
    "closePrice": 3639.73,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.45
  },
  {
    "id": "514343441",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.15 19:33:00",
    "closeTime": "2025.09.15 19:41:00",
    "openPrice": 3686.95,
    "closePrice": 3679.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -7.59
  },
  {
    "id": "514343442",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.16 01:57:00",
    "closeTime": "2025.09.16 02:16:00",
    "openPrice": 3683.49,
    "closePrice": 3679.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.05
  },
  {
    "id": "514343443",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.16 06:55:00",
    "closeTime": "2025.09.16 07:51:00",
    "openPrice": 3679.49,
    "closePrice": 3683.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.26
  },
  {
    "id": "514343444",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.16 10:59:00",
    "closeTime": "2025.09.16 13:27:00",
    "openPrice": 3689.69,
    "closePrice": 3697.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343445",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.16 17:37:00",
    "closeTime": "2025.09.16 19:02:00",
    "openPrice": 3679.87,
    "closePrice": 3686.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.36
  },
  {
    "id": "514343446",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 00:18:00",
    "closeTime": "2025.09.17 01:38:00",
    "openPrice": 3683.75,
    "closePrice": 3691.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343447",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 05:59:00",
    "closeTime": "2025.09.17 07:13:00",
    "openPrice": 3673.95,
    "closePrice": 3681.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343448",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.17 10:27:00",
    "closeTime": "2025.09.17 12:49:00",
    "openPrice": 3674.17,
    "closePrice": 3669.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.13
  },
  {
    "id": "514343449",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 18:00:00",
    "closeTime": "2025.09.17 18:24:00",
    "openPrice": 3679.36,
    "closePrice": 3685.69,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.33
  },
  {
    "id": "514343450",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.17 23:21:00",
    "closeTime": "2025.09.18 01:00:00",
    "openPrice": 3652.58,
    "closePrice": 3660.58,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343451",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 04:31:00",
    "closeTime": "2025.09.18 06:35:00",
    "openPrice": 3653.53,
    "closePrice": 3661.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343452",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 09:58:00",
    "closeTime": "2025.09.18 12:18:00",
    "openPrice": 3661.32,
    "closePrice": 3668.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.76
  },
  {
    "id": "514343453",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 17:36:00",
    "closeTime": "2025.09.18 17:53:00",
    "openPrice": 3633.75,
    "closePrice": 3641.75,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343454",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.18 23:03:00",
    "closeTime": "2025.09.18 23:29:00",
    "openPrice": 3637.76,
    "closePrice": 3645.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343455",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.19 04:06:00",
    "closeTime": "2025.09.19 06:04:00",
    "openPrice": 3653.17,
    "closePrice": 3646.15,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -7.02
  },
  {
    "id": "514343487",
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
    "id": "514343456",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.19 10:04:00",
    "closeTime": "2025.09.19 11:40:00",
    "openPrice": 3648.56,
    "closePrice": 3653.61,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.05
  },
  {
    "id": "514343457",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.19 16:34:00",
    "closeTime": "2025.09.19 17:15:00",
    "openPrice": 3654.09,
    "closePrice": 3659.36,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.27
  },
  {
    "id": "514343458",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.19 22:42:00",
    "closeTime": "2025.09.19 22:51:00",
    "openPrice": 3676.17,
    "closePrice": 3684.17,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343459",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.22 03:43:00",
    "closeTime": "2025.09.22 05:26:00",
    "openPrice": 3682.66,
    "closePrice": 3690.66,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343460",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.22 09:27:00",
    "closeTime": "2025.09.22 11:02:00",
    "openPrice": 3722.23,
    "closePrice": 3714.74,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -7.49
  },
  {
    "id": "514343461",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.22 14:42:00",
    "closeTime": "2025.09.22 16:37:00",
    "openPrice": 3712.51,
    "closePrice": 3720.51,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343462",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.22 19:51:00",
    "closeTime": "2025.09.22 22:13:00",
    "openPrice": 3739.2,
    "closePrice": 3747.2,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343463",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 04:32:00",
    "closeTime": "2025.09.23 04:48:00",
    "openPrice": 3748.19,
    "closePrice": 3756.19,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343464",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 09:18:00",
    "closeTime": "2025.09.23 10:24:00",
    "openPrice": 3745.77,
    "closePrice": 3753.77,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343465",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 14:14:00",
    "closeTime": "2025.09.23 15:59:00",
    "openPrice": 3779.05,
    "closePrice": 3784.1,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.05
  },
  {
    "id": "514343466",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.23 20:58:00",
    "closeTime": "2025.09.23 21:34:00",
    "openPrice": 3771.62,
    "closePrice": 3777.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.37
  },
  {
    "id": "514343467",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.24 02:19:00",
    "closeTime": "2025.09.24 04:10:00",
    "openPrice": 3761.09,
    "closePrice": 3769.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343468",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.24 08:10:00",
    "closeTime": "2025.09.24 09:45:00",
    "openPrice": 3764.25,
    "closePrice": 3772.25,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343469",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.24 13:46:00",
    "closeTime": "2025.09.24 15:21:00",
    "openPrice": 3775.38,
    "closePrice": 3768.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -7.12
  },
  {
    "id": "514343470",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.24 18:53:00",
    "closeTime": "2025.09.24 20:56:00",
    "openPrice": 3726.34,
    "closePrice": 3734.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.96
  },
  {
    "id": "514343471",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.25 01:08:00",
    "closeTime": "2025.09.25 03:32:00",
    "openPrice": 3741,
    "closePrice": 3748.28,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.28
  },
  {
    "id": "514343472",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.25 07:55:00",
    "closeTime": "2025.09.25 09:07:00",
    "openPrice": 3732.99,
    "closePrice": 3739.88,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.89
  },
  {
    "id": "514343473",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.25 14:16:00",
    "closeTime": "2025.09.25 14:43:00",
    "openPrice": 3743.95,
    "closePrice": 3751.95,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343474",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.25 18:04:00",
    "closeTime": "2025.09.25 20:18:00",
    "openPrice": 3748.91,
    "closePrice": 3740.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -8
  },
  {
    "id": "514343475",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 02:08:00",
    "closeTime": "2025.09.26 02:54:00",
    "openPrice": 3739.63,
    "closePrice": 3744.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.26
  },
  {
    "id": "514343476",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.26 06:43:00",
    "closeTime": "2025.09.26 08:29:00",
    "openPrice": 3738.33,
    "closePrice": 3746.33,
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
    "openTime": "2025.09.26 11:53:00",
    "closeTime": "2025.09.26 14:05:00",
    "openPrice": 3740.3,
    "closePrice": 3745.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.56
  },
  {
    "id": "514343478",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.09.26 17:24:00",
    "closeTime": "2025.09.26 19:40:00",
    "openPrice": 3782.55,
    "closePrice": 3775.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.68
  },
  {
    "id": "514343479",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 00:41:00",
    "closeTime": "2025.09.29 02:16:00",
    "openPrice": 3760.47,
    "closePrice": 3768.47,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343480",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 07:31:00",
    "closeTime": "2025.09.29 07:51:00",
    "openPrice": 3802.51,
    "closePrice": 3806.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.32
  },
  {
    "id": "514343481",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 12:04:00",
    "closeTime": "2025.09.29 13:27:00",
    "openPrice": 3809.47,
    "closePrice": 3817.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.61
  },
  {
    "id": "514343482",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.29 16:54:00",
    "closeTime": "2025.09.29 19:02:00",
    "openPrice": 3822.32,
    "closePrice": 3830.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343483",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 01:27:00",
    "closeTime": "2025.09.30 01:38:00",
    "openPrice": 3822.54,
    "closePrice": 3827.83,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.29
  },
  {
    "id": "514343484",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 06:28:00",
    "closeTime": "2025.09.30 07:13:00",
    "openPrice": 3855.49,
    "closePrice": 3863.49,
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
    "openTime": "2025.09.30 12:33:00",
    "closeTime": "2025.09.30 12:49:00",
    "openPrice": 3789.96,
    "closePrice": 3797.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343486",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.09.30 16:59:00",
    "closeTime": "2025.09.30 18:24:00",
    "openPrice": 3831.21,
    "closePrice": 3839.21,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343488",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.01 00:16:00",
    "closeTime": "2025.10.01 01:00:00",
    "openPrice": 3849.1,
    "closePrice": 3857.1,
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
    "openTime": "2025.10.01 06:48:00",
    "closeTime": "2025.10.01 08:33:00",
    "openPrice": 3857.06,
    "closePrice": 3865.06,
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
    "openTime": "2025.10.01 15:24:00",
    "closeTime": "2025.10.01 16:06:00",
    "openPrice": 3859.26,
    "closePrice": 3867.26,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343491",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.01 23:07:00",
    "closeTime": "2025.10.01 23:40:00",
    "openPrice": 3855.81,
    "closePrice": 3863.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343492",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.02 06:44:00",
    "closeTime": "2025.10.02 08:13:00",
    "openPrice": 3870.34,
    "closePrice": 3868.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -2
  },
  {
    "id": "514343493",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.02 14:28:00",
    "closeTime": "2025.10.02 15:47:00",
    "openPrice": 3874.98,
    "closePrice": 3882.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343494",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.02 21:46:00",
    "closeTime": "2025.10.02 23:20:00",
    "openPrice": 3848.71,
    "closePrice": 3856.71,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343495",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.03 05:56:00",
    "closeTime": "2025.10.03 07:54:00",
    "openPrice": 3835.9,
    "closePrice": 3843.9,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343496",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.03 13:46:00",
    "closeTime": "2025.10.03 15:27:00",
    "openPrice": 3855.4,
    "closePrice": 3861.98,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.58
  },
  {
    "id": "514343497",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.03 22:15:00",
    "closeTime": "2025.10.03 23:00:00",
    "openPrice": 3878.8,
    "closePrice": 3885.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.7
  },
  {
    "id": "514343498",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.06 05:43:00",
    "closeTime": "2025.10.06 07:34:00",
    "openPrice": 3929.64,
    "closePrice": 3934.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.35
  },
  {
    "id": "514343499",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.06 13:45:00",
    "closeTime": "2025.10.06 15:07:00",
    "openPrice": 3929.92,
    "closePrice": 3937.92,
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
    "openTime": "2025.10.06 21:26:00",
    "closeTime": "2025.10.06 22:41:00",
    "openPrice": 3956.25,
    "closePrice": 3962.81,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.56
  },
  {
    "id": "514343501",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.07 06:52:00",
    "closeTime": "2025.10.07 07:14:00",
    "openPrice": 3977.49,
    "closePrice": 3973.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.09
  },
  {
    "id": "514343502",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.07 12:58:00",
    "closeTime": "2025.10.07 14:48:00",
    "openPrice": 3961.61,
    "closePrice": 3965.99,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.38
  },
  {
    "id": "514343503",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.07 20:19:00",
    "closeTime": "2025.10.07 22:21:00",
    "openPrice": 3975.28,
    "closePrice": 3980.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.05
  },
  {
    "id": "514343504",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.08 05:04:00",
    "closeTime": "2025.10.08 06:54:00",
    "openPrice": 4018.03,
    "closePrice": 4013.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.14
  },
  {
    "id": "514343505",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.08 14:14:00",
    "closeTime": "2025.10.08 14:28:00",
    "openPrice": 4027.33,
    "closePrice": 4035.33,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343506",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.08 19:47:00",
    "closeTime": "2025.10.08 22:01:00",
    "openPrice": 4045.5,
    "closePrice": 4051.5,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6
  },
  {
    "id": "514343507",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.09 05:00:00",
    "closeTime": "2025.10.09 06:35:00",
    "openPrice": 4022.59,
    "closePrice": 4026.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.08
  },
  {
    "id": "514343508",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.09 12:30:00",
    "closeTime": "2025.10.09 14:08:00",
    "openPrice": 4032.2,
    "closePrice": 4039.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.66
  },
  {
    "id": "514343509",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.09 19:42:00",
    "closeTime": "2025.10.09 21:42:00",
    "openPrice": 3950.53,
    "closePrice": 3958.53,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343510",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.10 04:03:00",
    "closeTime": "2025.10.10 06:15:00",
    "openPrice": 3976.4,
    "closePrice": 3970.6,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.8
  },
  {
    "id": "514343511",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.10 13:27:00",
    "closeTime": "2025.10.10 13:48:00",
    "openPrice": 3990,
    "closePrice": 3997.56,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.56
  },
  {
    "id": "514343512",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.10 20:40:00",
    "closeTime": "2025.10.10 21:22:00",
    "openPrice": 3998.91,
    "closePrice": 4004.09,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.18
  },
  {
    "id": "514343513",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.13 05:25:00",
    "closeTime": "2025.10.13 05:55:00",
    "openPrice": 4037.44,
    "closePrice": 4045.44,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343514",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.13 11:34:00",
    "closeTime": "2025.10.13 13:29:00",
    "openPrice": 4068.29,
    "closePrice": 4076.29,
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
    "openTime": "2025.10.13 20:09:00",
    "closeTime": "2025.10.13 21:02:00",
    "openPrice": 4095.08,
    "closePrice": 4103.08,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343516",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.14 04:38:00",
    "closeTime": "2025.10.14 05:35:00",
    "openPrice": 4141.95,
    "closePrice": 4146.22,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.27
  },
  {
    "id": "514343517",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.14 12:39:00",
    "closeTime": "2025.10.14 13:09:00",
    "openPrice": 4120.13,
    "closePrice": 4127.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.69
  },
  {
    "id": "514343518",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.14 18:45:00",
    "closeTime": "2025.10.14 20:42:00",
    "openPrice": 4142.39,
    "closePrice": 4149.85,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.46
  },
  {
    "id": "514343519",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.15 04:57:00",
    "closeTime": "2025.10.15 05:16:00",
    "openPrice": 4177.04,
    "closePrice": 4182.89,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.85
  },
  {
    "id": "514343520",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.15 11:39:00",
    "closeTime": "2025.10.15 12:49:00",
    "openPrice": 4184.01,
    "closePrice": 4190.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.05
  },
  {
    "id": "514343521",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.15 18:21:00",
    "closeTime": "2025.10.15 20:23:00",
    "openPrice": 4190.13,
    "closePrice": 4185.63,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.5
  },
  {
    "id": "514343522",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.16 02:40:00",
    "closeTime": "2025.10.16 04:56:00",
    "openPrice": 4223.44,
    "closePrice": 4228.67,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.23
  },
  {
    "id": "514343523",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.16 11:10:00",
    "closeTime": "2025.10.16 12:29:00",
    "openPrice": 4215.24,
    "closePrice": 4222.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.72
  },
  {
    "id": "514343524",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.16 17:43:00",
    "closeTime": "2025.10.16 20:03:00",
    "openPrice": 4279.23,
    "closePrice": 4287.23,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343525",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.17 02:49:00",
    "closeTime": "2025.10.17 04:36:00",
    "openPrice": 4316.35,
    "closePrice": 4321.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.92
  },
  {
    "id": "514343526",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.17 11:04:00",
    "closeTime": "2025.10.17 12:10:00",
    "openPrice": 4335.55,
    "closePrice": 4343.29,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.74
  },
  {
    "id": "514343527",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.17 17:36:00",
    "closeTime": "2025.10.17 19:43:00",
    "openPrice": 4205.04,
    "closePrice": 4213.04,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343528",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.20 02:37:00",
    "closeTime": "2025.10.20 04:17:00",
    "openPrice": 4251.09,
    "closePrice": 4255.37,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.28
  },
  {
    "id": "514343529",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.20 10:12:00",
    "closeTime": "2025.10.20 11:50:00",
    "openPrice": 4245.39,
    "closePrice": 4252,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.61
  },
  {
    "id": "514343530",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.20 17:10:00",
    "closeTime": "2025.10.20 19:23:00",
    "openPrice": 4343.71,
    "closePrice": 4347.06,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.35
  },
  {
    "id": "514343531",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.21 02:08:00",
    "closeTime": "2025.10.21 03:57:00",
    "openPrice": 4372.43,
    "closePrice": 4368.55,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -3.88
  },
  {
    "id": "514343532",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.21 11:10:00",
    "closeTime": "2025.10.21 11:30:00",
    "openPrice": 4273.79,
    "closePrice": 4267.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.27
  },
  {
    "id": "514343533",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.21 18:04:00",
    "closeTime": "2025.10.21 19:04:00",
    "openPrice": 4135.35,
    "closePrice": 4139.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.97
  },
  {
    "id": "514343534",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.22 01:09:00",
    "closeTime": "2025.10.22 03:37:00",
    "openPrice": 4069.03,
    "closePrice": 4073.14,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.11
  },
  {
    "id": "514343535",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.22 10:50:00",
    "closeTime": "2025.10.22 11:11:00",
    "openPrice": 4093.78,
    "closePrice": 4101.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343536",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.22 18:10:00",
    "closeTime": "2025.10.22 18:44:00",
    "openPrice": 4026.34,
    "closePrice": 4034.34,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343537",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.23 00:57:00",
    "closeTime": "2025.10.23 03:18:00",
    "openPrice": 4079.08,
    "closePrice": 4084.21,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.13
  },
  {
    "id": "514343538",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.23 09:37:00",
    "closeTime": "2025.10.23 10:51:00",
    "openPrice": 4103.67,
    "closePrice": 4096.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -6.85
  },
  {
    "id": "514343539",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.23 17:59:00",
    "closeTime": "2025.10.23 18:24:00",
    "openPrice": 4132.32,
    "closePrice": 4140.32,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343540",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 02:42:00",
    "closeTime": "2025.10.24 02:58:00",
    "openPrice": 4113.47,
    "closePrice": 4119.52,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.05
  },
  {
    "id": "514343558",
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
    "id": "514343541",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 10:13:00",
    "closeTime": "2025.10.24 10:31:00",
    "openPrice": 4082.71,
    "closePrice": 4087.91,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.2
  },
  {
    "id": "514343542",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.24 15:37:00",
    "closeTime": "2025.10.24 18:05:00",
    "openPrice": 4111.76,
    "closePrice": 4119.76,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343543",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.27 02:04:00",
    "closeTime": "2025.10.27 02:38:00",
    "openPrice": 4064.32,
    "closePrice": 4071.86,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.54
  },
  {
    "id": "514343544",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.27 08:58:00",
    "closeTime": "2025.10.27 10:12:00",
    "openPrice": 4064.96,
    "closePrice": 4072.96,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343545",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.27 15:53:00",
    "closeTime": "2025.10.27 17:45:00",
    "openPrice": 3990.26,
    "closePrice": 3997.72,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.46
  },
  {
    "id": "514343546",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.28 00:11:00",
    "closeTime": "2025.10.28 02:18:00",
    "openPrice": 3983.53,
    "closePrice": 3988.41,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 4.88
  },
  {
    "id": "514343547",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.28 09:46:00",
    "closeTime": "2025.10.28 09:52:00",
    "openPrice": 3934.65,
    "closePrice": 3941.87,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.22
  },
  {
    "id": "514343548",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.28 17:08:00",
    "closeTime": "2025.10.28 17:25:00",
    "openPrice": 3936.27,
    "closePrice": 3944.27,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343549",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.29 00:48:00",
    "closeTime": "2025.10.29 01:59:00",
    "openPrice": 3927.33,
    "closePrice": 3933.4,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.07
  },
  {
    "id": "514343550",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.29 07:41:00",
    "closeTime": "2025.10.29 09:32:00",
    "openPrice": 3967.15,
    "closePrice": 3974.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 6.9
  },
  {
    "id": "514343551",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.29 15:13:00",
    "closeTime": "2025.10.29 17:06:00",
    "openPrice": 4017.44,
    "closePrice": 4020.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 3.34
  },
  {
    "id": "514343552",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.30 01:17:00",
    "closeTime": "2025.10.30 01:39:00",
    "openPrice": 3943.61,
    "closePrice": 3938.78,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -4.83
  },
  {
    "id": "514343553",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.30 08:18:00",
    "closeTime": "2025.10.30 09:12:00",
    "openPrice": 3949.12,
    "closePrice": 3957.12,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 8
  },
  {
    "id": "514343554",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.30 15:29:00",
    "closeTime": "2025.10.30 16:46:00",
    "openPrice": 3973.36,
    "closePrice": 3978.82,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.46
  },
  {
    "id": "514343555",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.31 00:05:00",
    "closeTime": "2025.10.31 01:19:00",
    "openPrice": 4013.26,
    "closePrice": 4018.42,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 5.16
  },
  {
    "id": "514343556",
    "symbol": "XAUUSD",
    "type": "sell",
    "volume": 0.01,
    "openTime": "2025.10.31 08:33:00",
    "closeTime": "2025.10.31 08:53:00",
    "openPrice": 4012.68,
    "closePrice": 4007.05,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": -5.63
  },
  {
    "id": "514343557",
    "symbol": "XAUUSD",
    "type": "buy",
    "volume": 0.01,
    "openTime": "2025.10.31 15:32:00",
    "closeTime": "2025.10.31 16:26:00",
    "openPrice": 4022.08,
    "closePrice": 4029.3,
    "sl": 0,
    "tp": 0,
    "commission": 0,
    "swap": 0,
    "profit": 7.22
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

