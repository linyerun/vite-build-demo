# 使用mitt这个库来做bus这个功能
- https://www.bilibili.com/opus/648276007279656966?spm_id_from=333.1387.0.0

```bash
npm install mitt -S
```

```ts
const Mit = mitt()

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
```