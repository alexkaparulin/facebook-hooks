import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { openClose_postBox } from '../../../configureStore/actions/createPost.action';

function CreatePost() {

    const boolean = useSelector(state => state.createPost.booleanType)
    const dispatch = useDispatch();

    return(
        <Wrapper>
            <Header>
                <P>Create Post</P>
            </Header>
            <InputWrap>
                <InputBox>
                    <Img></Img>
                    <Input defaultValue="What's on your mind, Alex?" onClick={() => dispatch(openClose_postBox(!boolean))}></Input>
                </InputBox>
            </InputWrap>
            <BottomWrap>
                <Buttons>
                    <Button><ButtonLogo></ButtonLogo>Photo/Video</Button>
                    <Button style={{margin:'0 6px'}}><ButtonLogo></ButtonLogo>Tag Friends</Button>
                    <Button><ButtonLogo></ButtonLogo>Feeling/Activity</Button>
                    <Button><ButtonLogo></ButtonLogo></Button>
                </Buttons>
            </BottomWrap>
        </Wrapper>
    )   
}
export default CreatePost;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; align-items:center;
        height:150px;
        background:#FFFFFF;
        border-radius:2px; border: 1px solid #bdc7d8;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        width:100%; height:30px;
        background:#e9ebee;
        border-bottom:1px solid #dddfe2; border-radius: 2px 2px 0 0;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        color:'#4b4f56'; font-size:12px; font-weight:600;
        padding-left:7px;
    }
`
const InputWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:center;
        height:80px; width:100%;
    }
`
const InputBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        width:95%;
        border-bottom:1px solid #F2F3F5;
    }
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:40px; width:40px;
        border-radius:100%;
        background:green;
    }
`
const Input = styled.input`
    @media (min-width: ${laptop}) {
        color:gray; font-size:14px;
        padding-left:5px;
        outline:none; border:none;
    }
`
const BottomWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:flex-start;
        width:100%;
    }
`
const Buttons = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        padding:6px 0 6px 7px;
    }
`
const Button = styled.button`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        border-radius:12px; border:none;
        height:auto; width:auto;
        padding: 7px 10px;
        background:#f5f6f7;
        color:#4b4f56; font-weight:600; font-size:11px;
    }
`
const ButtonLogo = styled.img`
    @media (min-width: ${laptop}) {
        border-radius:100%;
        height:15px; width:15px;
        background:orange;
        margin-right:3px;
    }
`