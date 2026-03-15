import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward, IoPencil } from 'react-icons/io5';

interface CustomCalendarProps {
  onClose: () => void;
  onConfirm: (start: string, end: string) => void;
  initialStart: string;
  initialEnd: string;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onClose, onConfirm, initialStart, initialEnd }) => {
  const [startDate, setStartDate] = useState(new Date(initialStart));
  const [endDate, setEndDate] = useState(new Date(initialEnd));
  const [viewDate, setViewDate] = useState(new Date(2026, 0, 1)); 
  const [showYearPicker, setShowYearPicker] = useState(false);

  const months = [
    'OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN',
    'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'
  ];

  // Year range from 1900 to 2100
  const years = Array.from({ length: 201 }, (_, i) => 1900 + i); 

  const daysOfWeek = ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust so Monday is 0, Sunday is 6
  };

  const renderDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty cells for days of previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const current = new Date(year, month, day);
      const isStart = current.toDateString() === startDate.toDateString();
      const isEnd = current.toDateString() === endDate.toDateString();
      const isInRange = current > startDate && current < endDate;
      const rangeActive = startDate.toDateString() !== endDate.toDateString();

      days.push(
        <div 
          key={day} 
          onClick={() => handleDateClick(current)}
          className="h-10 w-full flex items-center justify-center cursor-pointer relative"
        >
          {/* Background Layer for continuous range effect - bridging the grid gaps */}
          {rangeActive && (
            <>
              {isStart && <div className="absolute right-0 top-0 bottom-0 left-1/2 bg-[#dbeafe] z-0" />}
              {isEnd && <div className="absolute left-0 top-0 bottom-0 right-1/2 bg-[#dbeafe] z-0" />}
              {isInRange && <div className="absolute inset-0 bg-[#dbeafe] z-0" />}
            </>
          )}

          {/* Date Circle/Text */}
          <div className={`
            z-10 w-10 h-10 flex items-center justify-center text-[11px] font-normal transition-all
            ${isStart || isEnd ? 'bg-[#3b82f6] rounded-full text-white' : 'text-gray-700'}
            ${isInRange ? 'text-gray-800' : ''}
          `}>
            {day}
          </div>
        </div>
      );
    }

    return days;
  };

  const handleYearClick = (year: number) => {
    setViewDate(new Date(year, viewDate.getMonth(), 1));
    setShowYearPicker(false);
  };

  const handleDateClick = (date: Date) => {
    if (date < startDate || (startDate.toDateString() !== endDate.toDateString())) {
        setStartDate(date);
        setEndDate(date); 
    } else {
        if (date < startDate) {
            setEndDate(startDate);
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    }
  };

  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));

  return (
    <div className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center p-4">
      <div className={`bg-[#eef4ff] rounded-xl w-full max-w-[350px] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col ${showYearPicker ? 'h-[90vh]' : ''}`}>
        
        {/* Top Bar with Edit Icon */}
        <div className="flex justify-end p-4 shrink-0">
          <IoPencil className="text-[#3b82f6] text-xl cursor-pointer" />
        </div>

        {/* Month/Year Selector */}
        <div className="px-6 flex items-center justify-between mb-4 relative shrink-0">
          <div 
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setShowYearPicker(!showYearPicker)}
          >
            <span className="text-xs font-bold text-gray-600 tracking-widest uppercase">
              {months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <svg className={`w-4 h-4 text-gray-600 fill-current transition-transform ${showYearPicker ? 'rotate-180' : ''}`} viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>

          {!showYearPicker && (
            <div className="flex gap-6">
                <IoChevronBack className="text-gray-600 text-xl cursor-pointer" onClick={prevMonth} />
                <IoChevronForward className="text-gray-600 text-xl cursor-pointer" onClick={nextMonth} />
            </div>
          )}
        </div>

        {/* Calendar Content (Days or Years) */}
        <div className={`px-4 pb-4 flex-1 overflow-hidden flex flex-col ${!showYearPicker ? 'min-h-[300px]' : ''}`}>
          {showYearPicker ? (
            /* Year Grid (3 columns) */
            <div 
                className="grid grid-cols-3 gap-y-4 overflow-y-auto pt-2 no-scrollbar flex-1"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {years.map(y => (
                    <div 
                        key={y}
                        onClick={() => handleYearClick(y)}
                        className="flex justify-center items-center"
                    >
                        <div className={`
                            px-4 py-1.5 text-xs font-bold transition-all cursor-pointer
                            ${viewDate.getFullYear() === y 
                                ? 'bg-[#3b82f6] text-white rounded-full' 
                                : 'text-gray-600 hover:text-gray-900'}
                        `}>
                            {y}
                        </div>
                    </div>
                ))}
            </div>
          ) : (
            /* Days Grid */
            <>
                <div className="grid grid-cols-7 mb-2">
                    {daysOfWeek.map((d, i) => (
                    <div key={i} className="h-10 w-10 flex items-center justify-center text-[13px] font-medium text-gray-500">
                        {d}
                    </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {renderDays()}
                </div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-8 p-6 pt-2 shrink-0">
          <button 
            onClick={onClose}
            className="text-[13px] font-bold text-[#3b82f6] tracking-wider"
          >
            İPTAL
          </button>
          <button 
            onClick={() => onConfirm(startDate.toISOString().split('T')[0], endDate.toISOString().split('T')[0])}
            className="text-[13px] font-bold text-[#3b82f6] tracking-wider"
          >
            TAMAM
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
