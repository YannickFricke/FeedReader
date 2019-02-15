import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { isNullOrUndefined } from 'util';
import { IFeed } from '../definitions/IFeed';
import { IPost } from '../definitions/IPost';
import { IApplicationState } from '../store/StoreType';
import { IThemeConfiguration } from '../theme/IThemeConfiguration';

export const BrightContentWrapper = styled.div`
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #212121;
`;

export const DarkContentWrapper = styled(BrightContentWrapper)`
    border-right-color: #f0f0f0;
`;

export const BrightNoPostsWrapper = styled(BrightContentWrapper)`
    color          : grey;
    text-align     : center;
    display        : flex;
    justify-content: center;
    flex-direction : column;
`;

export const DarkNoPostsWrapper = styled(BrightNoPostsWrapper)`
    border-right-color: #f0f0f0;
`;

interface IContentProperties {
    posts: IPost[];
}

export class Content extends React.Component<IContentProperties & IThemeConfiguration> {
    public render() {
        if (this.props.posts.length === 0) {
            const NoPostsWrapper = !isNullOrUndefined(this.props.theme) && this.props.theme.darkmode ?
                                    DarkNoPostsWrapper :
                                    BrightNoPostsWrapper;

            return <NoPostsWrapper>
                No posts to display.
                <br />
                Start with adding a new feed.
            </NoPostsWrapper>;
        }

        const ContentWrapper = !isNullOrUndefined(this.props.theme) && this.props.theme.darkmode ?
                                DarkContentWrapper :
                                BrightContentWrapper;

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
