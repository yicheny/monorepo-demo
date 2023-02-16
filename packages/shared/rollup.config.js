import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from "rollup-plugin-sourcemaps";
import postcss from "rollup-plugin-postcss";

const MODULE_NAMES = [
    'base',
    'components',
    'utils'
]

export default createConfigList();

function createConfigList(){
    return MODULE_NAMES.map(createConfig)
}

function createConfig(fileName,i){
    return {
        input: `src/${fileName}/index.js`,
        output: {
            name: 'shared',
            file: `lib/${fileName}/index.js`,
            format: 'cjs',
            sourcemap: true
        },
        external: [
            'react',
        ],
        plugins: [
            uglify(),
            resolve(),
            postcss({
                extract: true,
                minimize: false,
                extensions: ['scss'],
                // process: processSass,
            }),
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs(),
            sourceMaps(),
        ]
    }
}

