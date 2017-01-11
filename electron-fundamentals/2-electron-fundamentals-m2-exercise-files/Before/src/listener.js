const { ipcRenderer } = require('electron')

document.getElementById('start').addEventListener('click', _ => {
    ipcRenderer.send('countdown-start')
    console.log("send out the countdonw-start event")
})

ipcRenderer.on('countdown', (evt, count) => {
    document.getElementById('count').innerHTML = count
})