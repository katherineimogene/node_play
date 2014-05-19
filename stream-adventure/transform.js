var through = require('through');
var tr = through(function(buffer) {
  var strInput = buffer.toString().toUpperCase()
  this.queue(strInput)
})
process.stdin.pipe(tr).pipe(process.stdout)
