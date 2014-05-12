// 6. MAKE IT MODULAR
var fs = require('fs')
var path = require('path')
var mymodule = require('./mymodule.js')

var dirPath = process.argv[2]
var filterBy = process.argv[3]
mymodule(dirPath, filterBy, function(err,keptFileList){
  if (err) throw err;
  for(i=0;i<keptFileList.length;i++){
    console.log(keptFileList[i])
  }
})
