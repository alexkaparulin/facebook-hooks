import React from 'react';
import './App.css';
import styled from 'styled-components';
import HomePage from './components/homepage/Homepage';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Links from './components/navigation/Links';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar><Links/></Navbar>
        <Route exact path="/" component={HomePage}></Route>
        {/* <Route path="/leadboard"></Route> */}
        {/* <Route path="/users"></Route> */}
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
  const Wrapper = styled.div``