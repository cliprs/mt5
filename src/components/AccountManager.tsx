import React, { useEffect, useMemo, useState } from 'react';
import { useAccounts } from '../context/AccountsContext';
import { IoTrashOutline } from 'react-icons/io5';

interface AccountManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

type EntryType = 'trade' | 'deposit' | 'withdraw';
type TradeSide = 'buy' | 'sell';

const sanitizePositive = (value: string) => value.replace(/-/g, '');
const sanitizeDigits = (value: string) => value.replace(/[^0-9]/g, '');

const padTimePart = (value: string) => value.padStart(2, '0');

const toDateTimeLocal = (value: string) => {
  if (!value) return '';
  const [datePart, timePart = ''] = value.split(' ');
  const [year = '0000', month = '00', day = '00'] = (datePart?.split('.') ?? []);
  const [hour = '00', minute = '00'] = (timePart ? timePart.split(':') : []);
  if (year === '0000' || year === '') return '';
  return `${year}-${padTimePart(month)}-${padTimePart(day)}T${padTimePart(hour)}:${padTimePart(minute)}`;
};

const fromDateTimeLocal = (value: string) => {
  if (!value) return '';
  const [datePart, timePart = ''] = value.split('T');
  if (!datePart) return '';
  const [year = '0000', month = '00', day = '00'] = datePart.split('-');
  const [hour = '00', minute = '00'] = (timePart ? timePart.split(':') : []);
  return `${year}.${padTimePart(month)}.${padTimePart(day)} ${padTimePart(hour)}:${padTimePart(minute)}:00`;
};

const createTradeFormState = () => ({
  symbol: 'XAUUSD',
  side: 'sell' as TradeSide,
  volume: '',
  openTime: '',
  closeTime: '',
  openPrice: '',
  closePrice: '',
});

const createBalanceFormState = () => ({
  timestamp: '',
  amount: '',
});

const AccountManager: React.FC<AccountManagerProps> = ({ isOpen, onClose }) => {
  const {
    accounts,
    selectedAccountId,
    selectedAccount,
    selectAccount,
    addEntry,
    removeEntry,
    updateAccountDetails
  } = useAccounts();

  const [entryType, setEntryType] = useState<EntryType>('trade');
  const [statusMessage, setStatusMessage] = useState('');
  const [tradeForm, setTradeForm] = useState(() => createTradeFormState());
  const [balanceForm, setBalanceForm] = useState(() => createBalanceFormState());
  const [accountForm, setAccountForm] = useState({
    name: '',
    accountNo: '',
    server: '',
  });

  const [ticketToDelete, setTicketToDelete] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    setStatusMessage('');
    setTradeForm(createTradeFormState());
    setBalanceForm(createBalanceFormState());
    setTicketToDelete('');
    if (selectedAccount) {
      setAccountForm({
        name: selectedAccount.name,
        accountNo: selectedAccount.accountNo,
        server: selectedAccount.server,
      });
    }
  }, [isOpen, selectedAccountId, selectedAccount]);

  const accountDetailsDirty = useMemo(() => {
    if (!selectedAccount) return false;
    return (
      accountForm.name !== selectedAccount.name ||
      accountForm.accountNo !== selectedAccount.accountNo ||
      accountForm.server !== selectedAccount.server
    );
  }, [accountForm, selectedAccount]);

  const canSaveAccountDetails = useMemo(() => {
    if (!selectedAccountId) return false;
    return (
      accountDetailsDirty &&
      accountForm.name.trim().length > 0 &&
      accountForm.accountNo.trim().length > 0 &&
      accountForm.server.trim().length > 0
    );
  }, [accountDetailsDirty, accountForm, selectedAccountId]);

  const handleAccountFieldChange = (field: 'name' | 'accountNo' | 'server', value: string) => {
    setAccountForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAccountDetailsSave = () => {
    if (!selectedAccountId || !canSaveAccountDetails) return;
    updateAccountDetails(selectedAccountId, {
      name: accountForm.name.trim(),
      accountNo: accountForm.accountNo.trim(),
      server: accountForm.server.trim(),
    });
    setStatusMessage('Hesap bilgileri güncellendi.');
  };

  const handleDeleteTicket = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId) return;
    const ticket = ticketToDelete.trim();
    if (!ticket) return;
    
    const removed = removeEntry(selectedAccountId, ticket);
    if (removed) {
      setStatusMessage(`İşlem ${ticket} başarıyla silindi.`);
      setTicketToDelete('');
    } else {
      setStatusMessage(`İşlem ${ticket} bulunamadı.`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId) return;

    try {
      if (entryType === 'trade') {
        if (!tradeForm.volume || !tradeForm.openTime || !tradeForm.closeTime) {
            setStatusMessage('Lütfen Lot ve Zaman alanlarını doldurun.');
            return;
        }
        addEntry(selectedAccountId, {
          kind: 'trade',
          symbol: tradeForm.symbol || 'XAUUSD',
          side: tradeForm.side,
          volume: Number(tradeForm.volume || '0'),
          openTime: tradeForm.openTime || '',
          closeTime: tradeForm.closeTime || '',
          openPrice: Number(tradeForm.openPrice || '0'),
          closePrice: Number(tradeForm.closePrice || '0'),
        });
        setStatusMessage('İşlem başarıyla eklendi.');
      } else {
        if (!balanceForm.amount || !balanceForm.timestamp) {
            setStatusMessage('Lütfen Tutar ve Zaman alanlarını doldurun.');
            return;
        }
        addEntry(selectedAccountId, {
          kind: entryType,
          amount: Number(balanceForm.amount || '0'),
          timestamp: balanceForm.timestamp || '',
        });
        setStatusMessage(entryType === 'deposit' ? 'Deposit eklendi.' : 'Withdrawal eklendi.');
      }
      setTradeForm(createTradeFormState());
      setBalanceForm(createBalanceFormState());
    } catch (error) {
      setStatusMessage('Hata oluştu.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-[130] w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-black">Yönetim Paneli</h2>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Bulut Senkronizasyonu Aktif</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Sol Kolon */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Aktif Hesaplar</h3>
                <div className="flex flex-col gap-2">
                  {accounts.map((account) => (
                    <button
                      key={account.id}
                      onClick={() => selectAccount(account.id)}
                      className={`text-left p-3 rounded-2xl border-2 transition-all ${
                        account.id === selectedAccountId ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'
                      }`}
                    >
                      <div className="text-[14px] font-bold text-black">{account.name}</div>
                      <div className="text-[11px] text-gray-500 font-medium">{account.accountNo} • {account.server}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Hesap Bilgilerini Düzenle</h3>
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={accountForm.name} onChange={(e) => handleAccountFieldChange('name', e.target.value.toUpperCase())} placeholder="İSİM SOYİSİM" />
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={accountForm.accountNo} onChange={(e) => handleAccountFieldChange('accountNo', sanitizeDigits(e.target.value))} placeholder="HESAP NUMARASI" />
                <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={accountForm.server} onChange={(e) => handleAccountFieldChange('server', e.target.value)} placeholder="SUNUCU (BROKER)" />
                <button onClick={handleAccountDetailsSave} disabled={!canSaveAccountDetails} className={`w-full py-3 rounded-xl text-[13px] font-black transition-all ${canSaveAccountDetails ? 'bg-black text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>BİLGİLERİ KAYDET</button>
              </div>

              <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                <h3 className="text-[12px] font-bold text-red-800 mb-3 flex items-center gap-2"><IoTrashOutline size={16} /> İŞLEM SİL</h3>
                <form onSubmit={handleDeleteTicket} className="space-y-2">
                  <input className="w-full rounded-xl bg-white border border-red-200 px-4 py-2.5 text-[13px] font-bold outline-none" value={ticketToDelete} onChange={(e) => setTicketToDelete(sanitizeDigits(e.target.value))} placeholder="TICKET NUMARASI" />
                  <button type="submit" disabled={!ticketToDelete} className={`w-full py-2.5 rounded-xl text-[11px] font-black transition-all ${ticketToDelete ? 'bg-red-600 text-white shadow-md' : 'bg-gray-200 text-gray-400'}`}>İŞLEMİ KALICI OLARAK SİL</button>
                </form>
              </div>
            </div>

            {/* Sağ Kolon */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-tight">Yeni İşlem Ekle</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  {(['trade', 'deposit', 'withdraw'] as const).map((type) => (
                    <button key={type} type="button" onClick={() => setEntryType(type)} className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition-all ${entryType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>{type.toUpperCase()}</button>
                  ))}
                </div>

                {entryType === 'trade' ? (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none"
                        value={tradeForm.symbol}
                        onChange={(e) => setTradeForm({ ...tradeForm, symbol: e.target.value.toUpperCase() })}
                        placeholder="XAUUSD"
                      />
                      <input 
                        className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" 
                        value={tradeForm.volume} 
                        onChange={(e) => setTradeForm({...tradeForm, volume: sanitizePositive(e.target.value)})} 
                        placeholder="LOT" 
                      />
                    </div>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setTradeForm({...tradeForm, side: 'buy'})} className={`flex-1 py-2 rounded-xl text-[12px] font-black border-2 ${tradeForm.side === 'buy' ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-100 text-gray-400'}`}>BUY</button>
                      <button type="button" onClick={() => setTradeForm({...tradeForm, side: 'sell'})} className={`flex-1 py-2 rounded-xl text-[12px] font-black border-2 ${tradeForm.side === 'sell' ? 'bg-red-600 border-red-600 text-white' : 'border-gray-100 text-gray-400'}`}>SELL</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">Açılış Fiyatı</span>
                        <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={tradeForm.openPrice} onChange={(e) => setTradeForm({...tradeForm, openPrice: sanitizePositive(e.target.value)})} placeholder="0.00" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase">Kapanış Fiyatı</span>
                        <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={tradeForm.closePrice} onChange={(e) => setTradeForm({...tradeForm, closePrice: sanitizePositive(e.target.value)})} placeholder="0.00" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 ml-2">AÇILIŞ ZAMANI</span>
                      <input type="datetime-local" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold outline-none" value={toDateTimeLocal(tradeForm.openTime)} onChange={(e) => setTradeForm({...tradeForm, openTime: fromDateTimeLocal(e.target.value)})} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 ml-2">KAPANIŞ ZAMANI</span>
                      <input type="datetime-local" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold outline-none" value={toDateTimeLocal(tradeForm.closeTime)} onChange={(e) => setTradeForm({...tradeForm, closeTime: fromDateTimeLocal(e.target.value)})} />
                    </div>
                  </>
                ) : (
                  <>
                    <input className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[13px] font-bold outline-none" value={balanceForm.amount} onChange={(e) => setBalanceForm({...balanceForm, amount: sanitizePositive(e.target.value)})} placeholder="TUTAR ($)" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 ml-2">İŞLEM ZAMANI</span>
                      <input type="datetime-local" className="w-full rounded-xl bg-gray-100 border-none px-4 py-3 text-[12px] font-bold outline-none" value={toDateTimeLocal(balanceForm.timestamp)} onChange={(e) => setBalanceForm({...balanceForm, timestamp: fromDateTimeLocal(e.target.value)})} />
                    </div>
                  </>
                )}

                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl text-[14px] font-black shadow-lg shadow-blue-200 active:scale-95 transition-all uppercase tracking-tighter">EKLE VE KAYDET</button>
              </form>
            </div>
          </div>
        </div>

        {statusMessage && (
          <div className="bg-blue-600 text-white px-6 py-2 text-center text-[12px] font-bold animate-pulse">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountManager;
