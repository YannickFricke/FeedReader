import {remote} from 'electron';
import * as React from 'react';

export class App extends React.Component<{}, {}> {
    public render() {
        return <div>
                Got the following configuration path: {remote.app.getPath('userData')}
            </div>;
    }
}
