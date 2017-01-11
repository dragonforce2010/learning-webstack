var currentTime = 0
var waitTotalTime = 5000
var waitInterval = 50


var interval = setInterval(function() {
    currentTime += waitInterval
    var processPercentage = Math.floor((currentTime / waitTotalTime) * 100) 
    process.stdout.write(`Waiting... ...          ${processPercentage}%\n`)
}, waitInterval)

setTimeout(function() {
    clearInterval(interval)
    process.stdout.write("Tasks done!            100")
}, waitTotalTime);