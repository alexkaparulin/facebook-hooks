import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../../enhancers/mediaQuery';
import comment from '../../../../static/logos/main/comment.png';



function MyComment() {
    return(
        <Wrapper>
            <MyProfileImg></MyProfileImg>
            <InputBox>
                <Input placeholder="Write a comment..."></Input>
            </InputBox>
            <IconsBox>
                <LikeIcon src={comment}></LikeIcon>
                <LikeIcon src={comment}></LikeIcon>
                <LikeIcon src={comment}></LikeIcon>
                <LikeIcon src={comment}></LikeIcon>
            </IconsBox>
        </Wrapper>
    )   
}
export default MyComment;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        height:40px;
        margin:0 10px;
    }
`
const MyProfileImg = styled.img`
    @media (min-width: ${laptop}) {
       height:30px; width:30px;
       border:1px solid green; border-radius:100%;
       margin-right:5px;
    }
`
const InputBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        border-radius:12px 0 0 12px; border: 1px solid #ccd0d5; border-right:none;
        height:30px; width:50%;
        background:#F2F3F5;
    }
`
const Input = styled.input`
    @media (min-width: ${laptop}) {
        border-radius:12px; border:transparent;
        color: #8d949e; font-size:12px;
        background:transparent;
        padding:0 4px; 
        outline:none;
    }
`
const IconsBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:flex-end;
        border-radius:0 12px 12px 0; border: 1px solid #ccd0d5; border-left:none;
        background:#F2F3F5;
        width:40%; height:30px;
    }
`
const LikeIcon = styled.img`
    @media (min-width: ${laptop}) {
        height:15px; width:15px;
        margin-right:5px;
    }
`


