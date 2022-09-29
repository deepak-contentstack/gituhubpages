// generateColorLess.js
const fs = require('fs')
const path = require('path')

//node_modules/@ravencolevol/super-charged-rte/lib/color.less
const pathToFile = path.join(
  __dirname,
  'node_modules/@ravencolevol/super-charged-rte/lib/color.less'
)
//output dir
const pathToNewDestination = path.join(__dirname, 'src/components/RichTextEditor', 'color.less')
fs.copyFile(pathToFile, pathToNewDestination, function (err) {
  if (err) {
    throw err
  } else {
    console.log('Successfully copied and moved the file!')
  }
})
