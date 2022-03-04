import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import path from 'path';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~src/',
        replacement: REPLACEMENT,
      },
    ],
  },
  plugins: [
    Vue2(/*options*/),
    ScriptSetup({ /* options */ })
  ],
})