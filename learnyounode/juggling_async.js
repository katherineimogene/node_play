var bl = require('bl')
var http = require('http')
var getURLs = process.argv.splice(2),
    truecount = getURLs.length,
    responseQueue = []

function printResults(){
  if (--truecount > 0) return;
  for (i=0; i<responseQueue.length; i++){
    console.log(responseQueue[i].data)
  }
}

function HTMLPage(url) {
  var _page = this
  _page.data = ""
  http.get(url, function(response){
    response.setEncoding('utf8')
    response.on('data', function(data){
      _page.data += data
    })
    response.on('end', printResults)
  })
}

for (i=0; i<getURLs.length;i++) {
  responseQueue.push(new HTMLPage(getURLs[i]))
}

