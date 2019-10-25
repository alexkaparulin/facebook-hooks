import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';


function Shortcuts() {
    return(
        <Wrapper>
            
        </Wrapper>
    )   
}
export default Shortcuts;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:800px; width:180px;
    }
`