import path from 'path'
import {createRequire} from "module";

import json from '@rollup/plugin-json'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify'
import sourceMaps from "rollup-plugin-sourcemaps";

const require = createRequire(import.meta.url);

process.env.TARGET = 'reactivity'

const packagesDir = path.resolve(process.cwd(), 'packages');
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const resolve = (o) => path.resolve(packageDir, o);
const pkg = require(resolve('package.json'));

const name = path.basename(packageDir);
const OUTPUT_FORMAT = {
    'esm-bundler': {
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: "es",
    },
    'cjs': {
        file: resolve(`dist/${name}.cjs.js`),
        format: "cjs"
    },
    'global': {
        file: resolve(`dist/${name}.global.js`),
        format: "life"
    }
}

const options = pkg.buildOptions;

function createConfig(format,output) {
    output.name = options.name;
    output.sourceMap = true;

    return {
        input: resolve('src/index.html.js'),
        output,
        plugins: [
            uglify(),
            json(),
            nodeResolve({
                extensions:['.js']
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**'
            }),
            sourceMaps(),
        ]
    }
}

export default options.formats.map(format => createConfig(format, OUTPUT_FORMAT[format]))