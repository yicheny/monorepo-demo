import serve from 'rollup-plugin-dev'
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from "rollup-plugin-livereload";
import postcss from 'rollup-plugin-postcss';
import sourceMaps from "rollup-plugin-sourcemaps";

const MODULE_NAMES = [
    'base',
    'components',
    'utils'
]

export default createConfigList();

function createConfigList(){
    return MODULE_NAMES.map(createConfig)
}

function createConfig(fileName){
    return {
        input: `src/${fileName}/index.js`,
        output: {
            file: `dist/${fileName}/index.js`,
            format: 'es',
            name: "bundleName",
            sourcemap: true,
        },
        plugins: [
            resolve(),//默认不能获取node_modules内的文件
            postcss({
                extract: true,
                minimize: false,
                extensions: ['scss'],
                // process: processSass,
            }),
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
                port: 3310,
                contentBase: ''
            })
        ],
        external: [],
    }
}