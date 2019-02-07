import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import ConnectedThemeProvider from './ts/theme/ConnectedThemeProviderComponent';

// Provides the store (state) to all subcomponents
import { Provider } from 'react-redux';

// Application store (state management)
import { createDefaultStore } from './ts/store/Store';

// Application components
import { App } from './ts/App';

import { createBrowserHistory } from 'history';

const GLOBALSTYLE = createGlobalStyle`
    html,
    body,
    #root {
        font-family: Arial, Helvetica, sans-serif;
        padding    : 0;
        margin     : 0;
        height     : 100vh;
        width      : 100vw;
    }

    * {
        cursor: default;
    }
`;

const reduxStore = createDefaultStore(createBrowserHistory());

ReactDom.render(
    <Provider store={reduxStore}>
        <ConnectedThemeProvider>
            <GLOBALSTYLE />
            <App />
        </ConnectedThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
