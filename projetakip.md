# Proje Takip Dosyası: MetaTrader 5 Web Klonu

## Proje Hakkında
Bu proje, MetaTrader 5 mobil uygulamasının arayüzünü birebir kopyalayan, React ve TypeScript tabanlı bir web uygulamasıdır.

## Kullanılan Teknolojiler
*   **Frontend:** React (Vite), TypeScript
*   **Stil:** Tailwind CSS + Custom CSS (Transformations)
*   **İkonlar:** Custom SVG (MT5 Orijinal İkon Seti)
*   **Deploy:** Koyeb (GitHub Entegre)
*   **PWA:** Vite PWA Plugin (Otomatik Güncelleme Aktif)

## Tamamlanan Özellikler (Mevcut Durum)
1.  **Fiyatlar Sayfası (Quotes):** 
    - [x] Sembol listesi ve anlık fiyat simülasyonu.
2.  **Grafik Sayfası (Charts):** 
    - [x] `grafik.jpg` görseline sadık tasarım.
    - [x] Beyaz tema, kesikli ızgara çizgileri.
    - [x] Dolgun mumlar (Mavi yükseliş, Kırmızı düşüş).
    - [x] 3 adet hareketli ortalama (MA) indikatörü.
    - [x] "Volumes" (Hacim) paneli.
    - [x] Header entegreli MT5 ikonları (Crosshair, f, Shapes, Clock, New Order).
    - [x] Sabit yerleşim (Scroll engellendi).
3.  **İşlem Sayfası (Trade):** 
    - [x] Bakiye, Varlık ve Serbest Teminat satırları (Kesikli çizgi tasarımı).
    - [x] Bakiye tam olarak **17.748,04 $** seviyesine sabitlendi.
    - [x] Sabit yerleşim (Scroll engellendi).
4.  **İşlem Geçmişi (History):**
    - [x] **Gerçekçi Veri:** 15.000 $ başlangıç bakiyesi ve max 0.06 lot limitli işlem üretimi.
    - [x] **Tarih Güncellemesi:** 14 Şubat 2026 güncel tarihine göre tüm geçmiş veriler simüle edildi.
5.  **Görsel & Teknik:**
    - [x] Build hataları (TS6133) giderildi.
    - [x] Alt navigasyon ve Header çakışmaları (visibility) çözüldü.
    - [x] Tüm sayfalar mobil uygulama standartlarında sabitlendi (Fixed Layout).

## Yapılacaklar (Todo)
*   [ ] Mesajlar sayfası tasarımı.
*   [ ] Haberler sayfası entegrasyonu.
*   [ ] Ayarlar ve Hesap Yönetimi detay sayfaları.

---
*Son Güncelleme: 14 Şubat 2026*
