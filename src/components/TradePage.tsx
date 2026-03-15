import React, { useMemo } from 'react';
import { useAccounts } from '../context/AccountsContext';

const formatMoney = (val: number) => {
  return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, ' ');
};

const TradePage: React.FC = () => {
  const { selectedAccount } = useAccounts();
  const historyData = selectedAccount?.history ?? [];

  const summary = useMemo(() => {
    let totalGrossProfit = 0;
    let totalCommissionCost = 0;
    let totalSwap = 0;
    let totalWithdrawal = 0;
    let totalDeposit = 0; 

    historyData.forEach(deal => {
        if (deal.type === 'balance') {
            if (deal.profit < 0) {
                 totalWithdrawal += Math.abs(deal.profit);
            } else {
                 totalDeposit += deal.profit;
            }
        } else {
            totalGrossProfit += deal.profit;
            totalCommissionCost += Math.abs(deal.commission);
            totalSwap += deal.swap;
        }
    });

    const netProfit = totalGrossProfit - totalCommissionCost;
    const balance = totalDeposit + netProfit + totalSwap - totalWithdrawal;

    return {
        balance: balance,
        equity: balance, // Açık işlem simülasyonu olmadığı için bakiye ile aynı
        freeMargin: balance // Teminat kullanımı olmadığı için bakiye ile aynı
    };
  }, [historyData]);

  return (
    <div className="fixed top-[56px] left-0 right-0 bottom-[64px] bg-white text-black overflow-hidden select-none font-sans flex flex-col">
       {/* Summary Header */}
      <div className="bg-white pt-4 pb-2 border-b border-gray-100">
         <div className="flex flex-col gap-y-1 text-sm px-4">
            {[
                { label: 'Bakiye:', value: formatMoney(summary.balance) },
                { label: 'Varlık:', value: formatMoney(summary.equity) },
                { label: 'Serbest teminat:', value: formatMoney(summary.freeMargin) }
            ].map((item, index) => {
                let minWidth = 'min-w-[68px]';
                if (item.label === 'Serbest teminat:') minWidth = 'min-w-[105px]';

                return (
                    <div key={index} className="flex items-center w-full">
                        <span className={`font-bold text-black whitespace-nowrap text-left tracking-tight ${minWidth}`}>{item.label}</span>
                        <div className="flex-grow mx-1 h-px relative top-[2px]" style={{
                            backgroundImage: 'linear-gradient(to right, #9ca3af 20%, rgba(255,255,255,0) 0%)',
                            backgroundPosition: 'bottom',
                            backgroundSize: '6px 1px',
                            backgroundRepeat: 'repeat-x'
                        }}></div>
                        <span className="font-bold whitespace-nowrap text-right text-black tracking-tight">
                            {item.value}
                        </span>
                    </div>
                );
            })}
         </div>
      </div>

      {/* Active Trades Area */}
      <div className="flex flex-col items-center justify-start">
         {/* Buraya ileride aktif işlemler eklenebilir */}
      </div>
    </div>
  );
};

export default TradePage;
