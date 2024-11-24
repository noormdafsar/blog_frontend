import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables (optional for proxy usage)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    preview: {
      port: parseInt(process.env.PORT || '3000', 10), // Use the Render-specified port
      host: '0.0.0.0', // Ensure external access
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL, // Use backend URL from environment variables
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
