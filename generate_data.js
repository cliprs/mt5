
const fs = require('fs');

try {
    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function formatDate(date) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        return `${yyyy}.${mm}.${dd} ${hh}:${min}:${ss}`;
    }

    const trades = [];
    const numTrades = 75;
    const targetTotalProfit = 350;
    let currentTotalProfit = 0;

    // Generate 75 trades
    for (let i = 0; i < numTrades; i++) {
        const isBuy = Math.random() > 0.5;
        const type = isBuy ? 'buy' : 'sell';
        const volume = 0.01;
        
        // Price between 3850 and 3950
        const openPrice = parseFloat(randomRange(3850, 3950).toFixed(2));
        
        // Profit between 2.00 and 8.00
        let profit = parseFloat(randomRange(2.00, 8.00).toFixed(2));
        
        let closePrice;
        if (type === 'buy') {
            closePrice = openPrice + profit;
        } else {
            closePrice = openPrice - profit;
        }
        closePrice = parseFloat(closePrice.toFixed(2));
        
        // Date generation
        // October has 31 days
        const day = randomInt(1, 31);
        const hour = randomInt(0, 23);
        const minute = randomInt(0, 59);
        const second = randomInt(0, 59);
        
        const closeTimeDate = new Date(2025, 9, day, hour, minute, second); // Month is 0-indexed (9 = Oct)
        
        // Open time 5 mins to 4 hours before
        const durationMs = randomInt(5 * 60 * 1000, 4 * 60 * 60 * 1000);
        const openTimeDate = new Date(closeTimeDate.getTime() - durationMs);

        trades.push({
            type: type,
            volume: volume,
            symbol: 'XAUUSD',
            openPrice: openPrice,
            closePrice: closePrice,
            openTimeDate: openTimeDate,
            closeTimeDate: closeTimeDate,
            profit: profit,
            sl: 0,
            tp: 0,
            commission: 0,
            swap: 0
        });
        
        currentTotalProfit += profit;
    }

    const scaleFactor = targetTotalProfit / currentTotalProfit;
    trades.forEach(t => {
        t.profit = parseFloat((t.profit * scaleFactor).toFixed(2));
    });

    trades.forEach(t => {
         if (t.profit < 2.00) t.profit = 2.00;
         if (t.profit > 8.00) t.profit = 8.00;
         // Recalculate Close Price
         if (t.type === 'buy') {
             t.closePrice = parseFloat((t.openPrice + t.profit).toFixed(2));
         } else {
             t.closePrice = parseFloat((t.openPrice - t.profit).toFixed(2));
         }
    });


    // Add Withdrawal
    const withdrawalDate = new Date(2025, 9, 24, 10, 5, 42);
    trades.push({
        type: 'balance',
        volume: 0,
        symbol: '',
        openPrice: 0,
        closePrice: 0,
        openTimeDate: withdrawalDate,
        closeTimeDate: withdrawalDate,
        profit: -150,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0
    });

    // Sort by close time
    trades.sort((a, b) => a.closeTimeDate - b.closeTimeDate);

    // Assign IDs
    let startId = 514343326;
    const finalTrades = trades.map(t => {
        let deal = {
            id: (startId++).toString(),
            symbol: t.symbol,
            type: t.type,
            volume: t.volume,
            openTime: formatDate(t.openTimeDate),
            closeTime: formatDate(t.closeTimeDate),
            openPrice: t.openPrice,
            closePrice: t.closePrice,
            sl: t.sl,
            tp: t.tp,
            commission: t.commission,
            swap: t.swap,
            profit: t.profit
        };
        
        if (t.type === 'balance') {
            deal.symbol = '';
            deal.openPrice = 0;
            deal.closePrice = 0;
            deal.openTime = deal.closeTime;
        }
        
        return deal;
    });

    console.log(JSON.stringify(finalTrades, null, 2));

} catch (error) {
    console.error(error);
}
