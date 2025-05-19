import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/projeto_pet_pIntegrador/', // Nome do repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
