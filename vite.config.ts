import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false
        },
        {
          libName: '@arco-design/web-react',
          libDirectory: 'es',
          camel2DashComponentName: false,
          style(name) {
            return `@arco-design/web-react/es/${name}/style/index.js`;
          }
        }
      ]
    })
  ]
});
