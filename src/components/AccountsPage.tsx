import React from 'react';
import { useAccounts } from '../context/AccountsContext';
import { AccountProfile } from '../data/accounts';
import { IoAppsOutline, IoNotificationsOutline } from 'react-icons/io5';

const formatMoney = (val: number) =>
  val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const calcBalance = (acc: AccountProfile) => {
  let totalDeposit = 0;
  let totalWithdrawal = 0;
  let gross = 0;
  let comm = 0;
  let swap = 0;

  acc.history.forEach((deal) => {
    if (deal.type === 'balance') {
      if (deal.profit < 0) totalWithdrawal += Math.abs(deal.profit);
      else totalDeposit += deal.profit;
    } else {
      gross += deal.profit;
      comm += Math.abs(deal.commission);
      swap += deal.swap;
    }
  });

  const net = gross - comm;
  return totalDeposit + net + swap - totalWithdrawal;
};

const getBrokerLogo = (acc: AccountProfile) => {
  const s = `${acc.broker} ${acc.server}`.toLowerCase();
  if (s.includes('pepperstone')) return '/pepperstone.svg';
  return '/fxpro-logo.svg';
};

interface AccountsPageProps {
  onAddAccount: () => void;
}

const AccountsPage: React.FC<AccountsPageProps> = ({ onAddAccount }) => {
  const { accounts, selectedAccountId, selectAccount } = useAccounts();

  const selected = accounts.find((a) => a.id === selectedAccountId) ?? accounts[0];
  const others = accounts.filter((a) => a.id !== selected?.id);

  if (!selected) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-gray-400">
        <span className="text-sm">Henüz hesap yok.</span>
        <button
          onClick={onAddAccount}
          className="px-5 py-2.5 rounded-xl bg-mt5-blue text-white text-sm font-bold"
        >
          Hesap Ekle
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-24 bg-mt5-bg min-h-screen">
      <div className="bg-white mx-3 mt-3 rounded-2xl p-5 flex flex-col items-center text-center shadow-sm">
        <img src={getBrokerLogo(selected)} alt={selected.broker} className="w-14 h-14 rounded-xl object-contain mb-3" />
        <div className="text-[17px] font-bold text-black">{selected.name}</div>
        <div className="text-[13px] text-mt5-blue font-medium mt-0.5">{selected.broker}</div>
        <div className="text-[12px] text-gray-500 mt-2">
          {selected.accountNo} — {selected.server}
        </div>
        <div className="text-[28px] font-bold text-black mt-3">
          {formatMoney(calcBalance(selected))} <span className="text-[14px] text-gray-400 font-normal">USD</span>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <IoAppsOutline size={20} className="text-gray-400" />
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
            <IoNotificationsOutline size={16} className="text-white" />
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className="flex flex-col gap-2 px-3 mt-3">
          {others.map((acc) => (
            <button
              key={acc.id}
              onClick={() => selectAccount(acc.id)}
              className="bg-white rounded-2xl p-4 flex items-center gap-3 text-left shadow-sm"
            >
              <img src={getBrokerLogo(acc)} alt={acc.broker} className="w-10 h-10 rounded-lg object-contain shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold text-black truncate">{acc.name}</div>
                <div className="text-[11px] text-gray-500 truncate">
                  {acc.accountNo} — {acc.server}
                </div>
                <div className="text-[13px] text-black font-semibold mt-0.5">
                  {formatMoney(calcBalance(acc))} USD
                </div>
              </div>
              <IoAppsOutline size={18} className="text-gray-300 shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountsPage;
