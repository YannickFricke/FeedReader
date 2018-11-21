import {app, BrowserWindow} from 'electron'

declare var __dirname: string;

let mainWindow: BrowserWindow;

function onReady() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'FeedReader'
    });

    const fileName = `file://${__dirname}/index.html`;
    mainWindow.loadURL(fileName);
    mainWindow.on('close', function() {
        app.quit();
    })
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit());
