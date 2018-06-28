const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow
let winOptions = {
  width: 900,
  height: 680,
  backgroundColor: '#9400D3'
}
let aboutOptions = {
  applicationName: 'Jet Stream',
  applicationVersion: '0.0.1'
}

createWindow = () => {
  mainWindow = new BrowserWindow(winOptions);
  mainWindow.loadURL(isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '..build/index.html')}`);

  // MacOs Only
  // app.setAboutPanelOptions(aboutOptions);

  mainWindow.on('closed', () => mainWindow = null);

}

app.on('ready', createWindow);

  // MacOs Only
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (mainWindow === null){
    createWindow();
  }
});
