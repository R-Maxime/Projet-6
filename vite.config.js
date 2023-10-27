import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          'src/datas/logements.json': ['./src/datas/logements.json'],
        }
      }
    }
  }
})
