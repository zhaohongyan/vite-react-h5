import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
// import styleImport from 'vite-plugin-style-import'
import createImportPlugin from 'vite-plugin-import';

const appPackageJson = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: `${appPackageJson.name}-build`,
    // sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    // styleImport({
    //   // resolves: [AntdResolve()],
    //   libs: [
    //     {
    //       libraryName: 'antd-mobile',
    //       resolveStyle: (name) => {
    //         return `antd-mobile/es/components/${name}/${name}.css`
    //       },
    //     },
    //   ]
    // }),
    createImportPlugin({
      onlyBuild: false, // if onlyBuild === true, this plugin takes effect only in vite build mode; onlyBuild's default value is true.
      babelImportPluginOptions: [{
        libraryName: 'antd-mobile',
        'style': false,   // or 'css'
        libraryDirectory: 'es/components'
      }]
    }),
  ],
})
