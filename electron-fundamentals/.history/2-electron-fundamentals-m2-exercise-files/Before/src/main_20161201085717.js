const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', _ => {
    let win = new BrowserWindow({
        height: 400,
        width: 400
    })

    win.loadURL(`file://${__dirname__}/countdown.html`)

    win.on('close', _ => {
        win = null
    })
})