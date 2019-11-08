import React,{useState} from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import publicIcon from '../../../static/logos/main/public.png';
import defaultPic from '../../../static/banners/iherb.png';
import Notification from './posts/Notification';
import comment from '../../../static/logos/main/comment.png';
import PostComment from './posts/PostComment';

function UserPost({textTitle}) {

    const [task, setTask] = useState('');
    const [comments, addComment] = useState([]);

    let commentsSort = comments.map((comment,i)=>{
        return (<PostComment key={i} text={comment}/>)
    });

    const handleChangeInput = (e) => {
      setTask(e.target.value);
    };

    function handleSubmit (e,task){
        if (task) {
            addComment([...comments,task])
        }
        setTask('');
        e.preventDefault();
    };

    return(
        <Wrapper>
            <Header>
                <UserImg></UserImg>
                <JustifyContent>
                    <UserInfo>
                        <P style={{color:'#2851A3',fontWeight:'700',fontSize:'12px'}}>Manchester United</P>
                        <P style={{color:'#616770'}}>2 Hrs &middot;&nbsp;<Public src={publicIcon}></Public></P>
                    </UserInfo>
                    <OptionsButton>&middot;&middot;&middot;&nbsp;</OptionsButton>
                </JustifyContent>    
            </Header>
            <HeaderText>
                <Text>{textTitle}</Text>
            </HeaderText>
            <ImgContainer>
                <Img src={defaultPic}></Img>
            </ImgContainer>
            <Notification/> {/*Notification option Componnent (like,comment,share)*/}
            <ListOfComments>
                {commentsSort}
            </ListOfComments>
            <MyCommentContainer>
                <MyProfileImg></MyProfileImg>
                <InputBox onSubmit={(e)=>handleSubmit(e,task)}>
                    <Input placeholder="Write a comment..." onChange={handleChangeInput} value={!task?'':task }></Input>
                </InputBox>
                <IconsBox>
                    <LikeIcon src={comment}></LikeIcon>
                    <LikeIcon src={comment}></LikeIcon>
                    <LikeIcon src={comment}></LikeIcon>
                    <LikeIcon src={comment}></LikeIcon>
                </IconsBox>
            </MyCommentContainer>
        </Wrapper>
    )   
}
export default UserPost;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; 
        background:#FFFFFF;
        margin:5px 0;
        border-radius:2px; border: 1px solid #bdc7d8;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        padding:0 10px;
    }
`
const JustifyContent = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between;
        width:100%;
    }
`
const UserImg = styled.img`
    @media (min-width: ${laptop}) {
       height:32px; width:32px;
       border:2px solid #1877F2; border-radius:100%;
    }
`
const UserInfo = styled.ul`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`
const P = styled.li`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        list-style-type:none;
        font-size:11px;
        margin-left:-35px;
    }
`
const Public = styled.img`
    @media (min-width: ${laptop}) {
       height:10px; width:10px;
    }
`
const OptionsButton = styled.p`
    @media (min-width: ${laptop}) {
        font-size:20px;
    }
`
const HeaderText = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        padding:0 10px;
    }
`
const Text = styled.p`
    @media (min-width: ${laptop}) {
        font-size:13px;
    }
`
const ImgContainer = styled.div`
    @media (min-width: ${laptop}) {
        font-size:13px;
    }
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:350px; width:100%;
    }
`
const ListOfComments = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        max-height:320px;
        overflow-y:scroll;
    }
`
const MyCommentContainer = styled.div`
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
const InputBox = styled.form`
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




