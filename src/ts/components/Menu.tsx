import * as React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.ul`
    list-style: none;
    margin    : 0;
    padding   : 0;
`;

const MenuEntry = styled.li`
    font-size: 1.25em;
    padding  : 0px 10px 0 30px;

    &.active {
        color           : orange;
        background-color: gray;
    }
`;

export class Menu extends React.Component {
    public render() {
        return <MenuWrapper>
            <MenuEntry className={'active'}>Home</MenuEntry>
            <MenuEntry>Settings</MenuEntry>
        </MenuWrapper>;
    }
}
