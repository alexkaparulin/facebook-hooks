import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../../enhancers/mediaQuery';
import like from '../../../../static/logos/main/like.png';
import comment from '../../../../static/logos/main/comment.png';
import share from '../../../../static/logos/main/share.png';


function Notification() {
    return(
        <Wrapper>
          <UserNotifications>
                <TotalLikesBox>
                    <LikeIcon src={like}></LikeIcon>
                    <Likes>325</Likes>
                </TotalLikesBox>
                <CommentShareBox>
                    <Comment>24 Comments</Comment>
                    <Share>15 Shares</Share>
                </CommentShareBox>
            </UserNotifications>
            <PostNotifications>
                <Box>
                    <LikeIcon src={like}></LikeIcon>
                    <Likes style={{fontWeight:'700'}}>Like</Likes>
                </Box>
                <Box>
                    <LikeIcon src={comment}></LikeIcon>
                    <Comment style={{fontWeight:'700'}}>Comment</Comment>
                </Box>
                <Box>
                    <LikeIcon src={share}></LikeIcon>
                    <Share style={{fontWeight:'700'}}>Share</Share>
                </Box>
            </PostNotifications>
        </Wrapper>
    )   
}
export default Notification;
const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; 
    }
`
const UserNotifications = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        height:40px;
        margin:0 10px;
        padding:0 10px;
        border-bottom: 1px solid #dadde1;
}
`
const TotalLikesBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
}
`
const LikeIcon = styled.img`
    @media (min-width: ${laptop}) {
        height:15px; width:15px;
        margin-right:5px;
    }
`
const Likes = styled.p`
    @media (min-width: ${laptop}) {
        color:#606770; font-size:12px;
}
`
const CommentShareBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
}
`
const Comment = styled(Likes)`
    @media (min-width: ${laptop}) {
}
`
const Share = styled(Likes)`
    @media (min-width: ${laptop}) {
        margin-left:5px;
}
`
const PostNotifications = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        height:40px;
        padding:0 50px;
        border-bottom: 1px solid #dadde1;
}
`
const Box = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
}
`
