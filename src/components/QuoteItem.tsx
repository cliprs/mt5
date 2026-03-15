import { Quote } from '../data/mockData';

interface QuoteItemProps {
  quote: Quote;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
    const isPositive = quote.change > 0;
    const priceColor = isPositive ? 'text-mt5-blue' : 'text-mt5-red';
  
    // Helper to format L and H prices
    const formatLowHigh = (val: number) => {
        if (quote.symbol === 'GOLD') {
            return val.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            }).replace(/,/g, ' ');
        }
        return val.toFixed(5);
    };

    // MT5 Style: First part smaller, last two digits larger
    const renderPrice = (price: number) => {
        // Find decimal places based on symbol (GOLD usually 2, FX usually 5)
        const decimalPlaces = quote.symbol === 'GOLD' ? 2 : 5;
        const s = price.toFixed(decimalPlaces);
        
        const mainPart = s.slice(0, -2);
        const lastTwo = s.slice(-2);

        return (
            <div className="flex items-baseline font-medium font-condensed">
                <span className="text-[14px] leading-none">{mainPart}</span>
                <span className="text-[20px] leading-none">{lastTwo}</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col py-3 px-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer" style={{ transform: 'scaleX(0.95)', transformOrigin: 'left', width: '105.3%' }}>
            <div className="flex justify-between items-center">
                {/* Symbol & Description */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-[10px] font-normal leading-none mb-0.5">
                        <span className="text-gray-400 font-sans">{quote.changeAmount}</span>
                        <span className="text-mt5-blue font-sans">{quote.changePercentage}</span>
                    </div>
                    <span className="text-black font-medium text-[17px] leading-tight font-condensed">{quote.symbol}</span>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-1 font-normal">
                         <span>15:00:33</span>
                         <span className="text-gray-300">•</span>
                         <div className="flex items-center gap-0.5">
                            <img src="/spread.svg" alt="Spread" className="w-3 h-3 opacity-60" />
                            <span>{quote.spread}</span>
                         </div>
                    </div>
                </div>

                {/* Prices */}
                <div className="flex gap-8 items-center pr-1">
                    <div className={`flex flex-col items-center ${priceColor}`}>
                        <div className="h-6 flex items-center">{renderPrice(quote.bid)}</div>
                        <span className="text-[10px] text-gray-400 mt-1 font-sans">L: {formatLowHigh(quote.low)}</span>
                    </div>
                    <div className={`flex flex-col items-center ${priceColor}`}>
                        <div className="h-6 flex items-center">{renderPrice(quote.ask)}</div>
                         <span className="text-[10px] text-gray-400 mt-1 font-sans">H: {formatLowHigh(quote.high)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteItem;
