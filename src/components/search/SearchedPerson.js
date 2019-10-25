import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

const SearchedPerson = props =>{
    return(
        <Wrapper>
            <UserProfile>
                <Img src={props.users.picture.thumbnail}></Img>
                <P>{props.users.name.first +' '+ props.users.name.last}</P>
            </UserProfile>
            <Span>&times;</Span>
        </Wrapper>
    )
}

export default SearchedPerson;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        height:35px;
        padding-left:8px;
        &:hover{
            background:#e9ebee;
        }
    }
`
const UserProfile = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:flex-start; align-items:center; flex-basis:40%;
    }
`  
const Img = styled.img`
    @media (min-width: ${laptop}) {
        border-radius:100%;
        height:25px; width:25px;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:12px; color:#1d2129;
        padding-left:10px;
    }
`
const Span = styled.span`
    @media (min-width: ${laptop}) {
        color:#90949c; font-size:20px;
    }
`
