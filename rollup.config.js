const fs = require('fs');
const path = require('path');
const babelPlugin = require('rollup-plugin-babel');
const json = require('@rollup/plugin-json');

//const { eslint } = require('rollup-plugin-eslint');
const cwd = process.cwd();
import sass from 'rollup-plugin-sass';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import hash from 'rollup-plugin-hash';

//import copy from 'rollup-plugin-copy'

const entry = {
    assist: './src/assist.js',
    'qunar-assist':'./src/qunar-assist.js'
}

function generateWebConfig(isBrowser,input) {
    return {
        input,
        output:  {
            dir: 'dist',
            format: isBrowser ? 'umd' : 'cjs',
            name: 'Assist'
        },
        plugins: [
            sass(),
            json(),
            image(),
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
            // copy({
            //     targets: [
            //       { src: 'src/assets/**/*', dest: 'dist/assets' }
            //     ]
            //   })
        ],
    };
}

const build = () => {
    return Object.keys(entry).map(item=>{
        return generateWebConfig(true,entry[item])
    })
}
module.exports = build();