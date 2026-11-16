# Tailwind
## 安装
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## 在vite.config.ts中配置
```ts
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tailwindcss(),
  ],
})
```

## 在style.css中配置
```css
@import 'tailwindcss';
```
