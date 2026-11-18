export const NAMES = {
    TEST: 'TEST',
} as const;

/*
* TS 代码最终要变成 JS。变成 JS 有两种方式：
*       擦除（erase）：直接把类型部分删掉，剩下的就是 JS，不做任何转换。
*       转换（transform）：需要真正生成新的运行时代码。
*
* erasableSyntaxOnly: true 就是规定：只准用第 1 类语法，第 2 类直接报错
* */