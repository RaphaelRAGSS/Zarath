import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Configurações de desenvolvimento
  server: {
    port: 5173,
    host: true, // expõe na rede local
  },

  // Configurações de Build (essencial para Vercel)
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },

  // Resolve o erro de importação /src/main.jsx
  resolve: {
    alias: {
      '/': '/src'
    }
  },

  // Base para Vercel
  base: './'
})
