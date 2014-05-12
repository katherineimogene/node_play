var net = require('net')

var server = net.createServer(function(socket){
  rightNow = rightNow()
  socket.end(rightNow)
})
server.listen(process.argv[2])

var rightNow = function(){
  var date = new Date(),
      year = date.getFullYear(),
     month = padZero(date.getMonth()+1),
       day = padZero(date.getDate()),
      hour = padZero(date.getHours()),
       min = padZero(date.getMinutes())
  return year+'-'+month+'-'+day+' '+hour+':'+min+'\n'
}

var padZero = function(number){
  var paddedNum = ""
  if (number.toString().length === 2){
    return number
  } else {
    paddedNum = '0'.concat(number)
    return paddedNum
  }
}