import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IFeed } from '../definitions/IFeed';
import { IPost } from '../definitions/IPost';
import { IApplicationState } from '../store/StoreType';
import { IThemeConfiguration } from '../theme/IThemeConfiguration';

const ContentWrapper = styled.div`
    border-right: 1px solid ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#f0f0f0' : '#212121';
    }};
`;

interface IContentProperties {
    posts: IPost[];
}

export class Content extends React.Component<IContentProperties> {
    public render() {
        if (this.props.posts.length === 0) {
            return <ContentWrapper style={{
                color: 'grey',
                textAlign: 'center',
                paddingTop: '10vh',
            }}>
                We don't have any posts
            </ContentWrapper>;
        }

        return <ContentWrapper>
            {this.props.children}
        </ContentWrapper>;
    }
}

const extractPostsFromState = (state: IApplicationState): IPost[] => {
    const posts: IPost[] = [];

    state.app.feeds.forEach((feed: IFeed) => {
        posts.concat(feed.posts);
    });

    return posts;
};

const mapStateToProps = (state: IApplicationState): IContentProperties => {
    return {
        posts: extractPostsFromState(state),
    };
};

export default connect(mapStateToProps)(Content);
