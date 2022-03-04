import { defineConfig } from 'vite'
import path from 'path';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
import ViteComponents from "unplugin-vue-components/vite";
import { svgBuilder } from './plugins/svg-sprite-loader'

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

const getPath: (compName: string) => string = compName => {
  return `element-ui/packages/${renameDir(compName)}`;
};

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
    ScriptSetup({ /* options */ }),

    // template 模板自动按需引入
    ViteComponents({
      dirs: ["src"],

      resolvers: [
        ElementUiResolver(),
        name => {
          if (name.match(/^El[A-Z]/)) {
            const compName = name.slice(2)
            const partialName = kebabCase(compName)
            return {
              path: getPath(partialName),
              sideEffects: [`element-ui/lib/theme-chalk/${partialName}.css`],
            };
          }
          return null;
        },
      ],
    }),

    svgBuilder('./src/icons/svg/'),
  ],

  
})