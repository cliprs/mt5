import React, { useMemo } from 'react';
import HistoryItem from './HistoryItem';
import { HistoryDeal } from '../data/transactions';
import { useAccounts } from '../context/AccountsContext';

const formatMoney = (val: number) => {
  return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, ' ');
};

const parseDate = (dateStr: string) => {
    const [datePart, timePart] = dateStr.split(' ');
    const [year, month, day] = datePart.split('.').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute, second);
};

const DEFAULT_REFERENCE_DATE = new Date(2026, 1, 14, 23, 59, 59);

const getTimelineReferenceDate = (historyData: HistoryDeal[]): Date => {
    if (historyData.length === 0) {
        return DEFAULT_REFERENCE_DATE;
    }

    const latestDealDate = historyData.reduce((latest, deal) => {
        const dealDate = parseDate(deal.closeTime);
        return dealDate > latest ? dealDate : latest;
    }, parseDate(historyData[0].closeTime));

    return new Date(
        latestDealDate.getFullYear(),
        latestDealDate.getMonth(),
        latestDealDate.getDate(),
        23,
        59,
        59
    );
};

interface HistoryPageProps {
  selectedPeriod?: string;
  customStartDate?: string;
  customEndDate?: string;
}

const HistoryPage: React.FC<HistoryPageProps> = ({ 
    selectedPeriod = 'Bugün', 
    customStartDate, 
    customEndDate 
}) => {
  const { selectedAccount } = useAccounts();
  const historyData = selectedAccount?.history ?? [];
  const timelineReference = useMemo(() => getTimelineReferenceDate(historyData), [historyData]);
  
  const filteredData = useMemo(() => {
    const now = timelineReference; 
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    return historyData.filter(deal => {
        const dealDate = parseDate(deal.closeTime);
        
        switch (selectedPeriod) {
            case 'Bugün':
                return dealDate >= startOfToday;
            case 'Son hafta': {
                const lastWeek = new Date(now);
                lastWeek.setDate(now.getDate() - 7);
                return dealDate >= lastWeek;
            }
            case 'Son ay': {
                const lastMonth = new Date(now);
                lastMonth.setMonth(now.getMonth() - 1);
                return dealDate >= lastMonth;
            }
            case 'Son 3 ay': {
                const last3Months = new Date(now);
                last3Months.setMonth(now.getMonth() - 3);
                return dealDate >= last3Months;
            }
            case 'Özel dönem': {
                if (!customStartDate || !customEndDate) return true;
                const start = new Date(customStartDate);
                start.setHours(0, 0, 0);
                const end = new Date(customEndDate);
                end.setHours(23, 59, 59);
                return dealDate >= start && dealDate <= end;
            }
            default:
                return true; 
        }
    });
  }, [selectedPeriod, customStartDate, customEndDate, timelineReference, historyData]);

  const summary = useMemo(() => {
    let totalGrossProfit = 0;
    let totalCommissionCost = 0;
    let totalSwap = 0;
    let totalWithdrawal = 0;
    let totalDeposit = 0; 

    filteredData.forEach(deal => {
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
        profit: netProfit,
        deposit: totalDeposit,
        withdrawal: totalWithdrawal,
        commission: totalCommissionCost,
        swap: totalSwap,
        balance: balance
    };
  }, [filteredData]);


  console.log(`Filtrelenen veri sayısı (${selectedPeriod}):`, filteredData.length);

  return (
    <div className="flex flex-col w-full pb-20 bg-white">
      
      {/* Timeframe Selector Bar */}
      <div className="sticky top-[56px] z-20 flex items-center bg-white text-gray-500 text-[11px] font-medium">
        <div className="flex-1 text-center py-2 border-b-2 border-mt5-blue">
            <span className="text-black">POZİSYONLAR</span>
        </div>
        <div className="flex-1 text-center py-2">
            <span>EMİRLER</span>
        </div>
        <div className="flex-1 text-center py-2">
            <span>İŞLEMLER</span>
        </div>
      </div>

       {/* Summary Header */}
      <div className="bg-white pt-4 pb-2">
         <div className="flex flex-col gap-y-1 text-sm px-4">
            {[
                { label: 'Kâr:', value: formatMoney(summary.profit), color: summary.profit >= 0 ? 'text-mt5-blue' : 'text-mt5-red' },
                { label: 'Yatırılan:', value: formatMoney(summary.deposit), color: 'text-black' },
                { label: 'Çekilen:', value: formatMoney(-summary.withdrawal), color: 'text-black' },
                { label: 'Swap:', value: formatMoney(summary.swap), color: 'text-black' },
                { label: 'Komisyon:', value: formatMoney(-summary.commission), color: 'text-black' },
                { label: 'Bakiye:', value: formatMoney(summary.balance), color: 'text-black' }
            ].map((item, index) => {
                let minWidth = 'min-w-[50px]';
                if (item.label === 'Yatırılan:' || item.label === 'Bakiye:') minWidth = 'min-w-[68px]';
                if (item.label === 'Çekilen:' || item.label === 'Komisyon:') minWidth = 'min-w-[62px]';

                return (
                    <div key={index} className="flex items-center w-full">
                        <span className={`font-bold text-black whitespace-nowrap text-left tracking-tight ${minWidth}`}>{item.label}</span>
                        <div className="flex-grow mx-1 h-px relative top-[2px]" style={{
                            backgroundImage: 'linear-gradient(to right, #9ca3af 20%, rgba(255,255,255,0) 0%)',
                            backgroundPosition: 'bottom',
                            backgroundSize: '6px 1px',
                            backgroundRepeat: 'repeat-x'
                        }}></div>
                        <span className={`font-bold whitespace-nowrap text-right ${item.color} tracking-tight`}>
                            {item.value}
                        </span>
                    </div>
                );
            })}
         </div>
      </div>

      {/* List */}
      <div className="flex flex-col bg-white min-h-[400px]">
        {filteredData.length > 0 ? (
            filteredData.map((deal) => (
            <HistoryItem key={deal.id} deal={deal} />
            ))
        ) : (
            <div className="flex flex-col items-center justify-start pt-12">
                <img 
                    src="/gecmisyok.jpg" 
                    alt="İşlem bulunamadı" 
                    className="w-full max-w-[300px] object-contain opacity-90" 
                />
            </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
