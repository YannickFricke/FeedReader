import {app, BrowserWindow} from 'electron';
import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';
import {join} from 'path';

declare var __dirname: string;

let mainWindow: BrowserWindow;

function onReady() {

	const iconPath = join(__dirname, '..', 'src', 'icons', 'png', '64x64.png');

	mainWindow = new BrowserWindow({
		height: 600,
		icon: iconPath,
		title: 'FeedReader',
		width: 800,
	});

	let urlToLoad = '';

	if (process.env.NODE_ENV === 'development') {
		urlToLoad = 'http://localhost:8080';

		// Load developer extensions
		installDeveloperTools();
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

function installDeveloperTools() {
	[REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach((element) => {
		/* tslint:disable */
		installExtension(element).then((name) => {
			console.log(`Added extension: ${name}`);
		}).catch((err) => {
			console.log('An error occurred: ', err);
		});
		/* tslint:enable */
	});
}
