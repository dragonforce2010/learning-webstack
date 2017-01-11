const electron = require('electron')
import { BrowserWindow, app } from electron

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