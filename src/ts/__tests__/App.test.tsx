import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { App, BrightAppContainer, DarkAppContainer } from '../App';
import { createDefaultStore } from '../store/Store';

import 'jest-enzyme';
import 'jest-styled-components';
import { TOGGLE_DARKMODE } from '../store/actions/AppAction';

let store;

beforeEach(() => {
    store = createDefaultStore(createMemoryHistory());
});

describe('App component', () => {
    it('renders the app', () => {
        const result = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(result).toBeTruthy();
    });

    it('should render with the bright background color as default', () => {
        const result = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(result.find(BrightAppContainer)).toHaveStyleRule('background-color', '#fdfdfd');
    });

    it('should render with the dark background color when the darkmode is activated', () => {
        store.dispatch(TOGGLE_DARKMODE);

        const result = mount(
            <Provider store={store}>
                <App theme={{darkmode: store.getState().app.darkmode}} />
            </Provider>,
        );

        expect(result.find(DarkAppContainer)).toHaveStyleRule('background-color', '#2f2f2f');
    });
});
