var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)

var person = {
    name: '',
    saying: []
}

rl.question("what is the person\'s name:", function(answer) {
    person.name = answer
    rl.setPrompt(`What does ${person.name} say`)
    rl.prompt()
    rl.on('line', function(saying) {
        person.saying.push(saying)
        if(saying.trim().toLowerCase() === 'exit') {
            rl.close()
        } else {
            rl.setPrompt(`what else does ${person.name} say?`)
            rl.prompt()
        }
    })
})

rl.on('close', function() {
    console.log("process is exiting...")
    process.exit()
})