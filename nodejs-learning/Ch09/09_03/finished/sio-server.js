var express = require('express')
var http = require('http')
var app = express()
var server = http.createServer(app).listen(3000)
var io = require('socket.io')(server)

app.use(express.static("./public"))

io.on("connection", function() {
    socket.emit('message', 'welcome to cyber chat!')
    socket.on('chat', function(message) {
        socket.broadcast.emit('message:', message)
    })
})

console.log("starting socket App...")