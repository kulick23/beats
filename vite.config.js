import { defineConfig } from 'vite';

export default defineConfig({
  base: '/beats/', 
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
