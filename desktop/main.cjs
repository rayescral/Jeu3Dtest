// Version « application » du jeu : une fenêtre dédiée (Electron) qui affiche index.html,
// en plein écran, sans barre de navigateur. Les sauvegardes restent sur l'ordinateur.
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 900, show: false, backgroundColor: '#0f1f17',
    title: 'Tennis Club Simulator', autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { backgroundThrottling: false },
  });
  Menu.setApplicationMenu(null);
  win.once('ready-to-show', () => { win.setFullScreen(true); win.show(); });
  win.loadFile(path.join(__dirname, 'index.html'));
  // F11 : plein écran / fenêtre.
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
