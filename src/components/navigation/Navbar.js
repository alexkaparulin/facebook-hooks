import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

const Navbar = ({children})=> {
    return(
      <Wrapper>
          {children}
      </Wrapper>
    )   
}
export default Navbar;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:center;
        position:sticky; top:0; z-index:1;
        background-color: #4267b2;
        border-bottom: 1px solid #29487d;
        height:45px;
    }   
`