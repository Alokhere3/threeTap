import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist' // Ensure this is set
  },
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
})
