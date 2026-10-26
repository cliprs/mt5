import { HistoryDeal } from '../data/transactions';

export const calculateBalance = (history: HistoryDeal[]): number => {
  let totalDeposit = 0;
  let totalWithdrawal = 0;
  let gross = 0;
  let comm = 0;
  let swap = 0;

  history.forEach((deal) => {
    if (deal.type === 'balance') {
      if (deal.profit < 0) totalWithdrawal += Math.abs(deal.profit);
      else totalDeposit += deal.profit;
    } else {
      gross += deal.profit;
      comm += Math.abs(deal.commission);
      swap += deal.swap;
    }
  });

  const net = gross - comm;
  return totalDeposit + net + swap - totalWithdrawal;
};
