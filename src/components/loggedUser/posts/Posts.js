import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import UserPost from './UserPost';
import CreatePost from './CreatePost';

function Posts() {
    const arrOfPosts = useSelector(state => state.createPost.posts);
    console.log(arrOfPosts)
    const sortPosts = arrOfPosts.map((post,i)=>{
        return(
            <UserPost key={i} textTitle={post.text} uploadedImg={post.file}/>)}
        )
    return(
        <Wrapper>
            <CreatePost/>
            {sortPosts !== null? sortPosts : null}
        </Wrapper>
    )   
}
export default Posts;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        width:100%;
    }
`