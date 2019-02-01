import { mount } from 'enzyme';
import * as React from 'react';
import { App } from '../App';

describe('App component', () => {
    it('renders the app', () => {
        const result = mount(<App toggleDarkmode={jest.fn()} />);

        expect(result).toBeTruthy();
    });

    it('should invoke the TOGGLE_DARKMODE function when clicking on the content', () => {
        const toggleDarkMode = jest.fn();
        const result = mount(<App toggleDarkmode={toggleDarkMode} />);

        result.find('#content').simulate('click');

        expect(toggleDarkMode).toBeCalled();
        expect(toggleDarkMode).toBeCalledTimes(1);
});
});
