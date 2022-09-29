const path = require('path')
const SRC_PATH = path.join(__dirname, '../../src')
const STORIES_PATH = path.join(__dirname, '../../stories')
//dont need stories path if you have your stories inside your //components folder

const disableEsLint = (e) => {
  return (
    e.module.rules
      .filter((e) => e.use && e.use.some((e) => e.options && void 0 !== e.options.useEslintrc))
      .forEach((s) => {
        e.module.rules = e.module.rules.filter((e) => e !== s)
      }),
    e
  )
}
module.exports = ({ config }) => {
  // config = disableEsLint(config);
  // config.module.rules.unshift({
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loader: 'eslint-loader',
  //   options: {
  //     failOnWarning: false,
  //     failOnError: false, // false instead of true
  //   },
  // });
  // ?

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('awesome-typescript-loader'),
  //     },
  //     {
  //       loader: require.resolve('react-docgen-typescript-loader'),
  //       // options: {
  //       //   // Provide the path to your tsconfig.json so that your stories can
  //       //   // display types from outside each individual story.
  //       //   tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
  //       // },
  //     },
  //   ],
  // });

  // config.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   exclude: /node_modules/,
  //   loader: require.resolve('babel-loader'),
  //   options: {
  //     presets: [['react-app']],
  //   },
  // })
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: path.resolve(__dirname, '../../postcss.config.js')
          }
        }
      }
    ],

    include: path.resolve(__dirname, '../../')
  })
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          },
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
        }
      }
    ],
    enforce: 'pre'
  })
  // config.module.rules.push({
  //   test: /\.(png|jpg|jpeg|gif|svg|ttf|eot)$/,
  //   include: [path.resolve(__dirname, '../src')],
  //   use: [
  //     {
  //       loader: 'file-loader',
  //       options: {
  //         name: '[name].[ext]',
  //         outputPath: 'static/images/',
  //         publicPath: '../src/static/images'
  //       }
  //     }
  //   ]
  // });
  config.module.rules.push({
    resolve: {
      alias: {
        '@utils': path.resolve(__dirname, '../../src/utils'),
        '@tokens': path.resolve(__dirname, '../../tokens'),
        '@styles': path.resolve(__dirname, '../../static/styles'),
        '@react-registry': path.resolve(__dirname, '../../src/utils/react-registry/src'),
        image: path.resolve(__dirname, '../../src/static')
        // 'css': path.resolve(__dirname, '../../src/styles/css')
      },
      extensions: ['.ts', '.tsx', '.js', '.json', '.css']
    }
  })

  config.resolve.extensions.push(`.ts`, `.tsx`)

  return config
}
