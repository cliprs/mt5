import React, { useMemo } from 'react';

const ChartPage: React.FC = () => {
  const data = useMemo(() => {
    const result = [];
    const totalPoints = 30; // Fewer points for bigger candles
    let currentPrice = 5032.00;

    for (let i = 0; i < totalPoints; i++) {
      const open = currentPrice;
      let volatility = 1.5 + Math.random() * 2;
      let change = 0;

      if (i < 15) {
        change = (Math.random() * volatility - volatility / 2);
      } else {
        change = (Math.random() * volatility * 0.8 + 0.5);
      }

      const close = open + change;
      const high = Math.max(open, close) + Math.random() * 1.5;
      const low = Math.min(open, close) - Math.random() * 1.5;
      
      result.push({
        open, close, high, low,
        volume: Math.floor(Math.random() * 400) + 100,
        isUp: close >= open
      });
      currentPrice = close;
    }
    return result;
  }, []);

  const maxPrice = Math.max(...data.map(d => d.high)) + 0.5;
  const minPrice = Math.min(...data.map(d => d.low)) - 0.5;
  const range = maxPrice - minPrice;

  const getY = (price: number) => {
    if (range === 0) return 150;
    return 340 - ((price - minPrice) / range) * 320;
  };

  return (
    <div className="fixed top-[56px] left-0 right-0 bottom-[64px] bg-white text-black overflow-hidden select-none font-sans flex flex-col">
      {/* Main Chart */}
      <div className="relative flex-1 flex overflow-hidden">
        {/* Symbol Info Overlay Inside Chart */}
        <div className="absolute top-2 left-3 z-10 pointer-events-none">
           <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-[#0055b3] font-bold text-[13px]">GOLD</span>
                <span className="text-gray-400 text-[10px]">▼ M1</span>
              </div>
              <span className="text-[9px] text-gray-500">SPOT Gold Ounce vs US Doll...</span>
           </div>
        </div>

        <div className="flex-1 relative">
          <svg className="w-full h-full">
            {/* Horizontal Grid */}
            {[...Array(10)].map((_, i) => (
              <line key={i} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
            ))}
            {/* Vertical Grid */}
            {[...Array(6)].map((_, i) => (
              <line key={i} x1={`${(i + 1) * 16}%`} y1="0" x2={`${(i + 1) * 16}%`} y2="100%" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
            ))}

            {/* Moving Averages */}
            <polyline fill="none" stroke="#2196F3" strokeWidth="1" points={data.map((d, i) => `${(i / data.length) * 100 + 1.5}%,${getY(d.close - 0.5)}`).join(' ')} />
            <polyline fill="none" stroke="#4CAF50" strokeWidth="1" points={data.map((d, i) => `${(i / data.length) * 100 + 1.5}%,${getY(d.close + 0.2)}`).join(' ')} />
            <polyline fill="none" stroke="#F44336" strokeWidth="1" points={data.map((d, i) => `${(i / data.length) * 100 + 1.5}%,${getY(d.close - 1.2)}`).join(' ')} />

            {/* Candlesticks */}
            {data.map((d, i) => {
              const x = (i / data.length) * 94 + 3;
              return (
                <g key={i}>
                  <line x1={`${x}%`} y1={getY(d.high)} x2={`${x}%`} y2={getY(d.low)} stroke="black" strokeWidth="1.2" />
                  <rect 
                    x={`${x - 0.5}%`} y={getY(Math.max(d.open, d.close))} width="1.0%" 
                    height={Math.max(2, Math.abs(getY(d.open) - getY(d.close)))} 
                    fill={d.isUp ? 'white' : '#F44336'} stroke={d.isUp ? '#4CAF50' : '#F44336'} strokeWidth="1.2"
                  />
                </g>
              );
            })}
          </svg>
        </div>
        {/* Y-Axis Prices */}
        <div className="w-14 border-l border-gray-100 flex flex-col justify-between py-2 text-[10px] text-gray-600 bg-white">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-right pr-1">{(maxPrice - (i * range / 7)).toFixed(2)}</span>
          ))}
        </div>
      </div>

      {/* Volumes Panel */}
      <div className="h-24 border-t border-gray-200 flex relative bg-white">
        <div className="absolute top-1 left-2 text-[10px] text-black">Volumes 46</div>
        <div className="flex-1 flex items-end gap-[4px] px-2 pb-1">
          {data.map((d, i) => (
            <div 
              key={i} 
              className={`flex-1 min-w-[2px] ${d.isUp ? 'bg-[#4CAF50]' : 'bg-[#F44336]'}`} 
              style={{ height: `${(d.volume / 554) * 100}%` }}
            />
          ))}
        </div>
        <div className="w-14 border-l border-gray-100 flex flex-col justify-between text-[10px] text-gray-400 p-1">
           <span>554</span>
           <span>0</span>
        </div>
      </div>

      {/* X-Axis Time */}
      <div className="h-8 flex justify-around items-center text-[10px] text-gray-500 border-t border-gray-100 bg-white pb-1">
        <span>13 Feb 23:05</span>
        <span>13 Feb 23:23</span>
        <span>13 Feb 23:41</span>
        <span>13 Feb 23:59</span>
      </div>
    </div>
  );
};

export default ChartPage;
