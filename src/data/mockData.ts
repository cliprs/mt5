export interface Quote {
  id: number;
  symbol: string;
  description: string;
  bid: number;
  ask: number;
  low: number;
  high: number;
  change: number; 
  changeAmount: string;
  changePercentage: string;
  spread: number;
}

export const initialQuotes: Quote[] = [
  { id: 0, symbol: 'GOLD', description: 'Altın vs ABD Doları', bid: 2652.45, ask: 2652.87, low: 2640.22, high: 2665.45, change: 1, changeAmount: '+1272', changePercentage: '0.29%', spread: 34 },
  { id: 1, symbol: 'EURUSD', description: 'Euro vs ABD Doları', bid: 1.09240, ask: 1.09245, low: 1.09000, high: 1.09500, change: 1, changeAmount: '+15', changePercentage: '0.01%', spread: 11 },
  { id: 2, symbol: 'GBPUSD', description: 'İngiliz Sterlini vs ABD Doları', bid: 1.27500, ask: 1.27515, low: 1.27200, high: 1.27800, change: -1, changeAmount: '-42', changePercentage: '0.03%', spread: 15 },
  { id: 3, symbol: 'USDJPY', description: 'ABD Doları vs Japon Yeni', bid: 144.50, ask: 144.52, low: 144.00, high: 145.00, change: 1, changeAmount: '+88', changePercentage: '0.06%', spread: 12 },
  { id: 4, symbol: 'USDCHF', description: 'ABD Doları vs İsviçre Frangı', bid: 0.88500, ask: 0.88512, low: 0.88200, high: 0.88800, change: -1, changeAmount: '-24', changePercentage: '0.02%', spread: 14 },
  { id: 5, symbol: 'AUDUSD', description: 'Avustralya Doları vs ABD Doları', bid: 0.65400, ask: 0.65410, low: 0.65000, high: 0.65800, change: 1, changeAmount: '+31', changePercentage: '0.05%', spread: 10 },
  { id: 6, symbol: 'USDCAD', description: 'ABD Doları vs Kanada Doları', bid: 1.35200, ask: 1.35215, low: 1.34800, high: 1.35500, change: 1, changeAmount: '+45', changePercentage: '0.03%', spread: 13 },
  { id: 7, symbol: 'NZDUSD', description: 'Yeni Zelanda Doları vs ABD Doları', bid: 0.59800, ask: 0.59812, low: 0.59500, high: 0.60200, change: -1, changeAmount: '-18', changePercentage: '0.03%', spread: 12 },
  { id: 8, symbol: 'EURGBP', description: 'Euro vs İngiliz Sterlini', bid: 0.85600, ask: 0.85610, low: 0.85400, high: 0.85900, change: -1, changeAmount: '-5', changePercentage: '0.01%', spread: 11 },
  { id: 9, symbol: 'EURJPY', description: 'Euro vs Japon Yeni', bid: 157.80, ask: 157.85, low: 157.00, high: 158.50, change: 1, changeAmount: '+112', changePercentage: '0.07%', spread: 14 },
  { id: 10, symbol: 'GBPJPY', description: 'İngiliz Sterlini vs Japon Yeni', bid: 184.20, ask: 184.30, low: 183.50, high: 185.00, change: 1, changeAmount: '+145', changePercentage: '0.08%', spread: 16 },
];