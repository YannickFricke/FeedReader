import { mount } from 'enzyme';
import * as React from 'react';
import { App } from '../App';

describe('App component', () => {
    it('renders the app', () => {
        const result = mount(<App darkmode={false} toggleDarkmode={jest.fn()} />);

        expect(result).toBeTruthy();
    });
});
