import * as React from 'react';
import styled from 'styled-components';
import { isNullOrUndefined } from 'util';

export const NormalMenuEntry = styled.li`
font-size  : 1.5vh;
margin-top : 1.5em;
margin-left: 25px;
`;

export const ActiveMenuEntry = styled(NormalMenuEntry)`
    color     : orange;
`;

interface IMenuEntryProps {
    active?: boolean;
}

export default class MenuEntry extends React.Component<IMenuEntryProps> {
    public render() {
        const Component = this.getComponent(this.props.active);

        return <Component>
            {this.props.children}
        </Component>;
    }

    private getComponent(active?: boolean) {
        if (isNullOrUndefined(active)) {
            return NormalMenuEntry;
        }

        return active ? ActiveMenuEntry : NormalMenuEntry;
    }
}
