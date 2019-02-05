import { render } from 'enzyme';
import * as React from 'react';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
    it('should render without crashing', () => {
        const result = render(<Sidebar />);

        expect(result).toBeTruthy();
    });
});
