import React from 'react';
import './App.css';
import Header from './component/Header';
import Chat from './component/Chat';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import styled from 'styled-components';

import Sidebar from './component/Sidebar';


function App() {
  
  return (
    <Router>
      <>
        
      <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
          
          <Route path='/' exact element={<Chat />} />
            
          
        </Routes>
        </AppBody>
        
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`