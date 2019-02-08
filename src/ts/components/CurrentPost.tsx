import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IPost } from '../definitions/IPost';
import { IApplicationState } from '../store/StoreType';

interface ICurrentPostProperties {
    currentPost: IPost | undefined;
}

const NoPostsWrapper = styled.div`
    color          : grey;
    text-align     : center;
    display        : flex;
    justify-content: center;
    flex-direction : column;
`;

export class CurrentPost extends React.Component<ICurrentPostProperties> {
    public render() {
        if (this.props.currentPost === undefined) {
            return <NoPostsWrapper>
                Currently no post is selected
            </NoPostsWrapper>;
        }

        // TODO: Add styling for the selected post
        return undefined;
    }
}

const mapStateToProps = (state: IApplicationState): ICurrentPostProperties => {
    return {
        currentPost: state.app.currentPost,
    };
};

export default connect(mapStateToProps)(CurrentPost);
