import React from 'react';
import './App.css';
import './Sidebar.css'
// import Header from './Header.js';
import {Routes} from "react-router";
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Home'
import Search from './Search';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/search" element={<Search/>}> 
      </Route>
        <Route path="/" element={<Home></Home>}>
          
        </Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
