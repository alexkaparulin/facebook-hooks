import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import MyProfileNav from './MyProfileNav';
import UserBio from './UserBio';
import PhotosBox from './PhotosBox';

function MyUser(){
    return(
      <Wrapper>
          <MyProfileNav/>
          <ContentBox>
                <UserBio/>
                <PhotosBox/>
          </ContentBox>
      </Wrapper>
    )   
}
export default MyUser;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; align-items:center;
    }   
`
const ContentBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        width:700px;
        height:auto;
        border:1px solid green;
    }   
`