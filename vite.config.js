import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT || '3000', 10), // Use the Render-specified port
    host: '0.0.0.0', // Ensure external access
  },
});
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
