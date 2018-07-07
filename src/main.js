
const {app, BrowserWindow} = require('electron');


app.on('ready', () => {
    const mainWindow = new BrowserWindow({width: 1000, height: 600});
    mainWindow.loadURL('http://facebook.com');
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

process.on('uncaughtException', (err) => {
   console.error(err);
});