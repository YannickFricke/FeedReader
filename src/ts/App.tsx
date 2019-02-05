import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { Content } from './components/Content';
import Sidebar from './components/Sidebar';
import { TOGGLE_DARKMODE } from './store/actions/AppAction';
import { IThemeConfiguration } from './theme/IThemeConfiguration';

export interface IAppDispatchProperties {
    toggleDarkmode(): void;
}

const AppContainer = styled.div`
    display              : grid;
    grid-template-columns: 20% 30% 50%;
    height               : 100vh;
    background-color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#2f2f2f' : '#fdfdfd';
    }};
    color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#fdfdfd' : '#2f2f2f';
    }};
`;

export class App extends React.Component<IAppDispatchProperties> {
    public render() {
        return <AppContainer>
            <Sidebar />
            <Content onClick={() => this.props.toggleDarkmode()}>Content!</Content>
            <div id="reading">READING!</div>
        </AppContainer>;
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProperties => {
    return {
        toggleDarkmode: () => { dispatch(TOGGLE_DARKMODE); },
    };
};

export default connect(undefined, mapDispatchToProps)(App);
