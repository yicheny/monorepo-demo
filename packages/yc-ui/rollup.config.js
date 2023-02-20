import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from "rollup-plugin-sourcemaps";

export default createConfig();

function createConfig(){
    return {
        input: `src/index.js`,
        output: {
            name: 'shared',
            file: `lib/index.js`,
            format: 'cjs',
            sourcemap: true
        },
        external: [
            'react',
        ],
        plugins: [
            uglify(),
            resolve(),
            babel({
                exclude: 'node_modules/**'
            }),
            commonjs(),
            sourceMaps(),
        ]
    }
}

