import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { TOGGLE_DARKMODE } from './store/actions/AppAction';
import { ITheme } from './theme/ITheme';
import { IThemeConfiguration } from './theme/IThemeConfiguration';

export interface IAppDispatchProperties {
    toggleDarkmode(): void;
}

const APP_CONTAINER = styled.div`
    display              : grid;
    grid-template-columns: 20% 30% 50%;
    height               : 100vh;
    background-color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#212121' : '#f0f0f0';
    }};
    color: ${(props: IThemeConfiguration) => {
        return props.theme.darkmode ? '#f0f0f0' : 'black';
    }};
`;

APP_CONTAINER.defaultProps = {
    theme: {
        darkmode: false,
    } as ITheme,
};

export class App extends React.Component<IAppDispatchProperties> {
    public render() {
        return <APP_CONTAINER>
            <Sidebar />
            <div id="content" onClick={() => this.props.toggleDarkmode()}>Content!</div>
            <div id="reading">READING!</div>
        </APP_CONTAINER>;
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProperties => {
    return {
        toggleDarkmode: () => { dispatch(TOGGLE_DARKMODE); },
    };
};

export default connect(undefined, mapDispatchToProps)(App);
