import * as React from 'react';
import * as ReactDom from 'react-dom';
import {App} from './ts/App';

// Load the styles
import './sass/app.scss';
import './vendor/semantic-ui/semantic.css';

ReactDom.render(
	<App />,
	document.getElementById('app'),
);
