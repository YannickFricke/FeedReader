import * as React from 'react';
import styled from 'styled-components';
import MenuEntry from './MenuEntry';

export const MenuWrapper = styled.ul`
    list-style: none;
    margin    : 0;
    padding   : 0;
`;

export class Menu extends React.Component {
    public render() {
        return <MenuWrapper>
            <MenuEntry active>Home</MenuEntry>
            <MenuEntry>Settings</MenuEntry>
        </MenuWrapper>;
    }
}
