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
    open: true,
    port: 3000,
  },
});

