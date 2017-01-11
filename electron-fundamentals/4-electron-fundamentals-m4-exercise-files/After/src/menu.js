const electron = require('electron')

const images = require('./images')

const { app } = electron

function enabledCycleEffect(items) {
  const nonEffectMenuOffset = 2
  const selectedIndex = items.findIndex(item => item.checked)
  const nextIndex = selectedIndex + 1 < items.length ? selectedIndex + 1 : nonEffectMenuOffset
  items[nextIndex].checked = true
}

module.exports = mainWindow => {
  const template = [
    {
      label: 'Effects',
      submenu: [
        {
          label: 'Cycle',
          accelerator: 'Shift+CmdOrCtrl+E',
          click: menuItem => {
            enabledCycleEffect(menuItem.menu.items)
            mainWindow.webContents.send('effect-cycle')
          }
        },
        { type: 'separator' },
        {
          label: 'Vanilla',
          type: 'radio',
          click: _ => mainWindow.webContents.send('effect-choose')
        },
        {
          label: 'Ascii',
          type: 'radio',
          click: _ => mainWindow.webContents.send('effect-choose', 'ascii')
        },
        {
          label: 'Daltonize',
          type: 'radio',
          click: _ => mainWindow.webContents.send('effect-choose', 'daltonize')
        },
        {
          label: 'Hex',
          type: 'radio',
          click: _ => mainWindow.webContents.send('effect-choose', 'hex')
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Photos Directory',
          click: _ => images.openDir(images.getPicturesDir(app))
        }
      ]
    }
  ]

  if (process.platform === 'darwin') {
    const name = app.getName()
    template.unshift({
      label: name,
      submenu: [
        {
          label: 'About ' + name,
          role: 'about'
        },
        { type: 'separator' },
        {
          label: 'Hide ' + name,
          accelerator: 'Command+H',
          role: 'hide'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          role: 'hideothers'
        },
        {
          label: 'Show All',
          role: 'unhide'
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: _ => { app.quit() }
        }
      ]
    })
  }

  return template
}
