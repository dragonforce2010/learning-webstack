const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname)

app.on('ready', _ => {
    let win = new BrowserWindow({
        height: 400,
        width: 400
    })

    win.loadURL(`file://${__dirname}/countdown.html`)

    win.on('close', _ => {
        win = null
    })
})