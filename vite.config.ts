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
      '#d': resolve(__dirname, 'packages/doc')
    }
  },
  plugins: [vue(), vueJsx({})],
  server: {
    hmr: true,
    host: '0.0.0.0'
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    assetsDir: 'static',
    cssCodeSplit: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'Morefish',
      fileName: (format) => `morefish.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
