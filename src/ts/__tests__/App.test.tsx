import {shallow} from 'enzyme';
import * as React from 'react';
import {App} from '../App';

it('renders the app', () => {
	const result = shallow(<App />);
	expect(result).toBeTruthy();
});
