import {remote} from 'electron';
import moment from 'moment';
import * as React from 'react';
import RssParser from 'rss-parser';
import { IFeed } from './definitions/IFeed';

interface IAppState {
    feed?: IFeed;
}

export class App extends React.Component<{}, IAppState, {}> {
    constructor(props) {
        super(props);
        this.state = {
            feed: undefined,
        };
    }

    public async componentWillMount() {
        const parser = new RssParser();
        const contents = await parser.parseURL('https://www.techatbloomberg.com/post-topic/open-source/feed/');

        const feed: IFeed = {
            name: contents.title,
            url: contents.feedUrl,
            posts: [],
            website: contents.link,
            lastBuildDate: new Date(contents.lastBuildDate),
        };

        // tslint:disable:no-console
        if (contents.items !== undefined) {
            contents.items.forEach((item) => {
                feed.posts.push({
                    title: item.title,
                    description: item.content as string,
                    link: item.link,
                    author: item.creator,
                    publishDate: new Date(item.pubDate as string),
                });
            });
        }

        this.setState({
            feed,
        });
    }

    public render() {
        if (this.state.feed === undefined) {
            return <div>Feed is loading</div>;
        }

        const posts: JSX.Element[] = [];

        let id = 1;

        console.log(this.state.feed);

        this.state.feed.posts.map((post) => {
            posts.push(
                <div key={id++} className="post">
                    <div className="author">
                    Written by: {post.author}
                    </div>
                    <div className="publishDate">
                        Published on: {moment(post.publishDate).format('DD.MM.YYYY HH:mm:ss')}
                    </div>
                    <div className="content">
                        <span dangerouslySetInnerHTML={{__html: post.description}}></span>
                    </div>
                </div>);
        });

        return <div>
            <div>Got the following configuration path: {remote.app.getPath('userData')}</div>
            <div>Showing feed: {this.state.feed.name}</div>
            {posts}
        </div>;
    }
}
