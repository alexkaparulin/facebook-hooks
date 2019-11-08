import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { laptop } from '../../enhancers/mediaQuery';
import CreatePost from './centerContent/CreatePost';
import Stories from './centerContent/Stories';
import UserPost from './centerContent/UserPost';
import CreatePostOpened from './centerContent/posts/CreatePost.opened';


function CenterContent() {
    const isTrue = useSelector(state=>state.createPost.booleanType);
    const arrOfPosts = useSelector(state=>state.createPost.posts);
    let sortAllPosts = arrOfPosts.map((post,i)=>{
        return <UserPost key={i} textTitle={post} index={i}/>
    }) 
    return(
        <Wrapper>
           <CreatePost/>
           <WritePost>
                {isTrue? <CreatePostOpened/> : null}
           </WritePost>
           <Stories/>
           <ArrOfPosts>
                <UserPost/>
                {arrOfPosts !== null? sortAllPosts : null}
           </ArrOfPosts>
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
const WritePost = styled.div`
    @media (min-width: ${laptop}) {}
`
const ArrOfPosts = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`