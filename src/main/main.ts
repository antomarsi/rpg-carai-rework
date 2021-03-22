import { app, BrowserWindow, ipcMain } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}
let mainWindow: BrowserWindow | null;

let editorWindow: BrowserWindow | null;

const createEditorWindow = (): void => {
  if (editorWindow) return;

  editorWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    title: 'RPG Carai Editor',
    backgroundColor: '#352F44',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  editorWindow.loadURL(`${MAIN_WINDOW_WEBPACK_ENTRY}#/editor`);
  editorWindow.on('ready-to-show', () => editorWindow.show());
  editorWindow.on('closed', () => {
    editorWindow = null;
  });
};

ipcMain.on('open-editor', (event, args) => {
  console.log('Opening Editor');
  createEditorWindow();
});

const createWindow = (): void => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    backgroundColor: '#352F44',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Show window when its ready to
  mainWindow.on('ready-to-show', () => mainWindow.show());

  mainWindow.on('closed', () => {
    mainWindow = null;
    editorWindow?.close();
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
