const fs = require('fs');
const path = require('path');
const babelPlugin = require('rollup-plugin-babel');
const json = require('@rollup/plugin-json');

//const { eslint } = require('rollup-plugin-eslint');
const cwd = process.cwd();
import sass from 'rollup-plugin-sass';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy'



function generateWebConfig(isBrowser) {
    return {
        input: `./src/index.js`,
        output: [
            {
                file: `./dist/index.js`,
                format: isBrowser ? 'umd' : 'cjs',
                name: 'Assist',
            },
        ],
        plugins: [
            sass(),
            json(),
            babelPlugin({
                exclude: 'node_modules/**',
                plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-transform-classes',
                ],
            }),
            resolve({
                browser: isBrowser,
            }),
            commonjs(),
            copy({
                targets: [
                  { src: 'src/assets/**/*', dest: 'dist/assets' }
                ]
              })
        ],
    };
}

module.exports = generateWebConfig(true);