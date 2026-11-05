import { AccountProfile } from '../data/accounts';

// Veride altın her zaman XAUUSD olarak saklanır; FxPro hesaplarında ekranda GOLD gösterilir.
export const getDisplaySymbol = (symbol: string, acc: AccountProfile | null | undefined) => {
  if (symbol !== 'XAUUSD' || !acc) return symbol;
  return `${acc.broker} ${acc.server}`.toLowerCase().includes('fxpro') ? 'GOLD' : symbol;
};
