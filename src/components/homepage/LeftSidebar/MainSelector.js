import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';


function MainSelector() {
    return(
        <Wrapper>
            <Row>
                <Img></Img>   
                <P>News Feed</P>
            </Row>
            <Row>
                <Img></Img>
                <P>Messenger</P>
            </Row>
            <Row>
                <Img></Img>
                <P>Watch</P>
            </Row>
            <Row>
                <Img></Img>
                <P>Marketplace</P>
            </Row>
        </Wrapper>
    )   
}
export default MainSelector;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:800px; width:180px;
    }
`
const Row = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        border:1px solid blue;
        border-radius:100%;
        margin-right:5px;
        height:25px; width:25px;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:11px; font-weight:600;
    }
`