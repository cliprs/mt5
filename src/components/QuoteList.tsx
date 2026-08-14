import React, { useState, useEffect } from 'react';
import { mockQuotes, Quote } from '../data/mockData';
import QuoteItem from './QuoteItem';

const QuoteList: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote: Quote) => {
          const change = Math.random() > 0.5 ? 1 : -1;
          const volatility = quote.symbol === 'BTCUSD' ? 10 : 0.05;
          const changeAmount = (Math.random() * volatility * change);
          const newBid = quote.bid + changeAmount;
          const newAsk = quote.ask + changeAmount;

          return {
            ...quote,
            bid: newBid,
            ask: newAsk,
            change: change,
            low: Math.min(quote.low, newBid),
            high: Math.max(quote.high, newAsk),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-white pb-20">
      {/* Header for Quotes */}
      <div className="sticky top-[56px] z-20 flex items-center bg-gray-50 border-b border-gray-100 px-4 py-1.5 text-[11px] font-bold text-gray-400">
        <div className="flex-1">SEMBOL</div>
        <div className="flex gap-20 pr-4">
            <span>SAT</span>
            <span>AL</span>
        </div>
      </div>
      
      <div className="flex flex-col">
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
