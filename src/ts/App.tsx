import * as React from 'react';
import styled from 'styled-components';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';
import { IThemeConfiguration } from './theme/IThemeConfiguration';

const AppWrapper = styled.div`
    display              : grid;
    grid-template-columns: 20% 80%;
    height               : 100vh;
    background-color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#2f2f2f' : '#fdfdfd';
    }};
    color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#fdfdfd' : '#2f2f2f';
    }};
`;

export class App extends React.Component {
    public render() {
        return <AppWrapper>
            <Sidebar />
            <Home />
        </AppWrapper>;
    }
}
