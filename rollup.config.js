/*
機能について
・IEIIに対応
・async/await/promise/fetchメソッド変換

dev: sorcemap
production: uglify
*/

// babel
import babel from 'rollup-plugin-babel';
// resolve
import resolve from 'rollup-plugin-node-resolve';
// commonjs
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/index.js',
  output: {
    file: './dist/js/index.js',
    format: 'es',
    name: 'index'
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            targets: {
              ie: '11'
            },
            corejs: 3
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime'
      ]
    }),
    resolve(),
    commonjs({
      include: /node_modules/
    })
  ]
};
