import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoShareOutline } from 'react-icons/io5';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    if (isStandalone) return;

    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    // iOS için zorunlu gösterim
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setTimeout(() => setShowPrompt(true), 4000);
    }

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        alert('Yüklemek için Safari alt menüsündeki "Paylaş" ikonuna tıklayıp "Ana Ekrana Ekle"yi seçin.');
      }
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setShowPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] p-3 pointer-events-none flex justify-center">
      <div className="w-full max-w-[360px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-3 flex items-center gap-3 pointer-events-auto animate-slide-down">
        {/* App Icon */}
        <div className="w-10 h-10 flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-50 flex items-center justify-center overflow-hidden">
          <img src="/pepperstone.svg" alt="Icon" className="w-8 h-8 object-contain" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] font-semibold text-black truncate">MetaTrader 5</h4>
          <p className="text-[11px] text-gray-500 truncate">Ana ekrana ekleyerek kullanın</p>
        </div>

        {/* Action */}
        <div className="flex items-center gap-2">
          {isIOS ? (
            <div className="flex flex-col items-center text-blue-600 px-2">
              <IoShareOutline size={20} />
              <span className="text-[8px] font-bold">Paylaş</span>
            </div>
          ) : (
            <button
              onClick={handleInstallClick}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[12px] font-bold active:scale-95 transition-all"
            >
              Yükle
            </button>
          )}
          
          <button 
            onClick={() => setShowPrompt(false)}
            className="text-gray-400 p-1"
          >
            <IoCloseOutline size={20} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-down {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </div>
  );
};

export default InstallPrompt;
