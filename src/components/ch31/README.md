# 安装element-plus
```bash
npm install element-plus --save
```

# 安装按需导入所需的库
```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

# vite.config.ts中加以下配置
```ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      AutoImport({
          resolvers: [ElementPlusResolver()],
      }),
      Components({
          resolvers: [ElementPlusResolver()],
      }),
  ],
})

```