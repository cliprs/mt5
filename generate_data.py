
import json
import random
from datetime import datetime, timedelta

def random_range(min_val, max_val):
    return random.uniform(min_val, max_val)

def random_int(min_val, max_val):
    return random.randint(min_val, max_val)

def format_date(dt):
    return dt.strftime('%Y.%m.%d %H:%M:%S')

trades = []
num_trades = 75
target_total_profit = 350.0
current_total_profit = 0.0

# Generate 75 trades
for i in range(num_trades):
    is_buy = random.choice([True, False])
    deal_type = 'buy' if is_buy else 'sell'
    volume = 0.01
    
    # Price between 3850 and 3950
    open_price = round(random_range(3850.0, 3950.0), 2)
    
    # Profit between 2.00 and 8.00
    profit = round(random_range(2.00, 8.00), 2)
    
    close_price = 0.0
    if deal_type == 'buy':
        close_price = round(open_price + profit, 2)
    else:
        close_price = round(open_price - profit, 2)
    
    # Date generation
    day = random_int(1, 31)
    hour = random_int(0, 23)
    minute = random_int(0, 59)
    second = random_int(0, 59)
    
    close_time_date = datetime(2025, 10, day, hour, minute, second)
    
    # Open time 5 mins to 4 hours before
    duration_minutes = random_int(5, 240)
    open_time_date = close_time_date - timedelta(minutes=duration_minutes)

    trades.append({
        'type': deal_type,
        'volume': volume,
        'symbol': 'XAUUSD',
        'openPrice': open_price,
        'closePrice': close_price,
        'openTimeDate': open_time_date,
        'closeTimeDate': close_time_date,
        'profit': profit,
        'sl': 0,
        'tp': 0,
        'commission': 0,
        'swap': 0
    })
    
    current_total_profit += profit

# Adjust profits to meet target ~350
if current_total_profit != 0:
    scale_factor = target_total_profit / current_total_profit
else:
    scale_factor = 1.0

for t in trades:
    new_profit = round(t['profit'] * scale_factor, 2)
    # Ensure range 2.00 - 8.00
    if new_profit < 2.00:
        new_profit = 2.00
    elif new_profit > 8.00:
        new_profit = 8.00
    
    t['profit'] = new_profit
    
    # Recalculate Close Price
    if t['type'] == 'buy':
        t['closePrice'] = round(t['openPrice'] + t['profit'], 2)
    else:
        t['closePrice'] = round(t['openPrice'] - t['profit'], 2)

# Add Withdrawal
withdrawal_date = datetime(2025, 10, 24, 10, 5, 42)
trades.append({
    'type': 'balance',
    'volume': 0,
    'symbol': '',
    'openPrice': 0,
    'closePrice': 0,
    'openTimeDate': withdrawal_date,
    'closeTimeDate': withdrawal_date,
    'profit': -150.0,
    'sl': 0,
    'tp': 0,
    'commission': 0,
    'swap': 0
})

# Sort by close time
trades.sort(key=lambda x: x['closeTimeDate'])

# Assign IDs
start_id = 514343326
final_trades = []

for t in trades:
    deal = {
        'id': str(start_id),
        'symbol': t['symbol'],
        'type': t['type'],
        'volume': t['volume'],
        'openTime': format_date(t['openTimeDate']),
        'closeTime': format_date(t['closeTimeDate']),
        'openPrice': t['openPrice'],
        'closePrice': t['closePrice'],
        'sl': t['sl'],
        'tp': t['tp'],
        'commission': t['commission'],
        'swap': t['swap'],
        'profit': t['profit']
    }
    
    if t['type'] == 'balance':
        deal['symbol'] = ''
        deal['openPrice'] = 0
        deal['closePrice'] = 0
        deal['openTime'] = deal['closeTime']
        
    final_trades.append(deal)
    start_id += 1

with open('result.json', 'w') as f:
    json.dump(final_trades, f, indent=2)

print("Done")
