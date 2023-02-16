# `output`
## `output.format`
指定生成`bundle`的格式，可以设置以下内容：
1. `amd` 异步模块定义，适用于`RequireJs`等模块加载器
2. `cjs` `CommonJS`，适用于`Node`环境和其他打包工具（别名`commonjs`）
3. `es` 将`bundle`保留为`ES`文件，适用于其他打包工具以及支持`<script type=module>`标签的浏览器（别名`esm`、`module`）
4. `iife` 自执行函数，适用于`<script>`标签
5. `umd` 通用模块定义，生成的包同时支持`amd`、`cjs`和`iife`
6. `system` `SystemJS`模块加载器的原生格式（别名`systemjs`）