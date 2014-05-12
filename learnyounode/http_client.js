var http = require('http')
var getURL = process.argv[2]

http.get(getURL, function(response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})


