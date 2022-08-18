import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'packages'),
      '#c': resolve(__dirname, 'packages/components'),
      '@d': resolve(__dirname, 'src/doc'),
      '#i': resolve(__dirname, 'packages/icon')
    }
  },
  plugins: [vue(), vueJsx({})],
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    assetsDir: 'static',
    cssCodeSplit: true,
    sourcemap: false,
    emptyOutDir: true,
    outDir: 'dist-doc'
  }
})
