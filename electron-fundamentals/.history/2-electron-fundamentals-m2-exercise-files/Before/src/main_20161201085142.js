const electron = require('electron')
import { BrowserWindow } from electron

const app = electron.app

app.on('ready', _ => {
    new BrowserWindow({
        height: 400,
        width: 400
    })
})