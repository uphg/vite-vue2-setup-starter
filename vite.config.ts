import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue2'

const srcPath = `${path.resolve(__dirname, './src')}/`

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'src/',
        replacement: srcPath,
      },
    ],
  },
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  })]
})
