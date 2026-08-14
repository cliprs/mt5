import React from 'react';
import { Quote } from '../data/mockData';

interface QuoteItemProps {
  quote: Quote;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const formatPrice = (price: number) => {
    // Determine decimal places
    let decimalPlaces = 5;
    if (quote.symbol === 'XAUUSD') {
        decimalPlaces = 2;
    } else if (quote.symbol.includes('JPY')) {
        decimalPlaces = 3;
    } else if (quote.symbol === 'BTCUSD') {
        decimalPlaces = 2;
    }

    const parts = price.toFixed(decimalPlaces).split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '';

    // MT5 style: last 2 digits are smaller/bigger depending on UI
    // Here we just render standard
    return (
        <div className="flex items-baseline leading-none">
            <span className="text-[13px] font-normal">{integerPart}.</span>
            <span className="text-[18px] font-bold">{decimalPart.slice(0, -1)}</span>
            <span className="text-[13px] font-bold">{decimalPart.slice(-1)}</span>
        </div>
    );
  };

  const getPriceColor = () => {
    if (quote.change > 0) return 'text-mt5-blue';
    if (quote.change < 0) return 'text-mt5-red';
    return 'text-black';
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50 active:bg-gray-50 transition-colors">
      <div className="flex flex-col gap-0">
        <span className="text-[16px] font-bold text-black leading-tight">{quote.symbol}</span>
        <span className="text-[12px] text-gray-400 font-normal leading-tight">{quote.time || '18:55:04'}</span>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col items-end min-w-[65px]">
          <div className={getPriceColor()}>{formatPrice(quote.bid)}</div>
          <span className="text-[10px] text-gray-400 mt-0.5">D: {quote.low.toFixed(quote.symbol === 'XAUUSD' ? 2 : 5)}</span>
        </div>
        <div className="flex flex-col items-end min-w-[65px]">
          <div className={getPriceColor()}>{formatPrice(quote.ask)}</div>
          <span className="text-[10px] text-gray-400 mt-0.5">Y: {quote.high.toFixed(quote.symbol === 'XAUUSD' ? 2 : 5)}</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
