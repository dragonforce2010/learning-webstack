const electron = require('electron')
import { BrowserWindow } from electron

const app = electron.app

app.on('ready', _ => {
    let win = new BrowserWindow({
        height: 400,
        width: 400
    })

    win.loadURL(`file://${__dirname__}/countdownload.html`)
    win.on('close', _ => {
        win = null
    })
})