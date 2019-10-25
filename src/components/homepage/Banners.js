import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';


function Banners() {
    return(
        <Wrapper>
           
        </Wrapper>
    )   
}
export default Banners;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:800px; width:270px;
    }
`