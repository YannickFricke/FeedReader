import * as React from 'react';
import * as ReactDom from 'react-dom';

// Provides the store (state) to all subcomponents
import {Provider} from 'react-redux';

// Application store (state management)
import {createDefaultStore} from './ts/store/Store';

// Application components
import {App} from './ts/App';

// Load the styles
// tslint:disable:ordered-imports
import './vendor/semantic-ui/semantic.css';
import './sass/app.scss';
// tslint:enable:ordered-imports

ReactDom.render(
    <Provider store={createDefaultStore()}>
        <App/>
    </Provider>,
    document.getElementById('app'),
);
