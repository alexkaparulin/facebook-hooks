import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function AddFriend({name,img}){
    return(
    <Wrapper>
        <Left>
            <Img src={img}></Img>
            <Name>{name}</Name>
        </Left>
        <Right>
            <Confirm>Confirm</Confirm>
            <Delete>Delete</Delete>
        </Right>
    </Wrapper>
    )
}
export default AddFriend;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        height:45px;
        padding:4px 8px;
        border-bottom: solid 1px #dddfe2;
  }
`
const Left = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
  }
`
const Right = styled(Left)`
    @media (min-width: ${laptop}) {}
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        border-radius:100%;
        background:red;
        margin-right:10px;
        height:38px; width:38px;
    }
`
const Name = styled.p`
    @media (min-width: ${laptop}) {
        font-size:11px; color:#385897; font-weight:600;
    }
`
const Confirm = styled.button`
    @media (min-width: ${laptop}) {
        font-size:10px; color:#FFFFFF; font-weight:600;
        background: #4267b2;
        border: 1px solid #4267b2; border-radius:2px;
        padding: 3px 8px;
        margin-right:4px;
        outline:none;
        cursor: pointer;
        &:hover{
            background: #365899;
            border-color: #365899;
        }
    }
`
const Delete = styled(Confirm)`
    @media (min-width: ${laptop}) {
        background: #f5f6f7;
        border: 1px solid #ccd0d5; border-radius:2px;
        color: #4b4f56; font-weight:600;
        padding: 3px 8px;
        &:hover{
            background: #ebedf0;
            border-color:#ccd0d5;
        }
  }
`