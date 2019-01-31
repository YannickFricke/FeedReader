import classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Sidebar } from './components/Sidebar';
import { TOGGLE_DARKMODE } from './store/actions/AppAction';
import { IAppStoreState } from './store/StoreType';

interface IAppStateProperties {
    darkmode: boolean;
}

interface IAppDispatchProperties {
    toggleDarkmode(): void;
}

export class App extends React.Component<IAppStateProperties & IAppDispatchProperties> {
    public render() {
        const classes = classNames({
            darkmode: this.props.darkmode,
        });

        return <div id="app" className={classes}>
                <Sidebar />
                <div id="content" onClick={() => this.props.toggleDarkmode()}></div>
            </div>;
    }
}

const mapStateToProps = (state: IAppStoreState): IAppStateProperties => {
    return {
        darkmode: state.darkmode,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IAppDispatchProperties => {
    return {
        toggleDarkmode: () => { dispatch(TOGGLE_DARKMODE); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
