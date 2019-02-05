import * as React from 'react';
import styled from 'styled-components';
import LogoImage from '../../icons/png/32x32.png';
import { IThemeConfiguration } from '../theme/IThemeConfiguration';
import { Menu } from './Menu';

const SidebarWrapper = styled.aside`
    border-right: 1px solid ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#f0f0f0' : '#212121';
    }};
`;

const SidebarContainer = styled.div`
    border-bottom: 1px solid ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#f0f0f0' : '#212121';
    }};
    width: auto;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Logo = styled.img`
    margin-right: 10px;
`;

const Heading = styled.div`
    font-size: 25px;
`;

export class Sidebar extends React.Component {
    public render() {
        return <SidebarWrapper>
            <SidebarContainer>
                <Logo id={'logo'} src={LogoImage} alt={'logo'} width={'32px'} height={'32px'} />
                <Heading>FeedReader</Heading>
            </SidebarContainer>
            <Menu />
        </SidebarWrapper>;
    }
}
