import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { laptop } from '../../enhancers/mediaQuery';
import MyProfileNav from './MyProfileNav';
import UserBio from './UserBio';
import PhotosBox from './photosList/PhotosBox';
import FriendsBox from './friendsList/Friends';
import Language from '../banners/Language';
import { fetchUserFriends } from '../../configureStore/actions/myUserFriend.action';
import { fetchUserPhotos } from '../../configureStore/actions/myUserPhoto.action';
import Posts from './posts/Posts';

function MyUser(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserFriends(dispatch));
        dispatch(fetchUserPhotos(dispatch));
    });

    return(
    <Wrapper>
        <MyProfileNav/>
        <ContentBox>
            <Left>
                <UserBio/>
                <PhotosBox/>
                <FriendsBox/>
                <LanguageBox>
                    <Language/>
                    <UlSettings>
                        <Li>Privacy&nbsp;</Li>
                        <Li>&middot;&nbsp;Terms</Li>
                        <Li>&middot;&nbsp;Advertising</Li>
                        <Li>&middot;&nbsp;Ad Choices</Li>
                        <Li>&middot;&nbsp;Cookies</Li>
                        <Li>&middot;&nbsp;More</Li> 
                        <Span>&nbsp;Facebook © 2019</Span>
                    </UlSettings>
                </LanguageBox>
            </Left>
            <Right>
               <Posts/>
            </Right>
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
        display:flex; justify-content:center;
        width:700px;
        height:auto;
    }   
`
const Left = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:auto; width:40%;
        margin-right:5px;
    }   
`
const Right = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        width:60%;
        padding-top:6px;
        margin-left:5px;
    }   
`
const LanguageBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        width:282px;
        margin-top:-6px;
    }   
`
const UlSettings = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-wrap:wrap; 
        margin:4px 0;
    }   
`
const Li = styled.li`
    @media (min-width: ${laptop}) {
       list-style-type: none;
       font-size:10px; color:#90949C;
       margin:0 2px;
    }   
`
const Span = styled.span`
    @media (min-width: ${laptop}) {
       font-size:11px; color:#616770;
       margin-top:2px;
    }   
`