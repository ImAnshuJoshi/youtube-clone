import React from 'react';
import './App.css';
import './Sidebar.css'
import Header from './Header.js';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="app__page">
       <Sidebar/>
       <RecommendedVideos/>
     </div>
    </div>
  );
}

export default App;
