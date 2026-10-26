import { useAccounts } from '../context/AccountsContext';
import { calculateBalance } from '../utils/balance';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const formatBalance = (val: number) =>
  val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const { selectedAccount } = useAccounts();
  const balance = selectedAccount ? calculateBalance(selectedAccount.history) : 0;

  const getTabClass = (tabName: string) =>
    `flex flex-col items-center justify-center gap-1 cursor-pointer flex-1 transition-all ${activeTab === tabName ? 'text-[#0055b3]' : 'text-gray-500'}`;

  const getIconContainerClass = () =>
    'flex items-center justify-center w-16 h-8 rounded-full';

  return (
    <nav className="fixed bottom-0 w-full bg-white flex justify-around items-center px-2 pt-2 pb-[calc(8px+env(safe-area-inset-bottom))] text-[11px] font-bold z-50">
      <div className={getTabClass('quotes')} onClick={() => onTabChange('quotes')}>
        <div className={getIconContainerClass()}>
          <img src="/koklar.svg?v=1.1" alt="Fiyatlar" className={`w-5 h-5 object-contain ${activeTab === 'quotes' ? 'filter-mt5-blue' : 'opacity-70'}`} />
        </div>
        <span className="font-bold">Fiyatlar</span>
      </div>
      <div className={getTabClass('charts')} onClick={() => onTabChange('charts')}>
        <div className={getIconContainerClass()}>
          <img src="/grafikler.svg" alt="Grafik" className={`w-5 h-5 object-contain ${activeTab === 'charts' ? 'filter-mt5-blue' : 'opacity-70'}`} />
        </div>
        <span className="font-bold">Grafik</span>
      </div>
      <div className={getTabClass('trade')} onClick={() => onTabChange('trade')}>
        <div className={getIconContainerClass()}>
          <img src="/islem.svg" alt="İşlem" className={`w-5 h-5 object-contain ${activeTab === 'trade' ? 'filter-mt5-blue' : 'opacity-70'}`} />
        </div>
        <span className="font-bold whitespace-nowrap bg-gray-100 text-gray-700 rounded-full px-2 py-0.5">{formatBalance(balance)}</span>
      </div>
      <div className={getTabClass('history')} onClick={() => onTabChange('history')}>
        <div className={getIconContainerClass()}>
          <img src="/gecmis.svg" alt="Geçmiş" className={`w-6 h-6 object-contain ${activeTab === 'history' ? 'filter-mt5-blue' : 'opacity-70'}`} />
        </div>
        <span className="font-bold">Geçmiş</span>
      </div>
       <div className={getTabClass('messages')} onClick={() => onTabChange('messages')}>
        <div className={getIconContainerClass()}>
          <img src="/mesajlar.svg" alt="Mesajlar" className={`w-6 h-6 object-contain ${activeTab === 'messages' ? 'filter-mt5-blue' : 'opacity-70'}`} />
        </div>
        <span className="font-bold">Mesajlar</span>
      </div>
    </nav>
  );
};

export default BottomNav;
