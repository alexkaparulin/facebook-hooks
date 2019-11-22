import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';

function SinglePhoto({img}) {
    return(
      <Wrapper>
          <Img src={img}></Img>
      </Wrapper>
    )   
}
export default SinglePhoto;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-basis:30%;
        margin:2px;
    }   
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        background:lightcyan;
        height:88px; width:88px;
    }   
`