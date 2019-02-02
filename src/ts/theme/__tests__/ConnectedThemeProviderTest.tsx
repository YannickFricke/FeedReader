import { RouterState } from 'connected-react-router';
import { mount } from 'enzyme';
import * as React from 'react';
import { IApplicationState } from '../../store/StoreType';
import { ConnectedThemeProviderComponent, mapStateToProps } from '../ConnectedThemeProviderComponent';
import { ITheme } from '../ITheme';

describe('ConnectedThemeProvider', () => {

    it('should render correctly', () => {
        const theme: ITheme = {
            darkmode: false,
        };

        const component = mount(<ConnectedThemeProviderComponent theme={theme}>
            <div id="test" />
        </ConnectedThemeProviderComponent>);

        expect(component).toBeTruthy();
    });

    it('should map the state to the properties', () => {
        const mockedState: IApplicationState = {
            router: {} as RouterState,
            app: {
                darkmode: false,
                feeds: [],
            },
        };

        const mappedState = mapStateToProps(mockedState);

        expect(mappedState).not.toBeUndefined();
    });
});
