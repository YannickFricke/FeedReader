import { mount } from 'enzyme';
import * as React from 'react';
import MenuEntry from '../MenuEntry';

import 'jest-enzyme';
import 'jest-styled-components';

describe('MenuEntry', () => {
    it('should have a margin-top of 1.5em', () => {
        const result = mount(<MenuEntry />);

        expect(result).toHaveStyleRule('margin-top', '1.5em');
    });

    it('should have a margin-left of 25px', () => {
        const result = mount(<MenuEntry />);

        expect(result).toHaveStyleRule('margin-left', '25px');
    });

    it('should have an orange color when the entry is active', () => {
        const result = mount(<MenuEntry active />);

        expect(result).toHaveStyleRule('color', 'orange');
    });

    it('should not have an orange color when the entry is not active', () => {
        const result = mount(<MenuEntry active={false} />);

        expect(result).not.toHaveStyleRule('color', 'orange');
    });
});
