import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IThemeConfiguration } from '../theme/IThemeConfiguration';

const ContentStyle = styled.div`
    & {
        border-right: 1px solid ${(props: IThemeConfiguration) => {
            return props.theme.darkmode ? '#f0f0f0' : '#212121';
        }};
    }
`;

interface IContentProperties {
    onClick: () => void;
}

export class Content extends React.Component<IContentProperties> {
    public render() {
        return <ContentStyle id={'content'} onClick={this.props.onClick}>
            {this.props.children}
        </ContentStyle>;
    }
}

export default connect()(Content);
