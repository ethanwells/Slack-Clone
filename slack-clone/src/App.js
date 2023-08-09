import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header';
import styled from "styled-components";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* router: essentially the app controller */}
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Header/>} exact />
            </Routes>
          </AppBody>
        </>
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
