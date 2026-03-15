export interface Quote {
  id: number;
  symbol: string;
  description: string;
  bid: number;
  ask: number;
  low: number;
  high: number;
  change: number; // 1: increase, -1: decrease, 0: neutral
  changeAmount: string;
  changePercentage: string;
  spread: number;
  time?: string;
}

export const mockQuotes: Quote[] = [
  { id: 0, symbol: 'XAUUSD', description: 'Altın vs ABD Doları', bid: 2652.45, ask: 2652.87, low: 2640.22, high: 2665.45, change: 1, changeAmount: '+1272', changePercentage: '0.29%', spread: 34, time: '18:55:04' },
  { id: 1, symbol: 'EURUSD', description: 'Euro vs ABD Doları', bid: 1.05432, ask: 1.05445, low: 1.05210, high: 1.05680, change: -1, changeAmount: '-212', changePercentage: '-0.02%', spread: 13, time: '18:55:04' },
  { id: 2, symbol: 'GBPUSD', description: 'İngiliz Sterlini vs ABD Doları', bid: 1.26543, ask: 1.26561, low: 1.26320, high: 1.26840, change: 1, changeAmount: '+456', changePercentage: '0.04%', spread: 18, time: '18:55:04' },
  { id: 3, symbol: 'USDJPY', description: 'ABD Doları vs Japon Yeni', bid: 148.764, ask: 148.782, low: 147.210, high: 149.320, change: -1, changeAmount: '-321', changePercentage: '-0.21%', spread: 18, time: '18:55:04' },
  { id: 4, symbol: 'AUDUSD', description: 'Avustralya Doları vs ABD Doları', bid: 0.64321, ask: 0.64335, low: 0.64120, high: 0.64560, change: 1, changeAmount: '+123', changePercentage: '0.02%', spread: 14, time: '18:55:04' },
  { id: 5, symbol: 'USDCAD', description: 'ABD Doları vs Kanada Doları', bid: 1.40123, ask: 1.40142, low: 1.39840, high: 1.40450, change: -1, changeAmount: '-154', changePercentage: '-0.11%', spread: 19, time: '18:55:04' },
  { id: 6, symbol: 'USDCHF', description: 'ABD Doları vs İsviçre Frangı', bid: 0.88764, ask: 0.88782, low: 0.88450, high: 0.89120, change: 1, changeAmount: '+231', changePercentage: '0.26%', spread: 18, time: '18:55:04' },
  { id: 7, symbol: 'NZDUSD', description: 'Yeni Zelanda Doları vs ABD Doları', bid: 0.58432, ask: 0.58450, low: 0.58210, high: 0.58680, change: -1, changeAmount: '-112', changePercentage: '-0.19%', spread: 18, time: '18:55:04' },
  { id: 8, symbol: 'EURGBP', description: 'Euro vs İngiliz Sterlini', bid: 0.83321, ask: 0.83338, low: 0.83120, high: 0.83540, change: 1, changeAmount: '+54', changePercentage: '0.06%', spread: 17, time: '18:55:04' },
  { id: 9, symbol: 'EURJPY', description: 'Euro vs Japon Yeni', bid: 156.842, ask: 156.864, low: 155.320, high: 157.650, change: -1, changeAmount: '-421', changePercentage: '-0.27%', spread: 22, time: '18:55:04' },
  { id: 10, symbol: 'GBPJPY', description: 'İngiliz Sterlini vs Japon Yeni', bid: 188.231, ask: 188.258, low: 187.120, high: 189.430, change: 1, changeAmount: '+631', changePercentage: '0.33%', spread: 27, time: '18:55:04' },
  { id: 11, symbol: 'BTCUSD', description: 'Bitcoin vs ABD Doları', bid: 95432.45, ask: 95468.92, low: 94120.22, high: 96840.45, change: 1, changeAmount: '+2432', changePercentage: '2.55%', spread: 3647, time: '18:55:04' }
];
