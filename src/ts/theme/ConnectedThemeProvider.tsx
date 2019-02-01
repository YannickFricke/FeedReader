import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IApplicationState } from '../store/StoreType';
import { ITheme } from './ITheme';

/**
 * A ThemeProvider for styled-components
 *
 * @author Yannick Fricke <yannickfricke@googlemail.com>
 * @license MIT
 */
export class ConnectedThemeProvider extends React.Component<ITheme> {
    public render() {
        return <ThemeProvider theme={{
            darkmode: this.props.darkmode,
        }}>
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        </ThemeProvider>;
    }
}

/**
 * A function to map the current application state to the properties of the ConnectedThemeProvider
 *
 * @param state The current state from the redux store
 * @author Yannick Fricke <yannickfricke@googlemail.com>
 * @license MIT
 */
const mapStateToProps = (state: IApplicationState): ITheme => {
    return {
        darkmode: state.app.darkmode,
    };
};

/**
 * Returns the connected ThemeProvider component
 * @author Yannick Fricke <yannickfricke@googlemail.com>
 * @license MIT
 */
export default connect(mapStateToProps)(ConnectedThemeProvider);
