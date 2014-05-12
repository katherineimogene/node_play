var fs = require('fs')

// 3. MY FIRST I/O!
var fileContents = fs.readFileSync(process.argv.pop()).toString()
var newLineCount = (fileContents.split('\n').length) - 1
console.log(newLineCount)

