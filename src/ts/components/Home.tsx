import * as React from 'react';
import styled from 'styled-components';
import Content from './Content';

const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
`;

export class Home extends React.Component {
    public render() {
        return <HomeWrapper>
            <Content />
            <div id="reading">READING!</div>
        </HomeWrapper>;
    }
}
