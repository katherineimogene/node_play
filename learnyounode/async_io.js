var fs = require('fs')

// 4.  MY FIRST ASYNC I/O!
fs.readFile(process.argv.pop(), function (err, data) {
  if (err) throw err;
  var fileContents = data.toString()
  console.log((fileContents.split('\n').length) - 1);
});

