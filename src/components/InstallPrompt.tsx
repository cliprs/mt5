import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoShareOutline, IoAddSharp } from 'react-icons/io5';

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's already installed (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    if (isStandalone) return;

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Chrome/Android "beforeinstallprompt" event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after 3 seconds for better UX
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // For iOS, show it after 5 seconds
    if (isIOSDevice) {
      setTimeout(() => setShowPrompt(true), 5000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleClose = () => {
    setShowPrompt(false);
    // Don't show again for 24 hours (saved in session for simplicity)
    sessionStorage.setItem('installPromptDismissed', 'true');
  };

  // Check if dismissed in this session
  if (!showPrompt || sessionStorage.getItem('installPromptDismissed')) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-[200] animate-bounce-in">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-4 flex items-center gap-4 relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-black p-1"
        >
          <IoCloseOutline size={20} />
        </button>

        {/* App Icon */}
        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center">
          <img src="/pepperstone.svg" alt="App Icon" className="w-10 h-10 object-contain" />
        </div>

        {/* Text Content */}
        <div className="flex-1 pr-4">
          <h4 className="text-[15px] font-bold text-black leading-tight">Uygulamayı Yükle</h4>
          <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">
            {isIOS 
              ? 'Hızlı erişim için ana ekrana ekleyin' 
              : 'Daha hızlı ve tam ekran deneyimi için yükleyin'}
          </p>
        </div>

        {/* Action Button / Instructions */}
        {isIOS ? (
          <div className="flex flex-col items-center gap-1 text-[#0059b3]">
            <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
              <IoShareOutline size={16} />
              <span className="text-[11px] font-bold">Paylaş</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-400">sonra</span>
              <div className="flex items-center gap-0.5 text-blue-500">
                <IoAddSharp size={14} />
                <span className="text-[10px] font-bold italic">Ana Ekrana Ekle</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={handleInstallClick}
            className="bg-[#0059b3] text-white px-4 py-2 rounded-xl text-[13px] font-bold whitespace-nowrap active:scale-95 transition-transform"
          >
            YÜKLE
          </button>
        )}

        {/* Progress Bar (Visual Only) */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-blue-500/10 w-full" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-in {
          0% { transform: translateY(-100px); opacity: 0; }
          70% { transform: translateY(10px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}} />
    </div>
  );
};

export default InstallPrompt;
