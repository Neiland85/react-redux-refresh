import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    open: true, // Abre el navegador automáticamente
    port: 3000, // Cambia el puerto si lo necesitas
  },
});

