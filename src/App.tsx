import { useState, useEffect } from 'react';
import Header from './components/Header';
import QuoteList from './components/QuoteList';
import HistoryPage from './components/HistoryPage';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import AccountManager from './components/AccountManager';
import CustomCalendar from './components/CustomCalendar';
import TradePage from './components/TradePage';
import ChartPage from './components/ChartPage';

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'quotes';
  });
  const [selectedPeriod, setSelectedPeriod] = useState(() => {
    return localStorage.getItem('selectedPeriod') || 'Bugün';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAccountManagerOpen, setIsAccountManagerOpen] = useState(false);
  
  // Custom Date States
  const [customDates, setCustomDates] = useState(() => {
    const saved = localStorage.getItem('customDates');
    if (saved) return JSON.parse(saved);
    const now = new Date(2026, 1, 14);
    const start = new Date(2026, 0, 1); // Start at Jan 1st 2026 as per image
    return {
        start: start.toISOString().split('T')[0],
        end: now.toISOString().split('T')[0]
    };
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('selectedPeriod', selectedPeriod);
  }, [selectedPeriod]);

  useEffect(() => {
    localStorage.setItem('customDates', JSON.stringify(customDates));
  }, [customDates]);

  // Handle Period Change
  const handlePeriodChange = (period: string) => {
    if (period === 'Özel dönem') {
        setShowDatePicker(true);
    } else {
        setSelectedPeriod(period);
    }
  };

  // Handle Custom Date Confirmation
  const handleCustomDateConfirm = (start: string, end: string) => {
    setCustomDates({ start, end });
    setSelectedPeriod('Özel dönem');
    setShowDatePicker(false);
  };

  // Dynamic Header Title
  const getTitle = () => {
    switch(activeTab) {
        case 'quotes': return 'Fiyatlar';
        case 'history': return 'Geçmiş';
        case 'charts': return 'Grafik';
        case 'trade': return 'İşlem';
        case 'messages': return 'Mesajlar';
        default: return 'Fiyatlar';
    }
  };

  return (
    <div className="min-h-screen bg-mt5-bg text-black font-sans">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onManageAccounts={() => setIsAccountManagerOpen(true)}
      />
      
      <Header 
        title={getTitle()} 
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
        onMenuClick={() => setIsSidebarOpen(true)}
      /> 

      <main className="pt-0"> 
        {activeTab === 'quotes' && <QuoteList />}
        {activeTab === 'history' && (
            <HistoryPage 
                selectedPeriod={selectedPeriod} 
                customStartDate={customDates.start}
                customEndDate={customDates.end}
            />
        )}
        {activeTab === 'charts' && <ChartPage />}
        {activeTab === 'trade' && <TradePage />}
        {activeTab === 'messages' && <div className="flex justify-center items-center h-[calc(100vh-120px)] text-gray-500 font-condensed">Mesajlar Alanı</div>}
      </main>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Custom Date Range Picker Component */}
      {showDatePicker && (
        <CustomCalendar 
            initialStart={customDates.start}
            initialEnd={customDates.end}
            onClose={() => setShowDatePicker(false)}
            onConfirm={handleCustomDateConfirm}
        />
      )}

      <AccountManager
        isOpen={isAccountManagerOpen}
        onClose={() => setIsAccountManagerOpen(false)}
      />
    </div>
  );
}

export default App;