const { app, BrowserWindow } = require('electron');
const client = require('discord-rich-presence')('575421590783787009');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: __dirname + '/resources/icon,jpg',
    frame: false,
    resizable: false
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

client.updatePresence({
  details: 'No one is around to help',
  largeImageKey: 'peaceful',
  largeImageText: 'Should I make life a bit easier for you?',
  startTimestamp: Date.now(),
  instance: true
});