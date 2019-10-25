import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function SelectBar() {
    return(
      <Wrapper>
         
      </Wrapper>
    )   
}
export default SelectBar;

const Wrapper = styled.div`
  @media (min-width: ${laptop}) {
    display:flex;
    border:1px solid red;
  }
`