import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Keep this as '.' since Vercel now starts in 'frontend/'
  build: {
    outDir: 'dist', // Ensure Vercel expects 'dist'
    rollupOptions: {
      input: 'index.html', // Explicitly tell Vite to use this file
    }
  }
});
