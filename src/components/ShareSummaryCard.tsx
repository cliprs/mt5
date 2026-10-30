import React, { forwardRef } from 'react';

const formatMoney = (val: number) =>
  val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, ' ');

interface ShareSummaryCardProps {
  accountName: string;
  accountNo: string;
  server: string;
  periodLabel: string;
  summary: {
    profit: number;
    deposit: number;
    withdrawal: number;
    commission: number;
    swap: number;
    balance: number;
  };
}

const ShareSummaryCard = forwardRef<HTMLDivElement, ShareSummaryCardProps>(
  ({ accountName, accountNo, server, periodLabel, summary }, ref) => {
    const rows = [
      { label: 'Kâr', value: formatMoney(summary.profit), color: summary.profit >= 0 ? '#0055b3' : '#e02020' },
      { label: 'Yatırılan', value: formatMoney(summary.deposit), color: '#000000' },
      { label: 'Çekilen', value: formatMoney(-summary.withdrawal), color: '#000000' },
      { label: 'Swap', value: formatMoney(summary.swap), color: '#000000' },
      { label: 'Komisyon', value: formatMoney(-summary.commission), color: '#000000' },
    ];

    return (
      <div
        ref={ref}
        style={{
          width: 420,
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#ffffff',
          padding: 28,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#000000' }}>{accountName}</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{accountNo} — {server}</div>
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{periodLabel}</div>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 16 }}>
          {rows.map((row) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '7px 0',
                fontSize: 14,
              }}
            >
              <span style={{ color: '#4b5563', fontWeight: 600 }}>{row.label}</span>
              <span style={{ color: row.color, fontWeight: 700 }}>{row.value}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: '2px solid #000000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 16, fontWeight: 800, color: '#000000' }}>Bakiye</span>
          <span style={{ fontSize: 18, fontWeight: 900, color: '#000000' }}>{formatMoney(summary.balance)} USD</span>
        </div>
      </div>
    );
  }
);

ShareSummaryCard.displayName = 'ShareSummaryCard';

export default ShareSummaryCard;
