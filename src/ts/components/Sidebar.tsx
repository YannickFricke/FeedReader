import * as React from 'react';
import styled from 'styled-components';
import Logo from '../../icons/png/32x32.png';
import { IThemeConfiguration } from '../theme/IThemeConfiguration';

const SidebarWrapper = styled.aside`
    border-right: 1px solid ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#f0f0f0' : '#212121';
    }};

    #addContainer {
        border-bottom: 1px solid ${(props: IThemeConfiguration) => {
            return props.theme.darkmode ? '#f0f0f0' : '#212121';
        }};
        width: auto;
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #heading {
        font-size: 25px;
    }
`;

export class Sidebar extends React.Component {
    public render() {
        return <SidebarWrapper>
            <div id="addContainer">
                <img src={Logo} alt={'logo'} width={'32px'} height={'32px'} />
                <div id="heading">FeedReader</div>
            </div>
        </SidebarWrapper>;
    }
}
