
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'MAKE GOLF',
        short_name: 'MAKE',
        description: 'The Club Without Excuses. AI-engineered, 3D-printed golf equipment.',
        theme_color: '#1C1C1E',
        background_color: '#1C1C1E',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
  }
})
