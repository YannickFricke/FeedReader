import { mount } from 'enzyme';
import * as React from 'react';
import { App, mapDispatchToProps  } from '../App';
import { TOGGLE_DARKMODE } from '../store/actions/AppAction';

import 'jest-enzyme';
describe('App component', () => {
    it('renders the app', () => {
        const result = mount(<App toggleDarkmode={jest.fn()} />);

        expect(result).toBeTruthy();
    });

    it('should invoke the TOGGLE_DARKMODE function when clicking on the content', () => {
        const toggleDarkMode = jest.fn();
        const result = mount(<App toggleDarkmode={toggleDarkMode} />);

        result.find('Content').simulate('click');

        expect(toggleDarkMode).toBeCalled();
        expect(toggleDarkMode).toBeCalledTimes(1);
    });

    it('should map the state to the props', () => {
        const mockedDispatchFunction = jest.fn();

        const mapping = mapDispatchToProps(mockedDispatchFunction);

        mapping.toggleDarkmode();

        expect(mockedDispatchFunction).toBeCalled();
        expect(mockedDispatchFunction).toBeCalledTimes(1);
        expect(mockedDispatchFunction).toBeCalledWith(TOGGLE_DARKMODE);
    });
});
