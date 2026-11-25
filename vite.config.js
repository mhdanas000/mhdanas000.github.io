import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/mhdanas000.githib.io/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
})
