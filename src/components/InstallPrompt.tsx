import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoShareOutline, IoAddSharp } from 'react-icons/io5';

const InstallPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde log bas (Geliştirici konsolunda görünür)
    console.log('InstallPrompt bileşeni yüklendi.');

    // iOS tespiti
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Her durumda 3 saniye sonra göster
    const timer = setTimeout(() => {
      setShowPrompt(true);
      console.log('Yükleme modalı şimdi gösteriliyor...');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] p-4 pointer-events-none flex justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.3)] border-2 border-blue-500 p-5 flex items-center gap-4 relative pointer-events-auto animate-slide-down">
        {/* Kapat Butonu */}
        <button 
          onClick={handleClose}
          className="absolute -top-2 -right-2 text-white bg-red-500 rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors"
        >
          <IoCloseOutline size={22} />
        </button>

        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
          <img src="/pepperstone.svg" alt="App Icon" className="w-12 h-12 object-contain" />
        </div>

        {/* Metin */}
        <div className="flex-1">
          <h4 className="text-[16px] font-extrabold text-black leading-tight">Uygulamayı Hemen Yükle</h4>
          <p className="text-[12px] text-gray-600 mt-1 font-medium">
            {isIOS 
              ? 'Safari menüsünden "Ana Ekrana Ekle"ye dokunun.' 
              : 'Daha hızlı ve kesintisiz deneyim için yükleyin.'}
          </p>
        </div>

        {/* Aksiyon */}
        {isIOS ? (
          <div className="flex flex-col items-center gap-1 text-blue-600">
            <IoShareOutline size={24} className="animate-pulse" />
            <span className="text-[9px] font-bold text-center">Paylaş & Ekle</span>
          </div>
        ) : (
          <button
            onClick={() => alert('Yükleme özelliğini başlatmak için tarayıcı menüsündeki "Yükle" veya "Ana ekrana ekle" butonunu kullanabilirsiniz.')}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[13px] font-black uppercase tracking-wider shadow-lg shadow-blue-200"
          >
            YÜKLE
          </button>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-down {
          0% { transform: translateY(-150%); }
          100% { transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}} />
    </div>
  );
};

export default InstallPrompt;
