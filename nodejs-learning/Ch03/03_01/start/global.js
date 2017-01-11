/*var hello = "hello World from Node JS "
var justNode = hello.slice(17)
console.log(`Rock on World from ${justNode}`)
console.log(__dirname)
console.log(__filename)*/

var path = require("path")
console.log(`Path:${path.basename(__filename)}`)