import { AccountProfile } from '../data/accounts';

export const PRESET_LOGOS = [
  { label: 'Pepperstone', src: '/pepperstone.svg' },
  { label: 'FxPro', src: '/fxpro-logo.svg' },
];

// Hesaba özel logo atanmışsa onu, yoksa broker/sunucu adına göre varsayılanı döner.
export const getAccountLogo = (acc: AccountProfile) => {
  if (acc.logo) return acc.logo;
  const s = `${acc.broker} ${acc.server}`.toLowerCase();
  if (s.includes('pepperstone')) return '/pepperstone.svg';
  return '/fxpro-logo.svg';
};

// Yüklenen görseli küçültüp data URL'e çevirir; bulut verisini şişirmemek için max 128px.
export const resizeImageToDataUrl = (file: File, maxSize = 128): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Görsel okunamadı'));
      img.onload = () => {
        const srcW = img.width || maxSize;
        const srcH = img.height || maxSize;
        const scale = Math.min(1, maxSize / Math.max(srcW, srcH));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(srcW * scale);
        canvas.height = Math.round(srcH * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas desteklenmiyor'));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
