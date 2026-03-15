import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['ikon.png', '**/*.svg'],
      manifest: {
        name: 'MetaTrader 5 Web',
        short_name: 'MT5 Web',
        description: 'MetaTrader 5 Mobile Web Clone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'ikon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'ikon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        // Önbelleği agresif bir şekilde temizle ve yenisini al
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst', // HTML dosyası için önce internete bak
            options: {
              cacheName: 'html-cache',
            },
          },
        ],
      }
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
  },
  preview: {
    port: 8000,
    host: true,
    strictPort: true,
    allowedHosts: [".koyeb.app", "cognitive-minerva-cct-336604da.koyeb.app"]
  }
})
