import React, { useEffect, useMemo, useState } from 'react';
import { useAccounts } from '../context/AccountsContext';

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
  symbol: 'GOLD',
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
    updateAccountDetails,
  } = useAccounts();

  const [entryType, setEntryType] = useState<EntryType>('trade');
  const [statusMessage, setStatusMessage] = useState('');
  const [closeTimeTouched, setCloseTimeTouched] = useState(false);
  const [tradeForm, setTradeForm] = useState(() => createTradeFormState());
  const [balanceForm, setBalanceForm] = useState(() => createBalanceFormState());
  const [accountForm, setAccountForm] = useState({
    name: '',
    accountNo: '',
    server: '',
  });

  const [ticketToDelete, setTicketToDelete] = useState('');

  // Initial reset and account change reset
  useEffect(() => {
    if (!isOpen) return;
    setStatusMessage('');
    setCloseTimeTouched(false);
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
  }, [isOpen, selectedAccountId]); // Only reset when opening or switching account ID

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

  const resetEntryForms = () => {
    setCloseTimeTouched(false);
    setTradeForm(createTradeFormState());
    setBalanceForm(createBalanceFormState());
  };

  const handleTradeChange = (field: keyof typeof tradeForm, value: string) => {
    setTradeForm((prev) => {
      const numericFields: (keyof typeof prev)[] = ['volume', 'openPrice', 'closePrice'];
      const sanitizedValue = numericFields.includes(field) ? sanitizePositive(value) : value;
      const nextState = { ...prev, [field]: sanitizedValue };
      if (field === 'openTime' && !closeTimeTouched) {
        nextState.closeTime = sanitizedValue;
      }
      return nextState;
    });
    if (field === 'closeTime') {
      setCloseTimeTouched(true);
    }
  };

  const handleDeleteTicket = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId) {
      setStatusMessage('Lütfen bir hesap seçin.');
      return;
    }
    const ticket = ticketToDelete.trim();
    if (!ticket) {
      setStatusMessage('Silmek için ticket numarası girin.');
      return;
    }
    const removed = removeEntry(selectedAccountId, ticket);
    if (removed) {
      setStatusMessage(`Ticket ${ticket} silindi.`);
      setTicketToDelete('');
    } else {
      setStatusMessage(`Ticket ${ticket} bulunamadı.`);
    }
  };

  const handleBalanceChange = (field: keyof typeof balanceForm, value: string) => {
    setBalanceForm((prev) => ({
      ...prev,
      [field]: field === 'amount' ? sanitizePositive(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedAccountId) return;

    try {
      if (entryType === 'trade') {
        if (!tradeForm.volume || !tradeForm.openTime || !tradeForm.closeTime) {
            setStatusMessage('Lütfen tüm zorunlu alanları (Lot, Zaman) doldurun.');
            return;
        }
        addEntry(selectedAccountId, {
          kind: 'trade',
          symbol: tradeForm.symbol || 'GOLD',
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
      resetEntryForms();
    } catch (error) {
      console.error(error);
      setStatusMessage('Kayıt eklenirken bir hata oluştu.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-[130] w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Hesap Yönetimi</h2>
            <p className="text-sm text-gray-500">Hesap seçin, düzenleyin ve yeni işlem / para hareketi ekleyin.</p>
          </div>
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-black">
            Kapat
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Hesaplar</h3>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {accounts.map((account) => (
                  <button
                    key={account.id}
                    type="button"
                    onClick={() => selectAccount(account.id)}
                    className={`w-full text-left border rounded-lg p-2 transition ${
                      account.id === selectedAccountId ? 'border-mt5-blue bg-mt5-blue/5' : 'border-gray-200'
                    }`}
                  >
                    <div className="text-sm font-semibold text-black">{account.name}</div>
                    <div className="text-xs text-gray-500">{account.accountNo} • {account.server}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Hesap Bilgileri</h3>
              {selectedAccount ? (
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-gray-500">
                    Hesap Adı
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={accountForm.name}
                      onChange={(event) => handleAccountFieldChange('name', event.target.value.toUpperCase())}
                      placeholder="İsim Soyisim"
                    />
                  </label>
                  <label className="block text-xs font-semibold text-gray-500">
                    Hesap Numarası
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={accountForm.accountNo}
                      onChange={(event) => handleAccountFieldChange('accountNo', sanitizePositive(event.target.value))}
                      placeholder="000000000"
                    />
                  </label>
                  <label className="block text-xs font-semibold text-gray-500">
                    Sunucu
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={accountForm.server}
                      onChange={(event) => handleAccountFieldChange('server', event.target.value)}
                      placeholder="Broker-MT5"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleAccountDetailsSave}
                    disabled={!canSaveAccountDetails}
                    className={`w-full rounded-lg py-2 text-sm font-semibold transition ${
                      canSaveAccountDetails ? 'bg-mt5-blue text-white hover:bg-mt5-blue/90' : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    Hesap Bilgilerini Kaydet
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-500">Düzenlemek için bir hesap seçin.</p>
              )}
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">İşlem Sil</h3>
              {selectedAccount ? (
                <form className="space-y-3" onSubmit={handleDeleteTicket}>
                  <label className="block text-xs font-semibold text-gray-500">
                    Ticket Numarası
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={ticketToDelete}
                      onChange={(event) => setTicketToDelete(sanitizeDigits(event.target.value))}
                      placeholder="20250573"
                      inputMode="numeric"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={!ticketToDelete.trim()}
                    className={`w-full rounded-lg py-2 text-sm font-semibold transition ${
                      ticketToDelete.trim() ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    İşlemi Sil
                  </button>
                </form>
              ) : (
                <p className="text-sm text-gray-500">Bir işlem silebilmek için önce hesap seçin.</p>
              )}
            </div>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Yeni Kayıt</h3>
            {selectedAccount && (
              <p className="text-xs text-gray-500 mb-3">
                {selectedAccount.name} • {selectedAccount.accountNo}
              </p>
            )}
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-2 bg-gray-100 rounded-xl p-1 text-xs font-semibold">
                {(
                  [
                    { key: 'trade', label: 'Trade' },
                    { key: 'deposit', label: 'Deposit' },
                    { key: 'withdraw', label: 'Withdraw' },
                  ] as { key: EntryType; label: string }[]
                ).map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setEntryType(option.key)}
                    className={`rounded-lg py-2 transition ${
                      entryType === option.key ? 'bg-mt5-blue text-white shadow' : 'text-gray-500'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {entryType === 'trade' ? (
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-gray-500">
                    Sembol
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={tradeForm.symbol}
                      onChange={(event) => handleTradeChange('symbol', event.target.value.toUpperCase())}
                      placeholder="GOLD"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-xs font-semibold text-gray-500">Yön</span>
                      <div className="mt-1 grid grid-cols-2 gap-2">
                        {(
                          [
                            { key: 'buy', label: 'BUY' },
                            { key: 'sell', label: 'SELL' },
                          ] as { key: TradeSide; label: string }[]
                        ).map((option) => (
                          <button
                            key={option.key}
                            type="button"
                            onClick={() => handleTradeChange('side', option.key)}
                            className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                              tradeForm.side === option.key
                                ? 'border-mt5-blue bg-mt5-blue/10 text-mt5-blue'
                                : 'border-gray-200 text-gray-500'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="text-xs font-semibold text-gray-500">
                      Lot
                      <input
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                        value={tradeForm.volume}
                        onChange={(event) => handleTradeChange('volume', event.target.value)}
                        placeholder="Lot"
                        inputMode="decimal"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <label className="text-xs font-semibold text-gray-500">
                      Açılış Zamanı
                      <input
                        type="datetime-local"
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                        value={toDateTimeLocal(tradeForm.openTime)}
                        onChange={(event) => handleTradeChange('openTime', fromDateTimeLocal(event.target.value))}
                        step="60"
                      />
                    </label>
                    <label className="text-xs font-semibold text-gray-500">
                      Kapanış Zamanı
                      <input
                        type="datetime-local"
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                        value={toDateTimeLocal(tradeForm.closeTime)}
                        onChange={(event) => handleTradeChange('closeTime', fromDateTimeLocal(event.target.value))}
                        step="60"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <label className="text-xs font-semibold text-gray-500">
                      Açılış Fiyatı
                      <input
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                        value={tradeForm.openPrice}
                        onChange={(event) => handleTradeChange('openPrice', event.target.value)}
                        placeholder="0.00"
                        inputMode="decimal"
                      />
                    </label>
                    <label className="text-xs font-semibold text-gray-500">
                      Kapanış Fiyatı
                      <input
                        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                        value={tradeForm.closePrice}
                        onChange={(event) => handleTradeChange('closePrice', event.target.value)}
                        placeholder="0.00"
                        inputMode="decimal"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-gray-500">
                    Tarih / Saat
                    <input
                      type="datetime-local"
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={toDateTimeLocal(balanceForm.timestamp)}
                      onChange={(event) => handleBalanceChange('timestamp', fromDateTimeLocal(event.target.value))}
                      step="60"
                    />
                  </label>
                  <label className="block text-xs font-semibold text-gray-500">
                    Tutar
                    <input
                      className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-mt5-blue focus:outline-none"
                      value={balanceForm.amount}
                      onChange={(event) => handleBalanceChange('amount', event.target.value)}
                      placeholder="0.00"
                      inputMode="decimal"
                    />
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-mt5-blue py-2 text-sm font-semibold text-white transition hover:bg-mt5-blue/90"
              >
                Kaydet
              </button>
              {statusMessage && <p className="text-xs text-mt5-blue font-semibold mt-2">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManager;
