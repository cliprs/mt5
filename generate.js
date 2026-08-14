const trades = [];
let currentId = 514343326;
const targetProfit = 350;
const tradeCount = 75;

function randomTime(day) {
    const h = String(Math.floor(Math.random() * 8) + 9).padStart(2, '0');
    const m = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const s = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `2025.10.${String(day).padStart(2, '0')} ${h}:${m}:${s}`;
}

const withdrawalDate = '2025.10.24 10:05:42';

for (let i = 0; i < tradeCount; i++) {
    let day = Math.floor(i / 2.4) + 1; // Distribute 75 trades over 31 days
    if (day > 31) day = 31;
    
    const openTime = randomTime(day);
    const closeTime = openTime.replace(/(\d{2}):(\d{2}):(\d{2})$/, (match, h, m, s) => {
        let mm = parseInt(m) + Math.floor(Math.random() * 20) + 10;
        let hh = parseInt(h);
        if (mm >= 60) {
            mm -= 60;
            hh += 1;
        }
        return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${s}`;
    });

    const type = Math.random() > 0.5 ? 'buy' : 'sell';
    const profit = parseFloat((Math.random() * 4 + 2.5).toFixed(2)); // 2.5 to 6.5
    const openPrice = parseFloat((Math.random() * 100 + 3850).toFixed(2));
    const closePrice = type === 'buy' ? parseFloat((openPrice + profit).toFixed(2)) : parseFloat((openPrice - profit).toFixed(2));

    trades.push({
        id: "",
        symbol: 'XAUUSD',
        type: type,
        volume: 0.01,
        openTime: openTime,
        closeTime: closeTime,
        openPrice: openPrice,
        closePrice: closePrice,
        sl: 0,
        tp: 0,
        commission: 0,
        swap: 0,
        profit: profit
    });
}

// Add withdrawal
trades.push({
    id: "",
    symbol: 'Withdrawal',
    type: 'balance',
    volume: 0,
    openTime: withdrawalDate,
    closeTime: withdrawalDate,
    openPrice: 0,
    closePrice: 0,
    sl: 0,
    tp: 0,
    commission: 0,
    swap: 0,
    profit: -150.00
});

trades.sort((a, b) => a.openTime.localeCompare(b.openTime));

let id = 514343326;
trades.forEach(t => t.id = String(id++));

console.log(JSON.stringify(trades, null, 2));
