import * as React from 'react';
import * as ReactDom from 'react-dom';

// Provides the store (state) to all subcomponents
import {Provider} from 'react-redux';

// Application store (state management)
import {createDefaultStore} from './ts/store/Store';

// Application components
import {App} from './ts/App';

// Load the styles
import './sass/app.scss';
import './vendor/semantic-ui/semantic.css';

ReactDom.render(
	<Provider store={createDefaultStore()}>
		<App/>
	</Provider>,
	document.getElementById('app'),
);
