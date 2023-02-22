import serve from 'rollup-plugin-dev'
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from "rollup-plugin-livereload";
import sourceMaps from "rollup-plugin-sourcemaps";

export default createConfig;

function createConfig(){
    return {
        input: `src/index.js`,
        output: {
            file: `dist/index.js`,
            format: 'cjs',
            name: "bundleName",
            sourcemap: true,
        },
        plugins: [
            resolve(),//默认不能获取node_modules内的文件
            babel({
                exclude: "node_modules/**",
                // extensions:['.js', '.jsx'],
                // babelHelpers: "bundled"
            }),
            commonjs(),//es6模块语法转换
            sourceMaps(),
            livereload(),//热加载
            serve({
                open: true,
                port: 3320,
                contentBase: ''
            })
        ],
        external: [
            'react',
        ],
    }
}