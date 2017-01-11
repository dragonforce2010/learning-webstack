const { app, BrowserWindow, ipcMain } = require('electron')

require('electron-reload')(__dirname)

let win
app.on('ready', _ => {
    win = new BrowserWindow({
        height: 400,
        width: 400
    })

    win.loadURL(`file://${__dirname}/countdown.html`)

    win.on('close', _ => {
        win = null
    })
})

ipcMain.on('countdown-start', _ => {
    console.log('Countdown starting!')
    var count = 10
    while (count >= 0) {
        setTimeout(function() {
            win.webContent.send('countdown', count)
            count--
        }, 1);
    }
})