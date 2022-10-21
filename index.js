const fs = require('fs')
const pug = require('pug')
const path = require('path')
const { consumers } = require('stream')

const compiledIndex = pug.renderFile('src/pug/index.pug')

fs.writeFile('public/index.html', compiledIndex, () =>
  console.log('Index successfully compiled to HTML!'),
)
