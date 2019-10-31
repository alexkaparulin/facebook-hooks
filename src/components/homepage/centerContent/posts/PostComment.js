import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../../enhancers/mediaQuery';

function PostComment() {
    return(
        <Wrapper>
            <ImgBox>
                <MyProfileImg></MyProfileImg>
            </ImgBox>
            <ColumnBox>
                <TextBox>
                    <HeaderP>Alex Kaprulin</HeaderP>
                    <P>A huge game by a huge team!! :)</P>
                </TextBox>
                <Notification><Span>Like · Reply </Span><Time>&nbsp;· 16m</Time></Notification>
            </ColumnBox>
        </Wrapper>
    )   
}
export default PostComment;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        border:1px solid red;
    }
`
const ImgBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        border:1px solid green;
    }
`
const MyProfileImg = styled.div`
    @media (min-width: ${laptop}) {
        border:1px solid green; border-radius:100%;
        height:30px; width:30px;
    }
`
const ColumnBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`
const TextBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border: 1px solid #ccd0d5; border-radius:18px;
        background-color: #f2f3f5; 
        font-size:12px;
        list-style-type: none;
        padding: 8px 10px;
    }
`
const HeaderP = styled.li`
    @media (min-width: ${laptop}) {
        color:#385898; font-weight:700;
    }
`
const P = styled.li`
    @media (min-width: ${laptop}) {
        color:#1C1E21;
        list-style-type:none;
    }
`
const Notification = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        font-size:11px; color:#606770;
        padding: 4px 10px;
    }
`
const Span = styled.li`
    @media (min-width: ${laptop}) {
        color:#385898;
        list-style-type:none;
    }
`
const Time = styled.li`
    @media (min-width: ${laptop}) {
        color:#606770;
        list-style-type:none;
}
`
