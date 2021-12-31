import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const isCodeSandbox = process.cwd() === '/sandbox'

const server = isCodeSandbox && {
  hmr: {
    port: 443
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server,
  plugins: [vue()],
  resolve: {
    alias: {
      '@ks/kw': path.resolve(__dirname, './k'),
      '@ks/kwcolor': path.resolve(__dirname, './k')
    }
  }
});
