/*
機能について
■IEIIに対応
・Object.values/Object.entries使えない
・Promise使えない


・async/await/promise/fetchメソッド変換

dev: sorcemap
production: uglify
*/

// babel
import babel from 'rollup-plugin-babel';
// resolve
import resolve from 'rollup-plugin-node-resolve';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';

// commonjs
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/index.js',
  output: {
    file: './dist/js/index.js',
    format: 'iife',
    name: 'index'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              ie: 11
            },
            useBuiltIns: 'usage',
            corejs: 3
          }
        ]
      ],
      plugins: []
    }),
    // nodeGlobals({
    //   buffer: false // falseにできると容量を削れる
    // }),
    resolve(),
    commonjs(),
    nodeBuiltins()
  ]
};
