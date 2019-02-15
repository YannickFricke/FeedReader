import { mount } from 'enzyme';
import * as React from 'react';
import { Sidebar, SideBarContainer } from '../Sidebar';

import 'jest-enzyme';
import 'jest-styled-components';

describe('Sidebar', () => {
    it('should render without crashing', () => {
        const result = mount(<Sidebar theme={{darkmode: false}} />);

        expect(result).toBeTruthy();
    });

    it('should have a dark border color when the darkmode is disabled', () => {
        const result = mount(<Sidebar theme={{darkmode: false}} />);

        expect(result).toHaveStyleRule('border-right-color', '#212121');
    });

    it('should have a bright border color when the darkmode is enabled', () => {
        const result = mount(<Sidebar theme={{darkmode: true}} />);

        expect(result).toHaveStyleRule('border-right-color', '#f0f0f0');
    });
});

describe('SidebarContainer', () => {
    it('should have a width of auto', () => {
        const result = mount(<Sidebar/>);

        expect(result.find(SideBarContainer)).toHaveStyleRule('width', 'auto');
    });
    it('should have a padding of 15px', () => {
        const result = mount(<Sidebar/>);

        expect(result.find(SideBarContainer)).toHaveStyleRule('padding', '15px');
    });
    it('should displayed as flex', () => {
        const result = mount(<Sidebar/>);

        expect(result.find(SideBarContainer)).toHaveStyleRule('display', 'flex');
    });
    it('should have a flexible wrapping', () => {
        const result = mount(<Sidebar/>);

        expect(result.find(SideBarContainer)).toHaveStyleRule('flex-wrap', 'wrap');
    });
    it('should have centered contents', () => {
        const result = mount(<Sidebar/>);

        expect(result.find(SideBarContainer)).toHaveStyleRule('justify-content', 'center');
    });
});
