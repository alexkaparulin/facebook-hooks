import React ,{ useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import graySearchIcon from '../../static/logos/search/searchIcon.png'; 
import whiteSearchIcon from '../../static/logos/search/white-search.png' 
import BoxSearch from './BoxSearch';
import { getData } from '../../configureStore/actions/search.action';
import { laptop } from '../../enhancers/mediaQuery';

function Search() {
    const [booleanKey,setClick] = useState(false);
    const [filtered_arr,filterList] = useState([]);
    console.log(filtered_arr)
    // const initialState = {data1:null}
    // const [state, dispatch] = useReducer(searchReducer, initialState);
    const search = useSelector(state => state.search) //get specific state from the redux store.
    const dispatch = useDispatch(); 
    
    function clickedOnSearch(dispatch){
        setClick(!booleanKey);
        dispatch(getData(dispatch))
    }
    function searchValue(e){
        let txt = e.target.value;
        // console.log(txt);
        // console.log(search.data.results.name || search.data.results.last)
        let filtered_list = search.data.results.filter(item => 
        item.name.first.toLowerCase().includes(txt.toLowerCase()) || item.name.last.toLowerCase().includes(txt.toLowerCase()))
        // console.log(filtered_list,'found')
        filterList(filtered_list)
    }
    return(
        <Wrapper>
            <SearchBox>
                <Input onClick={() => clickedOnSearch(dispatch)} placeholder='Search' onChange={(e)=>searchValue(e)}></Input>
                <ImgWrap style={{background: booleanKey? '#4080ff' : '#f5f6f7'}}>
                    <Img src={booleanKey? whiteSearchIcon : graySearchIcon} ></Img>
                </ImgWrap>
            </SearchBox>
            <DropedBox>
                {booleanKey? <BoxSearch usersData={search} on_filter={filtered_arr}/> : null}
            </DropedBox>
      </Wrapper>
    )   
}
export default Search;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`
const SearchBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }
`
const Input = styled.input`
    @media (min-width: ${laptop}) {
        height:23px; width:400px;
        border:none; border-top-left-radius:2px; border-bottom-left-radius:2px; 
        outline:none;
        margin-left:8px;
        padding-left:8px;
    }
`
const ImgWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:center;
        border-top-right-radius:2px; border-bottom-right-radius:2px;
        padding:0 13px;
}
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:20px;
    }
`  
const DropedBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        position:absolute; top:35px;
        margin-left:8px;
}
`