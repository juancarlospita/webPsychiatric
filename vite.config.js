import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {},
  },
  optimizeDeps: {
    include: ['swiper', 'swiper/css', 'swiper/css/bundle']
  }
});