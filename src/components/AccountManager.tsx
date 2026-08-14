import React, { useEffect, useState } from 'react';
import { useAccounts } from '../context/AccountsContext';
import { IoTrashOutline } from 'react-icons/io5';

const joinDateTime = (parts: { date: string; h: string; m: string; s: string }) => {
  if (!parts.date) return '';
  const [year, month, day] = parts.date.split('-');
  return `${year}.${month}.${day} ${parts.h.padStart(2, '0')}:${parts.m.padStart(2, '0')}:${parts.s.padStart(2, '0')}`;
};

const createTradeFormState = () => ({
  symbol: 'XAUUSD', side: 'sell' as 'buy' | 'sell', volume: '',
  openPrice: '', closePrice: '',
  openDate: '', openH: '', openM: '', openS: '',
  closeDate: '', closeH: '', closeM: '', closeS: '',
});

const createBalanceFormState = () => ({ 
  amount: '', date: '', h: '', m: '', s: ''
});

const sanitizePositive = (value: string) => value.replace(/[^0-9.]/g, '');
const sanitizeDigits = (value: string) => value.replace(/[^0-9]/g, '');

const AccountManager: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { accounts, selectedAccountId, selectedAccount, selectAccount, addEntry, removeEntry, updateAccountDetails } = useAccounts();
  const [entryType, setEntryType] = useState<'trade' | 'deposit' | 'withdraw'>('trade');
  const [statusMessage, setStatusMessage] = useState('');
  const [closeTimeTouched, setCloseTimeTouched] = useState(false);
  
  const [tradeForm, setTradeForm] = useState(createTradeFormState);
  const [balanceForm, setBalanceForm] = useState(createBalanceFormState);
  const [accountForm, setAccountForm] = useState({ name: '', accountNo: '', server: '' });
  const [ticketToDelete, setTicketToDelete] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setStatusMessage('');
    setTradeForm(createTradeFormState());
    setBalanceForm(createBalanceFormState());
    setTicketToDelete('');
    setCloseTimeTouched(false);
    if (selectedAccount) {
      setAccountForm({ name: selectedAccount.name, accountNo: selectedAccount.accountNo, server: selectedAccount.server });
    }
  }, [isOpen, selectedAccountId]);

  const handleTradeChange = (field: keyof typeof tradeForm, value: string) => {
    const isTimePart = ['openDate', 'openH', 'openM', 'openS'].includes(field);
    setTradeForm(prev => {
      const nextState = { ...prev, [field]: value };
      if (isTimePart && !closeTimeTouched) {
        const correspondingCloseField = field.replace('open', 'close') as keyof typeof tradeForm;
        (nextState as any)[correspondingCloseField] = value;
      }
      return nextState;
    });
    if (field.startsWith('close')) setCloseTimeTouched(true);
  };
  
  const handleDeleteTicket = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId || !ticketToDelete) return;
    if (removeEntry(selectedAccountId, ticketToDelete)) {
      setStatusMessage(`İşlem ${ticketToDelete} silindi.`);
      setTicketToDelete('');
    } else {
      setStatusMessage(`İşlem ${ticketToDelete} bulunamadı.`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId) return;
    try {
      if (entryType === 'trade') {
        const openTime = joinDateTime({ date: tradeForm.openDate, h: tradeForm.openH, m: tradeForm.openM, s: tradeForm.openS });
        const closeTime = joinDateTime({ date: tradeForm.closeDate, h: tradeForm.closeH, m: tradeForm.closeM, s: tradeForm.closeS });
        addEntry(selectedAccountId, { 
          kind: 'trade', 
          symbol: tradeForm.symbol,
          side: tradeForm.side,
          volume: Number(tradeForm.volume), 
          openPrice: Number(tradeForm.openPrice), 
          closePrice: Number(tradeForm.closePrice),
          openTime,
          closeTime,
        });
        setStatusMessage('İşlem eklendi.');
      } else {
        const timestamp = joinDateTime({ date: balanceForm.date, h: balanceForm.h, m: balanceForm.m, s: balanceForm.s });
        addEntry(selectedAccountId, { kind: entryType, amount: Number(balanceForm.amount), timestamp });
        setStatusMessage(`${entryType} eklendi.`);
      }
      setTradeForm(createTradeFormState());
      setBalanceForm(createBalanceFormState());
      setCloseTimeTouched(false);
    } catch (e) { setStatusMessage('Hata: Formu kontrol edin.'); }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-[130] w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div><h2 className="text-lg font-bold text-black">Yönetim Paneli</h2><p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Bulut Senkronizasyonu Aktif</p></div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Aktif Hesaplar</h3>
                {accounts.map(acc => (
                  <button key={acc.id} onClick={() => selectAccount(acc.id)} className={`w-full text-left p-3 rounded-2xl border-2 transition-all ${acc.id === selectedAccountId ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
                    <div className="text-[14px] font-bold text-black">{acc.name}</div>
                    <div className="text-[11px] text-gray-500 font-medium">{acc.accountNo} • {acc.server}</div>
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Hesap Bilgilerini Düzenle</h3>
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={accountForm.name} onChange={e => setAccountForm({...accountForm, name: e.target.value.toUpperCase()})} placeholder="İSİM SOYİSİM" />
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={accountForm.accountNo} onChange={e => setAccountForm({...accountForm, accountNo: sanitizeDigits(e.target.value)})} placeholder="HESAP NUMARASI" />
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={accountForm.server} onChange={e => setAccountForm({...accountForm, server: e.target.value})} placeholder="SUNUCU (BROKER)" />
                <button onClick={() => updateAccountDetails(selectedAccountId!, accountForm)} className="w-full py-3 rounded-xl text-[13px] font-black bg-black text-white shadow-lg">BİLGİLERİ KAYDET</button>
              </div>
              <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                <h3 className="text-[12px] font-bold text-red-800 mb-3 flex items-center gap-2"><IoTrashOutline size={16} /> İŞLEM SİL</h3>
                <form onSubmit={handleDeleteTicket} className="space-y-2">
                  <input className="w-full rounded-xl bg-white border border-red-200 px-4 py-2.5 text-[13px] font-bold outline-none" value={ticketToDelete} onChange={e => setTicketToDelete(sanitizeDigits(e.target.value))} placeholder="TICKET NUMARASI" />
                  <button type="submit" disabled={!ticketToDelete} className={`w-full py-2.5 rounded-xl text-[11px] font-black transition-all ${ticketToDelete ? 'bg-red-600 text-white shadow-md' : 'bg-gray-200 text-gray-400'}`}>İŞLEMİ KALICI OLARAK SİL</button>
                </form>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Yeni İşlem Ekle</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  {(['trade', 'deposit', 'withdraw'] as const).map(type => (
                    <button key={type} type="button" onClick={() => setEntryType(type)} className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition-all ${entryType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>{type.toUpperCase()}</button>
                  ))}
                </div>
                {entryType === 'trade' ? (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={tradeForm.symbol} onChange={e => handleTradeChange('symbol', e.target.value.toUpperCase())} placeholder="XAUUSD" />
                      <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={tradeForm.volume} onChange={e => handleTradeChange('volume', sanitizePositive(e.target.value))} placeholder="LOT" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" onClick={() => setTradeForm(prev => ({...prev, side: 'buy'}))} className={`flex-1 py-2 rounded-xl text-[12px] font-black border-2 ${tradeForm.side === 'buy' ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-100 text-gray-400'}`}>BUY</button>
                      <button type="button" onClick={() => setTradeForm(prev => ({...prev, side: 'sell'}))} className={`flex-1 py-2 rounded-xl text-[12px] font-black border-2 ${tradeForm.side === 'sell' ? 'bg-red-600 border-red-600 text-white' : 'border-gray-100 text-gray-400'}`}>SELL</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={tradeForm.openPrice} onChange={e => handleTradeChange('openPrice', sanitizePositive(e.target.value))} placeholder="Açılış Fiyatı" />
                      <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={tradeForm.closePrice} onChange={e => handleTradeChange('closePrice', sanitizePositive(e.target.value))} placeholder="Kapanış Fiyatı" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">Açılış Zamanı</span>
                      <div className="grid grid-cols-4 gap-2 mt-1">
                        <input type="date" className="col-span-4 w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold" value={tradeForm.openDate} onChange={e => handleTradeChange('openDate', e.target.value)} />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.openH} onChange={e => handleTradeChange('openH', e.target.value)} placeholder="SS" max="23" min="0" />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.openM} onChange={e => handleTradeChange('openM', e.target.value)} placeholder="DD" max="59" min="0" />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.openS} onChange={e => handleTradeChange('openS', e.target.value)} placeholder="sn" max="59" min="0" />
                      </div>
                    </div>
                     <div>
                      <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">Kapanış Zamanı</span>
                      <div className="grid grid-cols-4 gap-2 mt-1">
                        <input type="date" className="col-span-4 w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold" value={tradeForm.closeDate} onChange={e => handleTradeChange('closeDate', e.target.value)} />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.closeH} onChange={e => handleTradeChange('closeH', e.target.value)} placeholder="SS" max="23" min="0" />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.closeM} onChange={e => handleTradeChange('closeM', e.target.value)} placeholder="DD" max="59" min="0" />
                        <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={tradeForm.closeS} onChange={e => handleTradeChange('closeS', e.target.value)} placeholder="sn" max="59" min="0" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold" value={balanceForm.amount} onChange={e => setBalanceForm({...balanceForm, amount: sanitizePositive(e.target.value)})} placeholder="TUTAR ($)" />
                    <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">İşlem Zamanı</span>
                    <div className="grid grid-cols-4 gap-2 mt-1">
                      <input type="date" className="col-span-4 w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold" value={balanceForm.date} onChange={e => setBalanceForm({...balanceForm, date: e.target.value})} />
                      <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={balanceForm.h} onChange={e => setBalanceForm({...balanceForm, h: e.target.value})} placeholder="SS" max="23" min="0" />
                      <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={balanceForm.m} onChange={e => setBalanceForm({...balanceForm, m: e.target.value})} placeholder="DD" max="59" min="0" />
                      <input type="number" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold text-center" value={balanceForm.s} onChange={e => setBalanceForm({...balanceForm, s: e.target.value})} placeholder="sn" max="59" min="0" />
                    </div>
                  </>
                )}
                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl text-[14px] font-black uppercase">EKLE VE KAYDET</button>
              </form>
            </div>
          </div>
        </div>
        {statusMessage && <div className="bg-blue-600 text-white px-6 py-2 text-center text-[12px] font-bold animate-pulse">{statusMessage}</div>}
      </div>
    </div>
  );
};

export default AccountManager;
