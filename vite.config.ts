import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Adăugăm baza pentru GitHub Pages
  build: {
    rollupOptions: {
      input: './src/index.tsx'
    },
    outDir: 'dist', // Specificăm directorul de output
    assetsDir: 'assets'
  }
})