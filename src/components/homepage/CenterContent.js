import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { laptop } from '../../enhancers/mediaQuery';
import CreatePost from './centerContent/CreatePost';
import Stories from './centerContent/Stories';
import UserPost from './centerContent/UserPost';
import CreatePostOpened from './centerContent/posts/CreatePost.opened';


function CenterContent() {
    const isTrue = useSelector(state=>state.createPost.booleanType)
    return(
        <Wrapper>
           <CreatePost/>
           <div>
                {isTrue?<CreatePostOpened/>:null}
           </div>
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