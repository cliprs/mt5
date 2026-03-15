import React from 'react';

const ChartPage: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white relative overflow-hidden">
      {/* Chart Overlay Info */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-0">
        <div className="flex items-center gap-2">
          <span className="text-[#0055b3] font-bold text-[13px]">XAUUSD</span>
          <span className="text-[#0055b3] text-[13px]">M1</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] text-gray-500 uppercase tracking-tighter leading-none">SPOT XAUUSD Ounce vs US Dollar</span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-gray-400">FxPro</span>
            <span className="text-[10px] text-gray-400">Counter Trend</span>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 relative bg-white border-b border-gray-100">
        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
           <div className="w-full h-full" style={{
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} />
        </div>

        {/* Mock Candles Implementation would go here */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-200 text-xs">Grafik Verisi Simülasyonu</div>
        </div>
      </div>

      {/* Volumes Panel */}
      <div className="h-24 bg-white border-t border-gray-100 p-2">
         <div className="text-[10px] text-gray-400 mb-1">Volumes</div>
         {/* Vol bars */}
         <div className="flex items-end gap-[1px] h-12">
            {[...Array(40)].map((_, i) => (
                <div key={i} className="bg-gray-200 flex-1" style={{ height: `${Math.random() * 100}%` }} />
            ))}
         </div>
      </div>
    </div>
  );
};

export default ChartPage;
