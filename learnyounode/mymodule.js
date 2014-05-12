var fs = require('fs')
var path = require('path')

module.exports = function(dirPath, filterBy, callback) {
  var keptFiles = []
  fs.readdir(dirPath, function(err,data){
    if (err) return callback(err);
    for(i=0; i<data.length; i++){
      if(path.extname(data[i]) === '.'+filterBy){
        keptFiles.push(data[i])
      }
    }
    return callback(null, keptFiles)
  })
}
