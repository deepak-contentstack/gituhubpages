import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import alias from '@rollup/plugin-alias'
import svgr from '@svgr/rollup'
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'

const packageJson = require('./package.json')
const path = require('path')
const rootDir = path.resolve(__dirname)

export default {
  input: process.env.STORYBOOKMODE === 'public' ? 'src/publicIndex.ts' : 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      exports: 'named'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      exports: 'named'
    }
  ],
  external: ['react', 'react-dom', 'react-is'],
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react-table/index.js': ['useTable', 'usePagination', 'useRowSelect', 'useSortBy']
        // 'node_modules/react-date-range/dist/index.js,': ['Calender'],
        // 'node_modules/react-date-range/index.js': ['Calender'],
      }
    }),
    image({
      include: /\.(gif)$/
    }),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    alias({
      entries: {
        '@utils': path.resolve(rootDir, './src/utils/'),
        '@tokens': path.resolve(rootDir, './tokens/'),
        '@styles': path.resolve(rootDir, './static/styles/'),
        '@react-registry': path.resolve(rootDir, './src/utils/react-registry/src')
      }
    }),
    postcss({
      extract: 'main.css',
      minimize: 'main.css'
    }),
    svgr({
      svgoConfig: {
        plugins: [{ removeTitle: false }, { removeViewBox: false }]
      }
    }),
    json({
      compact: true
    }),
    copy({
      targets: [
        {
          src: 'tokens/variables.scss',
          dest: 'build',
          rename: 'variables.scss'
        },
        {
          src: 'tokens/tokens.css',
          dest: 'build',
          rename: 'variables.css'
        },
        {
          src: 'tokens/variables.js',
          dest: 'build',
          rename: 'variables.js'
        }
      ]
    })
  ]
}
