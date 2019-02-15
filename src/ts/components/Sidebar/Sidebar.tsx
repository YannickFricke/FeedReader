import * as React from 'react';
import styled from 'styled-components';
import LogoImage from '../../../icons/png/32x32.png';
import { IThemeConfiguration } from '../../theme/IThemeConfiguration';
import { Menu } from '../menu/Menu';

export const BrightSidebarWrapper = styled.aside`
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #212121;
`;

const DarkSidebarWrapper = styled(BrightSidebarWrapper)`
    border-right-color: #f0f0f0;
`;

export const SideBarContainer = styled.div`
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

export class Sidebar extends React.Component<IThemeConfiguration> {

    public render() {
        const SidebarComponent = this.props.theme &&
                                 this.props.theme.darkmode ?
                                 DarkSidebarWrapper :
                                 BrightSidebarWrapper;

        return <SidebarComponent>
                <SideBarContainer>
                    <Logo id={'logo'} src={LogoImage} alt={'logo'} width={'32px'} height={'32px'} />
                    <Heading>FeedReader</Heading>
                </SideBarContainer>
                <Menu />
            </SidebarComponent>;
    }
}
