import {app, BrowserWindow} from 'electron'

declare var __dirname: string;

let mainWindow: BrowserWindow;

function onReady() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'FeedReader'
    });

    let urlToLoad = '';

    if (process.env.NODE_ENV === 'development') {
        urlToLoad = 'http://localhost:8080';
    } else {
        urlToLoad = `file://${__dirname}/index.html`;
    }

    mainWindow.loadURL(urlToLoad);
    mainWindow.on('close', function() {
        app.quit();
    })
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit());
