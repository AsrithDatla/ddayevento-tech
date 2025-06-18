import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy, options) => {
          // Mock API responses for development
          proxy.on('proxyReq', (proxyReq, req, res) => {
            if (req.url === '/api/send-quote' && req.method === 'POST') {
              // Simulate successful quote submission
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ 
                success: true, 
                message: 'Quote request sent successfully' 
              }));
            }
          });
        }
      }
    }
  }
});