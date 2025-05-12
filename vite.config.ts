import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isso já deve estar aí
    allowedHosts: ['759e-177-22-93-2.ngrok-free.app'], // Permite todos os domínios externos 
  },
})
