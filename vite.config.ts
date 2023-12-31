/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import linaria from '@linaria/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    svgr(),
  ],
  server: {
    host: 'resume.localtest.me',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
  },
});
