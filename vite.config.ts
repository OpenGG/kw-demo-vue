import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   hmr: {
  //     port: 443
  //   }
  // },
  build: {
    minify: false,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@ks/kw': path.resolve(__dirname, './k'),
      '@ks/kwcolor': path.resolve(__dirname, './k')
    }
  }
});
