import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import CreatePost from './centerContent/CreatePost';
import Stories from './centerContent/Stories';
import UserPost from './centerContent/UserPost';


function CenterContent() {
    return(
        <Wrapper>
           <CreatePost/>
           <Stories/>
           <UserPost/>
        </Wrapper>
    )   
}
export default CenterContent;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        width:480px;
        margin:0 10px;
    }
`