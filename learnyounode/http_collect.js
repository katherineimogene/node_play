var http = require('http')
var bl = require('bl')

var getURL = process.argv[2]

http.get(getURL, function(response) {
  response.pipe(bl(function(err, data){
    if (err) throw err
    ourData = data.toString()
    console.log(ourData.length)
    console.log(ourData)
  }))
})
