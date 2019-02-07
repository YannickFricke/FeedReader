import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from '../App';
import { createDefaultStore } from '../store/Store';

import 'jest-enzyme';
import 'jest-styled-components';

const store = createDefaultStore(createMemoryHistory());

describe('App component', () => {
    it('renders the app', () => {
        const result = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(result).toBeTruthy();
    });

    it('should render the right background color', () => {
        const result = mount(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(result.find('App')).toHaveStyleRule('background-color', '#fdfdfd');
    });
});
