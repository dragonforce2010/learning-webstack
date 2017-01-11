var https = require('https')
var fs = require('fs')
var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: 'GET'
}

var req = https.request(options, function(res) {
    var responseBody = ""
    console.log("Response from server started...")
    console.log("Server status: " + res.statusCode)
    console.log("Response headers: %j", res.headers)

    res.setEncoding("UTF-8")

    res.on('data', function(chunk) {
        console.log(`chunk data length: ${chunk.length}`)
        responseBody += chunk
    })

    res.on('end', function() {
        fs.writeFile('george-washington.html', responseBody, function(err) {
            if(err) {
                throw err
            }
            console.log('File downloaded')
        })
    })

    res.on('error', function(err) {
        console.log('problem with request!')
    })
})
req.end()