import * as React from 'react';
import styled from 'styled-components';
import { isNullOrUndefined } from 'util';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar/Sidebar';
import { IConnectedThemeProviderProps } from './theme/ConnectedThemeProvider';

export const BrightAppContainer = styled.div`
    display              : grid;
    grid-template-columns: 20% 80%;
    height               : 100vh;
    background-color     : #fdfdfd;
    color                : #2f2f2f;
`;

export const DarkAppContainer = styled(BrightAppContainer)`
    background-color: #2f2f2f;
    color           : #fdfdfd;
`;

export class App extends React.Component<IConnectedThemeProviderProps> {
    public render() {
        const AppContainer = !isNullOrUndefined(this.props.theme) && this.props.theme.darkmode ?
                                DarkAppContainer :
                                BrightAppContainer ;

        return <AppContainer>
            <Sidebar />
            <Home />
        </AppContainer>;
    }
}
