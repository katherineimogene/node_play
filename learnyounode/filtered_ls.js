var fs = require('fs')
var path = require('path')

// 5. FILTERED LS
var dirPath = process.argv[2]
var filterBy = process.argv[3]
fs.readdir(dirPath, function(err,data){
  if (err) throw err;
  for(i=0; i<data.length; i++){
    if(path.extname(data[i]) === '.'+filterBy){
      console.log(data[i])
    }
  }
})

