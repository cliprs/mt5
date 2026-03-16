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
        id: '514343000',
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
      // MAYIS 2025
      { id: '514343001', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.01 01:40:24', closeTime: '2025.05.01 01:50:47', openPrice: 3272.50, closePrice: 3279.50, sl: 0, tp: 0, commission: 0, swap: 0, profit: 7.00 },
      { id: '514343002', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.01 02:11:15', closeTime: '2025.05.01 02:17:42', openPrice: 3284.50, closePrice: 3276.50, sl: 0, tp: 0, commission: 0, swap: 0, profit: 8.00 },
      { id: '514343003', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.01 02:45:12', closeTime: '2025.05.01 02:51:33', openPrice: 3274.80, closePrice: 3274.10, sl: 0, tp: 0, commission: 0, swap: 0, profit: -0.70 },
      { id: '514343004', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.02 01:06:18', closeTime: '2025.05.02 01:10:45', openPrice: 3242.80, closePrice: 3237.30, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.50 },
      { id: '514343005', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.02 03:00:22', closeTime: '2025.05.02 03:15:54', openPrice: 3236.80, closePrice: 3241.20, sl: 0, tp: 0, commission: 0, swap: 0, profit: 4.40 },
      { id: '514343006', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.02 05:17:12', closeTime: '2025.05.02 05:24:38', openPrice: 3242.50, closePrice: 3245.80, sl: 0, tp: 0, commission: 0, swap: 0, profit: -3.30 },
      { id: '514343007', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.05 04:31:45', closeTime: '2025.05.05 04:35:12', openPrice: 3265.29, closePrice: 3269.66, sl: 0, tp: 0, commission: 0, swap: 0, profit: 4.37 },
      { id: '514343008', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.05 09:03:22', closeTime: '2025.05.05 09:06:47', openPrice: 3260.26, closePrice: 3258.61, sl: 0, tp: 0, commission: 0, swap: 0, profit: 1.65 },
      { id: '514343009', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.06 01:00:15', closeTime: '2025.05.06 01:02:42', openPrice: 3335.99, closePrice: 3337.63, sl: 0, tp: 0, commission: 0, swap: 0, profit: 1.64 },
      { id: '514343010', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.06 11:23:12', closeTime: '2025.05.06 11:44:45', openPrice: 3379.37, closePrice: 3377.66, sl: 0, tp: 0, commission: 0, swap: 0, profit: -1.71 },
      { id: '514343011', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.07 01:00:12', closeTime: '2025.05.07 01:03:45', openPrice: 3436.55, closePrice: 3419.32, sl: 0, tp: 0, commission: 0, swap: 0, profit: 17.23 },
      { id: '514343012', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.07 13:21:12', closeTime: '2025.05.07 13:30:45', openPrice: 3387.28, closePrice: 3391.43, sl: 0, tp: 0, commission: 0, swap: 0, profit: 4.15 },
      { id: '514343013', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.07 17:02:33', closeTime: '2025.05.07 17:10:12', openPrice: 3392.65, closePrice: 3387.54, sl: 0, tp: 0, commission: 0, swap: 0, profit: -5.11 },
      { id: '514343014', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.08 01:00:44', closeTime: '2025.05.08 01:04:18', openPrice: 3364.59, closePrice: 3372.50, sl: 0, tp: 0, commission: 0, swap: 0, profit: 7.91 },
      { id: '514343015', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.08 15:39:44', closeTime: '2025.05.08 15:45:18', openPrice: 3354.98, closePrice: 3352.54, sl: 0, tp: 0, commission: 0, swap: 0, profit: -2.44 },
      { id: '514343016', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.08 16:30:11', closeTime: '2025.05.08 16:36:22', openPrice: 3360.42, closePrice: 3368.09, sl: 0, tp: 0, commission: 0, swap: 0, profit: 7.67 },
      { id: '514343017', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.09 01:00:24', closeTime: '2025.05.09 01:03:12', openPrice: 3304.10, closePrice: 3310.84, sl: 0, tp: 0, commission: 0, swap: 0, profit: 6.74 },
      { id: '514343018', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.09 17:31:24', closeTime: '2025.05.09 17:50:12', openPrice: 3336.24, closePrice: 3339.11, sl: 0, tp: 0, commission: 0, swap: 0, profit: 2.87 },
      { id: '514343019', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.09 18:13:15', closeTime: '2025.05.09 18:22:42', openPrice: 3340.37, closePrice: 3339.50, sl: 0, tp: 0, commission: 0, swap: 0, profit: -0.87 },
      { id: '514343020', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.12 11:00:12', closeTime: '2025.05.12 11:02:45', openPrice: 3222.77, closePrice: 3228.98, sl: 0, tp: 0, commission: 0, swap: 0, profit: 6.21 },
      { id: '514343021', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.13 01:00:44', closeTime: '2025.05.13 01:02:18', openPrice: 3236.01, closePrice: 3240.75, sl: 0, tp: 0, commission: 0, swap: 0, profit: 4.74 },
      { id: '514343022', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.14 10:05:12', closeTime: '2025.05.14 10:15:33', openPrice: 3200.00, closePrice: 3205.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343023', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.05.15 14:12:18', closeTime: '2025.05.15 14:22:45', openPrice: 3225.00, closePrice: 3220.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343024', symbol: 'Withdrawal', type: 'balance', volume: 0, openTime: '2025.05.24 20:05:42', closeTime: '2025.05.24 20:05:42', openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0, profit: -150.00 },
      { id: '514343025', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.05.30 03:00:12', closeTime: '2025.05.30 03:00:45', openPrice: 3314.90, closePrice: 3316.21, sl: 0, tp: 0, commission: 0, swap: 0, profit: 1.31 },
      // HAZİRAN 2025 (%35 hedef revize)
      { id: '514343063', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.06.02 01:07:15', closeTime: '2025.06.02 01:56:42', openPrice: 3303.25, closePrice: 3308.25, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343064', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.06.02 04:01:22', closeTime: '2025.06.02 04:51:18', openPrice: 3323.97, closePrice: 3318.97, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343065', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.06.05 15:30:12', closeTime: '2025.06.05 15:31:45', openPrice: 3393.18, closePrice: 3398.18, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343066', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.06.05 15:49:12', closeTime: '2025.06.05 15:51:45', openPrice: 3390.00, closePrice: 3385.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343067', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.06.06 01:26:12', closeTime: '2025.06.06 01:28:45', openPrice: 3358.66, closePrice: 3363.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 4.34 },
      { id: '514343068', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.06.06 06:10:12', closeTime: '2025.06.06 06:45:45', openPrice: 3342.10, closePrice: 3332.10, sl: 0, tp: 0, commission: 0, swap: 0, profit: 10.00 },
      { id: '514343069', symbol: 'Withdrawal', type: 'balance', volume: 0, openTime: '2025.06.27 20:05:42', closeTime: '2025.06.27 20:05:42', openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0, profit: -200.00 },
      // TEMMUZ 2025 (%25 hedef revize - 3'e bölündü)
      { id: '514343095', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.01 01:50:22', closeTime: '2025.07.01 01:52:45', openPrice: 3308.91, closePrice: 3313.91, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343096', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.07.01 03:04:12', closeTime: '2025.07.01 03:10:45', openPrice: 3311.66, closePrice: 3309.66, sl: 0, tp: 0, commission: 0, swap: 0, profit: 2.00 },
      { id: '514343097', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.02 10:15:12', closeTime: '2025.07.02 10:45:45', openPrice: 3320.00, closePrice: 3328.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 8.00 },
      { id: '514343098', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.03 14:22:12', closeTime: '2025.07.03 14:55:45', openPrice: 3340.00, closePrice: 3350.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 10.00 },
      { id: '514343099', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.07.04 09:30:12', closeTime: '2025.07.04 09:45:45', openPrice: 3360.00, closePrice: 3353.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 7.00 },
      { id: '514343100', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.07 11:00:12', closeTime: '2025.07.07 11:30:45', openPrice: 3330.00, closePrice: 3338.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 8.00 },
      { id: '514343101', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.07.08 15:22:12', closeTime: '2025.07.08 15:55:45', openPrice: 3370.00, closePrice: 3360.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 10.00 },
      { id: '514343102', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.09 10:45:12', closeTime: '2025.07.09 11:15:45', openPrice: 3320.00, closePrice: 3328.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 8.00 },
      { id: '514343103', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.07.10 14:12:12', closeTime: '2025.07.10 14:45:45', openPrice: 3350.00, closePrice: 3343.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 7.00 },
      { id: '514343104', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.07.11 09:00:12', closeTime: '2025.07.11 09:30:45', openPrice: 3310.00, closePrice: 3315.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343109', symbol: 'Withdrawal', type: 'balance', volume: 0, openTime: '2025.07.18 10:05:42', closeTime: '2025.07.18 10:05:42', openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0, profit: -180.00 },
      // AĞUSTOS 2025 (%30 hedef revize)
      { id: '514343117', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.08.01 01:05:12', closeTime: '2025.08.01 01:53:45', openPrice: 3291.25, closePrice: 3296.25, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343118', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.08.01 04:00:12', closeTime: '2025.08.01 04:52:45', openPrice: 3290.07, closePrice: 3285.07, sl: 0, tp: 0, commission: 0, swap: 0, profit: -5.00 },
      { id: '514343120', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.08.04 10:15:12', closeTime: '2025.08.04 11:45:45', openPrice: 3310.00, closePrice: 3320.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 10.00 },
      { id: '514343121', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.08.05 14:22:18', closeTime: '2025.08.05 15:35:12', openPrice: 3350.00, closePrice: 3342.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 8.00 },
      { id: '514343124', symbol: 'Withdrawal', type: 'balance', volume: 0, openTime: '2025.08.08 10:05:42', closeTime: '2025.08.08 10:05:42', openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0, profit: -100.00 },
      // EYLÜL 2025 (%45 hedef revize)
      { id: '514343140', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.09.01 01:30:15', closeTime: '2025.09.01 01:35:42', openPrice: 3447.92, closePrice: 3452.92, sl: 0, tp: 0, commission: 0, swap: 0, profit: 5.00 },
      { id: '514343142', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.09.02 10:15:12', closeTime: '2025.09.02 11:45:45', openPrice: 3460.00, closePrice: 3475.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 15.00 },
      { id: '514343143', symbol: 'XAUUSD', type: 'buy', volume: 0.01, openTime: '2025.09.03 14:22:18', closeTime: '2025.09.03 15:35:12', openPrice: 3500.00, closePrice: 3515.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 15.00 },
      { id: '514343155', symbol: 'Withdrawal', type: 'balance', volume: 0, openTime: '2025.09.19 10:05:42', closeTime: '2025.09.19 10:05:42', openPrice: 0, closePrice: 0, sl: 0, tp: 0, commission: 0, swap: 0, profit: -350.00 },
      { id: '514343163', symbol: 'XAUUSD', type: 'sell', volume: 0.01, openTime: '2025.09.30 14:22:12', closeTime: '2025.09.30 15:55:45', openPrice: 3840.00, closePrice: 3825.00, sl: 0, tp: 0, commission: 0, swap: 0, profit: 15.00 },
    ]),
  },
];
