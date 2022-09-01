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
  server: {
    hmr: true,
    host: '0.0.0.0'
  },
  preview: {
    port: 4174
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    assetsDir: 'static',
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'Morefish',
      fileName: (format) => `morefish.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: 'assets/[name].css', // css build name
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
