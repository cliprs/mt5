import React from 'react';
import { useAccounts } from '../context/AccountsContext';
import {
  IoMailOutline,
  IoSettingsOutline,
  IoCalendarOutline,
  IoPaperPlaneOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onManageAccounts: () => void;
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  tag?: string;
  onClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onManageAccounts }) => {
  const { selectedAccount } = useAccounts();

  const menuItems: MenuItemProps[] = [
    {
      label: 'İşlem',
      icon: (
        <div
          className="w-5 h-5 bg-gray-600"
          style={{ mask: 'url(/islem.svg) no-repeat center / contain', WebkitMask: 'url(/islem.svg) no-repeat center / contain' }}
        />
      ),
    },
    {
      label: 'Haberler',
      icon: (
        <div
          className="w-5 h-5 bg-gray-600"
          style={{ mask: 'url(/haberler.svg) no-repeat center / contain', WebkitMask: 'url(/haberler.svg) no-repeat center / contain' }}
        />
      ),
    },
    {
      label: 'Posta kutusu',
      icon: <IoMailOutline size={20} className="text-gray-600" />,
      badge: 8,
    },
    {
      label: 'Günlük',
      icon: (
        <div
          className="w-5 h-5 bg-gray-600"
          style={{ mask: 'url(/gunluk.svg) no-repeat center / contain', WebkitMask: 'url(/gunluk.svg) no-repeat center / contain' }}
        />
      ),
    },
    {
      label: 'Ayarlar',
      icon: <IoSettingsOutline size={20} className="text-gray-600" />,
    },
    {
      label: 'Ekonomik Takvim',
      icon: <IoCalendarOutline size={20} className="text-gray-600" />,
      tag: 'Ads',
    },
    {
      label: 'Yatırımcı topluluğu',
      icon: (
        <div
          className="w-5 h-5 bg-gray-600"
          style={{ mask: 'url(/yatirimcitoplulugu.svg) no-repeat center / contain', WebkitMask: 'url(/yatirimcitoplulugu.svg) no-repeat center / contain' }}
        />
      ),
    },
    {
      label: 'MQL5 Algo Alım-Satım',
      icon: <IoPaperPlaneOutline size={20} className="text-gray-600" />,
    },
    {
      label: 'Kullanıcı Kılavuzu',
      icon: <IoHelpCircleOutline size={20} className="text-gray-600" />,
    },
    {
      label: 'Hakkında',
      icon: <IoInformationCircleOutline size={20} className="text-gray-600" />,
      onClick: () => {
        onClose();
        onManageAccounts();
      },
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 pt-6">
          <div className="flex items-start gap-4">
            <img src="/pepperstone.svg" alt="Pepperstone Logo" className="w-14 h-14 object-contain -ml-1" />
            <div className="flex flex-col">
              <span className="text-black font-normal text-[16px] leading-tight">
                {selectedAccount?.name ?? 'Hesap seçilmedi'}
              </span>
              <span className="text-gray-500 text-[13px] font-normal mt-0.5">
                {selectedAccount ? `${selectedAccount.accountNo} - ${selectedAccount.server}` : '---'}
              </span>
              <span className="text-mt5-blue text-[14px] font-normal mt-3 cursor-default select-none">
                Hesapları yönet
              </span>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gray-100 w-full my-1" />

        <nav className="flex flex-col py-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
      </div>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, tag, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-6 px-5 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors active:bg-gray-100 focus:outline-none"
  >
    <div className="text-gray-600 w-6 flex justify-center">{icon}</div>
    <div className="flex flex-1 items-center justify-between">
      <span className="text-[15px] font-semibold text-black">{label}</span>
      {badge !== undefined && (
        <span className="bg-[#E57373] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
          {badge}
        </span>
      )}
      {tag && (
        <span className="border border-blue-400 text-blue-500 text-[10px] px-1.5 py-0.5 rounded-full font-medium">{tag}</span>
      )}
    </div>
  </button>
);

export default Sidebar;
