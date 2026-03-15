export interface HistoryDeal {
  id: string;
  symbol: string;
  type: 'buy' | 'sell' | 'balance';
  volume: number;
  openTime: string;
  closeTime: string;
  openPrice: number;
  closePrice: number;
  sl: number;
  tp: number;
  commission: number;
  swap: number;
  profit: number;
}