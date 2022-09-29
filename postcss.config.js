module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    //require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('precss'),
    require('cssnano'),
    // require('postcss-for'),
    // require('postcss-simple-vars'),
    // require('postcss-automath'),
    // require('postcss-scss'),
    // require('postcss-sort-alphabetically'),
    require('lost'),
    //require('stylelint'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 0,
    }),
  ],
}
