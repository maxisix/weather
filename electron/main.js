const electron = require('electron')
const {app, BrowserWindow} = electron

process.env.GOOGLE_API_KEY = ""; // API pour utiliser la GEOLOC

app.on('ready', () => {

    let win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadURL(`file://${__dirname}/index.html`)

    win.webContents.openDevTools()

})