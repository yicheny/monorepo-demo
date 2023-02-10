import serve from 'rollup-plugin-dev'
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from "rollup-plugin-livereload";
import postcss from 'rollup-plugin-postcss';
import sourceMaps from "rollup-plugin-sourcemaps";
// import typescript from "rollup-plugin-typescript";
import alias from '@rollup/plugin-alias';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        name: "bundleName",
        sourcemap: true,
    },
    plugins: [
        resolve(),//默认不能获取node_modules内的文件
        commonjs(),//es6模块语法转换
        postcss({
            extract: true,
            minimize: false,
            extensions: ['scss'],
            // process: processSass,
        }),
        alias({
            entries: [
                {find: "@shared", replacement: "../../shared"}
            ]
        }),
        babel({
            exclude: "node_modules/**",
            // extensions:['.js', '.jsx'],
            babelHelpers: "bundled"
        }),
        // typescript({
        //     exclude: "node_modules/**",
        //     typescript: require("typescript")
        // }),
        sourceMaps(),
        livereload(),//热加载
        serve({
            open: true,
            port: 3300,
            contentBase: ''
        })
    ],
    external: [],
}
