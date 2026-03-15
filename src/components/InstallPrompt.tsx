import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoShareOutline, IoAddSharp } from 'react-icons/io5';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // 1. Zaten yüklü mü kontrol et
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    if (isStandalone) {
      console.log('Uygulama zaten yüklü modda çalışıyor.');
      return;
    }

    // 2. iOS tespiti
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // 3. Android/Chrome yükleme olayı
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt olayı tetiklendi');
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 4. EĞER YÜKLÜ DEĞİLSE, HER DURUMDA 4 SANİYE SONRA GÖSTER
    const timer = setTimeout(() => {
      setShowPrompt(true);
      console.log('Yükleme uyarısı gösteriliyor...');
    }, 4000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Yükleme özelliği tarayıcınız tarafından henüz hazır değil. Lütfen tarayıcı menüsünden (üç nokta) "Uygulamayı Yükle" veya "Ana Ekrana Ekle" seçeneğini kullanın.');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-[9999] animate-bounce-in pointer-events-auto">
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-blue-100 p-4 flex items-center gap-4 relative">
        {/* Kapat Butonu */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-black p-1 bg-gray-50 rounded-full"
        >
          <IoCloseOutline size={20} />
        </button>

        {/* Logo */}
        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl shadow-inner border border-gray-100 flex items-center justify-center overflow-hidden">
          <img src="/pepperstone.svg" alt="App Icon" className="w-10 h-10 object-contain" />
        </div>

        {/* Metin */}
        <div className="flex-1 pr-4">
          <h4 className="text-[15px] font-bold text-black leading-tight">MT5 Uygulamasını Yükle</h4>
          <p className="text-[11px] text-gray-500 mt-1 leading-snug">
            {isIOS 
              ? 'Hızlı erişim için ana ekrana ekleyin' 
              : 'Daha akıcı bir deneyim için ana ekrana ekleyin'}
          </p>
        </div>

        {/* Aksiyon Alanı */}
        {isIOS ? (
          <div className="flex flex-col items-center gap-1 text-[#0059b3] min-w-[70px]">
            <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
              <IoShareOutline size={16} />
              <span className="text-[10px] font-bold">Paylaş</span>
            </div>
            <div className="flex items-center gap-0.5 mt-1">
              <IoAddSharp size={14} />
              <span className="text-[9px] font-bold whitespace-nowrap">Ana Ekrana Ekle</span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleInstallClick}
            className="bg-[#0059b3] text-white px-5 py-2.5 rounded-xl text-[13px] font-extrabold whitespace-nowrap shadow-lg shadow-blue-200 active:scale-95 transition-all"
          >
            YÜKLE
          </button>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-in {
          0% { transform: translateY(-120%); opacity: 0; }
          70% { transform: translateY(10px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}} />
    </div>
  );
};

export default InstallPrompt;
