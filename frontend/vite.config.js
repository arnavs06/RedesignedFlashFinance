import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'frontend', // Ensure this points to the correct location
  build: {
    outDir: 'dist', // Ensure Vercel expects 'dist'
  }
});
