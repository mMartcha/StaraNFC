import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isso já deve estar aí
    allowedHosts: ['eea0-186-227-73-29.ngrok-free.app'], // Permite todos os domínios externos 
  },
})
