import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IApplicationState } from '../store/StoreType';
import { ITheme } from './ITheme';

export interface IConnectedThemeProviderProps {
    theme?: ITheme;
}

/**
 * A ThemeProvider for styled-components
 *
 * @author Yannick Fricke <yannickfricke@googlemail.com>
 * @license MIT
 */
export class ConnectedThemeProvider extends React.Component<IConnectedThemeProviderProps> {
    public render() {
        return <ThemeProvider theme={this.props.theme}>
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
export const mapStateToProps = (state: IApplicationState): IConnectedThemeProviderProps => {
    return {
        theme: {
            darkmode: state.app.darkmode,
        },
    };
};

/**
 * Returns the connected ThemeProvider component
 * @author Yannick Fricke <yannickfricke@googlemail.com>
 * @license MIT
 */
export default connect(mapStateToProps)(ConnectedThemeProvider);
