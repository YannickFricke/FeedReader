import { RouterState } from 'connected-react-router';
import { mount } from 'enzyme';
import * as React from 'react';
import { IApplicationState } from '../../store/StoreType';
import { ConnectedThemeProvider, mapStateToProps } from '../ConnectedThemeProvider';
import { ITheme } from '../ITheme';

import 'jest-enzyme';

describe('ConnectedThemeProviderComponent', () => {
    it('should render correctly', () => {
        const theme: ITheme = {
            darkmode: false,
        };

        const component = mount(<ConnectedThemeProvider theme={theme} />);

        expect(component).toBeTruthy();
    });

    it('should render the children', () => {
        const theme: ITheme = {
            darkmode: false,
        };

        const component = mount(<ConnectedThemeProvider theme={theme}>
            <div id="test" />
        </ConnectedThemeProvider>);
        expect(component.contains(<div id="test" />)).toBeTruthy();
    });

    it('should map the state to the properties', () => {
        const mockedState: IApplicationState = {
            router: {} as RouterState,
            app: {
                darkmode: false,
                feeds: [],
                currentPost: undefined,
            },
        };

        const mappedState = mapStateToProps(mockedState);

        expect(mappedState).not.toBeUndefined();
    });
});
