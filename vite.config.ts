import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import MarkDown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue({ include: [/\.md$/, /\.vue$/] }), vueJsx({}), MarkDown()],
  server: {
    hmr: true
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    assetsDir: 'static',
    cssCodeSplit: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/packages/index.ts'),
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
