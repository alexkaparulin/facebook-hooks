import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import MyProfileNav from './MyProfileNav';

function MyUser(){
    return(
      <Wrapper>
          <MyProfileNav/>
      </Wrapper>
    )   
}
export default MyUser;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; align-items:center;
        border:1px solid green;
    }   
`