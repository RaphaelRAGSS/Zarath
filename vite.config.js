import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Configurações de desenvolvimento (o que você já tinha)
  server: {
    port: 5173,
    host: true, // expõe na rede local, permitindo acesso pelo IP e QR code
  },

  // Configurações de Build (essenciais para resolver o erro no Vercel)
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },

  // Resolve problemas de importação com caminhos absolutos (/src/main.jsx)
  resolve: {
    alias: {
      '/': '/src'
    }
  },

  // Base para Vercel
  base: './'
})