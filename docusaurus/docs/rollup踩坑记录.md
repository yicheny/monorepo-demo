# `[!] (plugin commonjs) SyntaxError: Unexpected token (13:11) in G:\demos\monorepo-demo\packages\demo\src\App.js`
参见资料：[stackOverflow Rollup + React not compiling JSX](https://stackoverflow.com/questions/52884278/rollup-react-not-compiling-jsx)

注意报错，可以看到是`@rollup/plugin-commonjs`抛出的报错，它不能解析`jsx`语法。

原本是类似这么写的（忽略其他插件）：

```javascript
plugins: [
    commonjs(),//es6模块语法转换
    babel(),
]
```

改成下面这样就行，`babel`解析完成后再让`commonjs`处理：

```javascript
plugins: [
    babel(),
    commonjs(),//es6模块语法转换
]
```