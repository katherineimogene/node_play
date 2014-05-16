var http = require('http')
var url = require('url')

var server = http.createServer(function(request,response){
  var ourURL = url.parse(request.url, true),
        time = new Date(ourURL.query.iso),
        ourResult
  if(ourURL.iso){
   ourResult = {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
   }
  } else if (ourURL.unixtime) {
    ourResult = time.getTime()
  }
  if (ourResult) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    return response.end(JSON.stringify(ourResult))
  }
  response.writeHead(404)
  response.end()
})

server.listen(process.argv[2])


//functions for parsetime and unixtime.
//if iso, ourResult = parsetime
//if unixtime, ourResult = unixtime





// The JavaScript Date object can print dates in ISO format, e.g. new Date().toISOString(). It can also parse this format if you pass the string into the Date constructor. Date#getTime() will also come in handy.




