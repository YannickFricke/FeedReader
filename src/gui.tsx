import * as React from 'react';
import * as ReactDom from 'react-dom';

ReactDom.render(
    <div>{process.versions.node}</div>,
    document.getElementById('app')
);
