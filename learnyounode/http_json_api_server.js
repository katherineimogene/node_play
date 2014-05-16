var http = require('http')
var url = require('url')

var server = http.createServer(function(request,response){
  var ourURL = url.parse(request.url, true),
        time = new Date(ourURL.query.iso),
        ourResult
        console.log(ourURL)

  if(/^\/api\/parsetime/.test(request.url)){
   ourResult = parseTime(time,response)
  } else if (/^\/api\/unixtime/.test(request.url)){
    ourResult = unixTime(time,response)
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
parseTime = function(time){
  return {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
  }
}

unixTime = function(time){
  return {
    unixtime: time.getTime()
  }
}



