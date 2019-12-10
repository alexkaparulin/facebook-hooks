import React,{ useState } from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import { useDispatch } from 'react-redux';
import { add_new_post } from '../../../configureStore/actions/createPost.action';

function CreatePost() {

    const dispatch = useDispatch();
    const [boolean,setClick] = useState(false);
    const [text,setText] = useState('');
    const [post,setPost] = useState({
        text:'',file:''
    });

    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
    }

    function uploadButton(){
        const button = document.getElementById('uploadButton');
        button.click();
        button.addEventListener('change',(e)=>{
            e.preventDefault();
            const file = e.target.files[0];

            getBase64(file).then(base64 => {
                if(base64 === ''){
                    setPost({text:text});
                }else{
                    setPost({text:text,file:base64});
                }
            });
        })
    }
    function changeText(e){
        setClick(true);
        setText(e.target.value);
        setPost({text:e.target.value,file:''})
        if(e.target.value === ''){
            setClick(false);
        }
    }
    function submitForm(e,post){
        e.preventDefault();
        dispatch(add_new_post(post))
    }
    return(
        <Wrapper onSubmit={(e)=>submitForm(e,post)}>
            <Header>
                <P>Create Post</P>
            </Header>
            <InputWrap>
                <InputBox>
                    <Img></Img>
                    <Input placeholder="What's on your mind, Alex?" onChange={(e)=>changeText(e)}></Input>
                </InputBox>
            </InputWrap>
            <OptionsWrap>
                <Buttons>
                    <Button onClick={()=>uploadButton()}>
                        <ButtonLogo></ButtonLogo>
                        <Input style={{display:'none'}} id="uploadButton" type="file" placeholder="Photo/Video"></Input>
                    </Button>
                    <Button style={{margin:'0 6px'}} placeholder="Tag Friend"></Button>
                    <Button placeholder="Feeling/Activity"></Button>
                </Buttons>
            </OptionsWrap>
            <BottomWrap>
                <NewsFeed>
                    <Left>
                        <CheckBox type='checkbox'></CheckBox>
                        <CheckBoxImg></CheckBoxImg>
                        <PFeed>News Feed</PFeed>
                    </Left>
                    <Right>
                        <ButtonLogo></ButtonLogo>
                        <PP>Public</PP>
                    </Right>
                </NewsFeed>
                <StoryFeed>
                    <Left>
                        <CheckBox type='checkbox'></CheckBox>
                        <CheckBoxImg></CheckBoxImg>
                        <PFeed>Your Story</PFeed>
                    </Left>
                    <Right>
                        <ButtonLogo></ButtonLogo>
                        <PP>Friends</PP>
                    </Right>
                </StoryFeed>
                <PostButton changeColor={boolean}>Post</PostButton>
            </BottomWrap>
        </Wrapper>
    )   
}
export default CreatePost;

const Wrapper = styled.form`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; align-items:center;
        height:auto; width:100%;
        background:#FFFFFF;
        border-radius:2px; border: 1px solid #bdc7d8;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:space-between;
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
const OptionsWrap = styled.div`
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
const Button = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        border-radius:12px; border:none;
        height:auto; width:auto;
        outline:none;
        padding: 8px 10px;
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
const BottomWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        padding:3px 0;
        width:100%;
        background:#e9ebee;
    }
`   
const NewsFeed = styled.div`
    @media (min-width: ${laptop}) {   
        display:flex; justify-content:space-between; align-items:center;
        padding: 5px 10px;
        &:hover{
            background:#CCD0D5;
        }
    }
`
const Left = styled.div`
    @media (min-width: ${laptop}) {   
        display:flex; justify-content:space-between; align-items:center;
        width:28%;
    }
`
const CheckBox = styled.input`
    @media (min-width: ${laptop}) {  
        height:15px; width:15px; 
        border-radius:50%; border:1px solid #4A4A4A;
    }
`
const CheckBoxImg = styled.img`
    @media (min-width: ${laptop}) {  
        height:25px; width:25px; 
        border-radius:100%; border:1px solid #CCCCCC;
        background:orange;
    }
`
const PFeed = styled.p`
    @media (min-width: ${laptop}) {  
        font-size:9px; font-weight:700;
    }
`
const PP = styled.p`
    @media (min-width: ${laptop}) {  
        font-size:9px; font-weight:700; color:#4b4f56;
    }
`
const Right = styled.div`
    @media (min-width: ${laptop}) {   
        display:flex; justify-content:center; align-items:center;
        height:20px; width:15%;
        border:.5px solid #ccd0d5; border-radius: 2px;
    }
`
const StoryFeed = styled.div`
    @media (min-width: ${laptop}) {   
        display:flex; justify-content:space-between; align-items:center;
        padding: 5px 10px;
        &:hover{
            background:#CCD0D5;
        }
    }
`
const PostButton = styled.button`
    @media (min-width: ${laptop}) {   
        border:.5px solid #9cb4d8; border-radius:2px;
        margin:2px 10px;
        outline:none; cursor: pointer;
        padding: 5px 0;
        color:#ffffff; font-size:11px; font-weight:700;
        background:${(props)=>props.changeColor? '#385898' : '#9cb4d8'};
    }
`