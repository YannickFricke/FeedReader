import * as React from 'react';

export class Sidebar extends React.Component {
    public render() {
        return <aside>
            <div id="addContainer">
                <div id={'logo'} />
                <div id="heading">FeedReader</div>
            </div>
        </aside>;
    }
}
