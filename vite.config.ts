import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/

/*export default defineConfig({
  plugins: [
      vue(),
      tailwindcss(),
      AutoImport({
          resolvers: [ElementPlusResolver()],
      }),
      Components({
          resolvers: [ElementPlusResolver()],
      }),
  ],
})*/

export default ({mode}: any) => {
    console.log(loadEnv(mode, process.cwd()))
    return defineConfig({
        plugins: [
            vue(),
            tailwindcss(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        server: {
            proxy: {
                '/api/v1': {
                    target: 'http://localhost:10010',
                    changeOrigin: true,
                    rewrite: (path: string)=> path,
                },
            },
        },
    })
}
