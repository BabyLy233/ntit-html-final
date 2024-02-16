import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [UnoCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: true, // 开启代码压缩
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'pages', 'detail.html'),
        rank: resolve(__dirname, 'pages', 'rank.html'),
        play: resolve(__dirname, 'pages', 'play.html'),
        board: resolve(__dirname, 'pages', 'board.html')
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
