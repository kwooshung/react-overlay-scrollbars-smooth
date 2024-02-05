import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
// import vitePluginImp from 'vite-plugin-imp';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  plugins: [
    react(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'lodash',
    //       libDirectory: '',
    //       camel2DashComponentName: false
    //     },
    //     {
    //       libName: '@arco-design/web-react',
    //       libDirectory: 'es',
    //       camel2DashComponentName: false,
    //       style(name) {
    //         return `@arco-design/web-react/es/${name}/style/index.js`;
    //       }
    //     }
    //   ]
    // }),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      copyDtsFiles: true
    })
  ],
  test: {
    globals: true,
    setupFiles: './vitest-setup.ts',
    environment: 'jsdom',
    exclude: ['src/__visual_tests__', '**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**']
  },
  css: {
    modules: {
      // generateScopedName: '[name]__[local]'
      generateScopedName: '[local]'
    }
  },
  build: {
    minify: 'terser',
    lib: {
      entry: 'src/overlay-scrollbars-smooth/index.ts',
      name: 'ReactProgressbarWrapper',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'classnames', 'overlayscrollbars', 'overlayscrollbars-react'],
      output: {
        // 为各种格式提供全局变量名
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        // 这里定义了静态资源构建输出的命名
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css';
          }
          return assetInfo.name;
        }
      }
    }
  }
});
