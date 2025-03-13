import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct asset paths on Vercel
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html"
    }
  },
  server: {
    strictPort: true
  }
});
