var spawn = require('child_process').spawn

var nodeProcess = spawn('node', ['alwaysTalking'])

nodeProcess.stdout.on('data', function(data) {
    console.log(`STDOUT: ${data.toString()}`)
})

nodeProcess.on('exit', function() {
    console.log('Child process has ended')
    process.exit()
})

setTimeout(function() {
    nodeProcess.stdin.write('stop')
}, 50000);
