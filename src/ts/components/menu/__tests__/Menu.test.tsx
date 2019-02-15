import { mount } from 'enzyme';
import * as React from 'react';
import { Menu } from '../Menu';

import 'jest-enzyme';
import 'jest-styled-components';

describe('Menu', () => {
    it('should render without crashing', () => {
        const result = mount(<Menu />);

        expect(result).toContainMatchingElement('ul');
        expect(result).toHaveLength(1);
        expect(result).toBeTruthy();
    });

    it('should not have any list points', () => {
        const result = mount(<Menu />);

        expect(result).toHaveStyleRule('list-style', 'none');
    });

    it('should have a margin of 0', () => {
        const result = mount(<Menu />);

        expect(result).toHaveStyleRule('margin', '0');
    });

    it('should have a padding of 0', () => {
        const result = mount(<Menu />);

        expect(result).toHaveStyleRule('padding', '0');
    });
});
