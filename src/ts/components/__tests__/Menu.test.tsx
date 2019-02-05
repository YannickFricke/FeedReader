import { mount } from 'enzyme';
import * as React from 'react';
import { Menu } from '../Menu';

describe('Menu', () => {
    it('should render without crashing', () => {
        const result = mount(<Menu />);

        // expect(result).toContainMatchingElement('ul');
        expect(result).toHaveLength(1);
        expect(result).toBeTruthy();
    });
});
