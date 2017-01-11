var fs = require('fs')
var path = require('path')

fs.readdir('./lib', function(err, files){
    files.forEach(function(filename){
        var file = path.join(__dirname, 'lib', filename)
        var stats = fs.statSync(file)
        if(stats.isFile() && filename !== '.DS_Store'){
            fs.readFile(file, 'UTF-8', function(err, content) {
                console.log(content)
            })
        }
    })
})