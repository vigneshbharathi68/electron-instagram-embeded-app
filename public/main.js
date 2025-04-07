const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('dotenv').config();

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
			enableRemoteModule: true,
			frame: false,
      webSecurity: false,
      webviewTag: true
    }
  });

  if (isDev) {
    // 👇 Load from localhost:3000 (React dev server)
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools({mode: 'detach'});
  } else {
    // 👇 Load your React production build
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
  }

  win.setMenuBarVisibility(false);
}

app.commandLine.appendSwitch('disable-site-isolation-trials');


app.whenReady().then(() => {
  createWindow();
});


ipcMain.handle('get-access-token', () => {
  return process.env.INSTAGRAM_ACCESS_TOKEN;
});