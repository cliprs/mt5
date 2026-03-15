import { useState } from 'react';
import { HistoryDeal } from '../data/transactions';

interface HistoryItemProps {
  deal: HistoryDeal;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ deal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isProfit = deal.profit >= 0;
  const profitColor = isProfit ? 'text-mt5-blue' : 'text-mt5-red';
  const typeColor = deal.type === 'buy' ? 'text-mt5-blue' : 'text-mt5-red';

  const formattedProfit = deal.profit.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).replace(/,/g, ' ');
  
  // Translate deal type
  const dealTypeTR = deal.type === 'buy' ? 'buy' : deal.type === 'sell' ? 'sell' : 'balance';

  const formatPriceMT5 = (price: number) => {
    return price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 5
    }).replace(/,/g, ' ');
  };

  const formatSLTP = (price: number) => {
    if (price === 0) return '-';
    return formatPriceMT5(price);
  };

  const displayTime = deal.closeTime;

  // Render Details Section
  const renderDetails = () => {
    if (!isOpen) return null;

    if (deal.type === 'balance') {
        return (
            <div className="flex justify-between mt-2 pt-2 border-t border-gray-50 text-[11px] text-gray-400 font-normal">
                <div className="flex flex-col gap-1">
                    <span>#{deal.id}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-between mt-1 pt-1 border-t border-gray-50 text-[13.5px] text-gray-400 font-normal">
            {/* Left Side */}
            <div className="flex flex-col gap-0 w-[45%]">
                <div className="flex justify-between">
                    <span>#{deal.id}</span>
                </div>
                <div className="flex justify-between">
                    <span>S/L:</span>
                    <span>{formatPriceMT5(deal.closePrice)}</span>
                </div>
                <div className="flex justify-between">
                    <span>T/P:</span>
                    <span>{formatSLTP(deal.tp)}</span>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-0 w-[52%]">
                <div className="flex justify-between">
                    <span>Açılış:</span>
                    <span>{deal.openTime}</span>
                </div>
                <div className="flex justify-between">
                    <span>Swap:</span>
                    <span>{formatPriceMT5(deal.swap)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Komisyon:</span>
                    <span>{formatPriceMT5(deal.commission)}</span>
                </div>
            </div>
        </div>
    );
  };

  // Özel Görünüm: Para Çekme / Yatırma (Balance)
  if (deal.type === 'balance') {
     // Deposit mi Withdrawal mı? Profit'e bakarak karar verelim.
     const isDeposit = deal.profit > 0;
     const balanceTitle = isDeposit ? 'Deposit' : 'Withdrawal';
     
     // Deposit entries show the fixed MT5 reference ID, withdrawals keep their stored ID.
     const depositReferenceId = '513565171';
     const balanceId = deal.sl !== 0 ? deal.sl : Number(depositReferenceId);
     const customDesc = isDeposit 
        ? `OTGK-DP(${depositReferenceId})+D`
        : `OTGK-WD(${balanceId})-D`;

     const amountColor = isDeposit ? 'text-mt5-blue' : 'text-mt5-red';

     return (
        <div 
            className="flex flex-col py-1.5 px-4 border-b border-mt5-border bg-white text-sm font-condensed tracking-tighter cursor-pointer" 
            style={{ transform: 'scaleX(0.88)', transformOrigin: 'left', width: '113.6%' }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-black font-bold text-[15px] leading-none tracking-tight">{balanceTitle}</span>
                    <span className="text-[13.5px] text-gray-500 font-bold mt-0.5 leading-tight tracking-tight">
                        {customDesc}
                    </span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[15px] text-gray-500 mb-0.5 leading-none font-normal tracking-tight">
                        {displayTime}
                    </span>
                    <span className={`font-bold text-[15px] leading-none ${amountColor} tracking-tight`}>
                        {formattedProfit}
                    </span>
                </div>
            </div>
            {renderDetails()}
        </div>
     );
  }

  return (
    <div 
        className="flex flex-col py-1.5 px-4 border-b border-mt5-border bg-white text-sm font-condensed tracking-tighter cursor-pointer" 
        style={{ transform: 'scaleX(0.88)', transformOrigin: 'left', width: '113.6%' }}
        onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
            {/* Symbol & Type/Volume Row */}
            <div className="flex items-baseline">
                <span className="text-black font-bold text-[15px] leading-none tracking-tight">{deal.symbol},</span>
                <span className={`ml-1 text-[15px] font-medium ${typeColor} lowercase leading-none tracking-tight`}>
                    {dealTypeTR} {deal.volume.toFixed(2)}
                </span>
            </div>
            {/* Price Row */}
            <div className="text-[13.5px] text-gray-500 font-bold mt-0.5 leading-tight tracking-tight">
                {formatPriceMT5(deal.openPrice)} &rarr; {formatPriceMT5(deal.closePrice)}
            </div>
        </div>

        <div className="flex flex-col items-end">
            <span className="text-[15px] text-gray-500 mb-0.5 leading-none font-normal tracking-tight">
                {displayTime}
            </span>
            <span className={`font-bold text-[15px] leading-none ${profitColor} tracking-tight`}>
                {formattedProfit}
            </span>
        </div>
      </div>
      {renderDetails()}
    </div>
  );
};

export default HistoryItem;
