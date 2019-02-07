import { render } from 'enzyme';
import * as React from 'react';
import { Sidebar } from '../Sidebar';

import 'jest-enzyme';

describe('Sidebar', () => {
    it('should render without crashing', () => {
        const result = render(<Sidebar />);

        expect(result).toBeTruthy();
    });
});
