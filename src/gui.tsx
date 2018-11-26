import * as React from 'react';
import * as ReactDom from 'react-dom';
import {App} from './ts/App';

// Load the styles
import './vendor/semantic-ui/semantic.css';
import './sass/app.scss';

ReactDom.render(
    <App />,
    document.getElementById('app')
);
