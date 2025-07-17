import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins:[react()],
  root:'./',
  base:'/',
  build: {
    outDir:'./dest/'
  },
  server: {
    port:9999,
    open:true
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname, "src"),
      '$':path.resolve(__dirname, "components")
    }
  }
});