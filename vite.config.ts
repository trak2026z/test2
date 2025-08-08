import { defineConfig } from 'vite';
import react from '@avitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
});
