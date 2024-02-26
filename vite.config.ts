import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vitets-excel-reader/',
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    host: true,
    port: 8080,
    strictPort: true,
    origin: "http://0.0.0.0:8080",
    watch: {
      usePolling: true
    }
  },
  build: {
    chunkSizeWarningLimit: 1600, 
    rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString()
        }
      }
    }
  }},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
