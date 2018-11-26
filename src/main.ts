import {app, BrowserWindow} from 'electron';
import {join} from 'path';

declare var __dirname: string;

let mainWindow: BrowserWindow;

function onReady() {

	let iconPath = join(__dirname, '..', 'src', 'icons', 'png', '64x64.png');

	mainWindow = new BrowserWindow({
		height: 600,
		icon: iconPath,
		title: 'FeedReader',
		width: 800,
	});

	let urlToLoad = '';

	if (process.env.NODE_ENV === 'development') {
		urlToLoad = 'http://localhost:8080';
	} else {
		urlToLoad = `file://${__dirname}/index.html`;
	}

	mainWindow.loadURL(urlToLoad);
	mainWindow.on('close', () => {
		app.quit();
	});
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => app.quit());
