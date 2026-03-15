import React, { useState, useEffect, useRef } from 'react';
import { IoMenu, IoAddOutline } from 'react-icons/io5';

interface HeaderProps {
    title: string;
    selectedPeriod?: string;
    onPeriodChange?: (period: string) => void;
    onMenuClick?: () => void;
}

// Helper to format date as DD.MM.YYYY
const formatDate = (date: Date): string => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
};

const Header: React.FC<HeaderProps> = ({ title, selectedPeriod = 'Bugün', onPeriodChange, onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Click outside handler to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // ... Date calculations ...
  const today = new Date();
  
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);
  
  const lastMonth = new Date();
  lastMonth.setMonth(today.getMonth() - 1);
  
  const last3Months = new Date();
  last3Months.setMonth(today.getMonth() - 3);

  const menuItems = [
    { 
        iconPath: '/bugun.svg', 
        label: 'Bugün', 
        dateText: formatDate(today) 
    },
    { 
        iconPath: '/sonhafta.svg', 
        label: 'Son hafta', 
        dateText: `${formatDate(lastWeek)} - ${formatDate(today)}` 
    },
    { 
        iconPath: '/sonay.svg', 
        label: 'Son ay', 
        dateText: `${formatDate(lastMonth)} - ${formatDate(today)}` 
    },
    { 
        iconPath: '/son3ay.svg', 
        label: 'Son 3 ay', 
        dateText: `${formatDate(last3Months)} - ${formatDate(today)}` 
    },
    { 
        iconPath: '/ozeldonem.svg', 
        label: 'Özel dönem', 
        dateText: '' 
    },
  ];

  // Find selected icon path. If not found, fallback to 'Bugün' or default image.
  // Actually, request says "hangi menü seçildiyse sağ köşede o menü ikonu kalacak".
  // So we use the icon of the currently selected period.
  const selectedItem = menuItems.find(item => item.label === selectedPeriod);
  const currentIconPath = selectedItem ? selectedItem.iconPath : '/bugun.svg'; 

  return (
    <header className="bg-white text-black px-4 flex justify-between items-center sticky top-0 z-50 h-[56px]">
        <div className="flex items-center gap-4">
             <IoMenu size={24} className="text-black cursor-pointer" onClick={onMenuClick} />
             <div className="flex flex-col">
                <h1 className="text-[15px] font-medium font-condensed tracking-tighter leading-tight">{title}</h1>
                {title === 'Geçmiş' && (
                    <span className="text-[16px] text-gray-400 font-normal font-condensed tracking-tighter leading-tight">Tüm semboller</span>
                )}
             </div>
        </div>
      <div className="flex gap-7 text-black items-center">
        {title === 'Fiyatlar' && (
            <>
                <IoAddOutline size={32} className="text-gray-600" />
                <img src="/kalem.svg" alt="Edit" className="w-5 h-5 object-contain opacity-60 brightness-50" />
            </>
        )}
        {title === 'Grafik' && (
            <>
                <div className="flex items-center gap-5">
                    {/* Crosshair */}
                    <div className="w-6 h-6 flex items-center justify-center opacity-80">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z"/>
                        </svg>
                    </div>
                    {/* Indicator f */}
                    <span className="font-serif italic font-bold text-black text-xl leading-none">f</span>
                    {/* Shapes */}
                    <div className="w-6 h-6 flex items-center justify-center opacity-80">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                        </svg>
                    </div>
                    {/* Clock/Periods */}
                    <div className="w-6 h-6 flex items-center justify-center opacity-80">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                    </div>
                    {/* New Order */}
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-mt5-blue rounded-sm">
                        <div className="w-3 h-3 flex items-center justify-center">
                             <svg viewBox="0 0 24 24" className="w-full h-full fill-mt5-blue">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                             </svg>
                        </div>
                    </div>
                </div>
            </>
        )}
        {(title === 'Geçmiş' || title === 'İşlem') && (
            <>
                <img 
                    src={title === 'İşlem' ? "/yatircek.svg" : "/sembol.svg"} 
                    alt="Symbol" 
                    className="w-5 h-5 object-contain opacity-80 brightness-50" 
                />
                <img src="/oklar2.svg" alt="Order" className="w-5 h-5 object-contain opacity-80 brightness-50" />
                <div className="relative" ref={menuRef}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center justify-center focus:outline-none">
                        <img src={currentIconPath} alt="Calendar" className="w-5 h-5 object-contain opacity-80 brightness-50" />
                    </button>
                    
                    {isMenuOpen && (
                    <div className="absolute right-[-10px] top-[-10px] w-48 bg-[#f7f7f7] shadow-xl rounded-sm border border-gray-300 py-0 z-[60] overflow-hidden">
                        {menuItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`relative flex items-center gap-3 px-3 py-2.5 hover:bg-gray-100 cursor-pointer transition-colors ${index !== menuItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                                onClick={() => {
                                    if(onPeriodChange) onPeriodChange(item.label);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <img src={item.iconPath} alt={item.label} className="w-5 h-5 object-contain shrink-0" />
                                <div className="flex flex-col overflow-hidden pr-6">
                                    <span className="text-[14px] font-normal text-black leading-tight truncate font-condensed tracking-tighter">{item.label}</span>
                                    {item.dateText && (
                                        <span className="text-[11px] text-gray-400 leading-tight tracking-tight truncate font-condensed tracking-tighter">{item.dateText}</span>
                                    )}
                                </div>
                                {selectedPeriod === item.label && (
                                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                         </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </>
        )}
      </div>
    </header>
  );
};

export default Header;