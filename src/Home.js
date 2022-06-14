import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import './App.css';
import './Sidebar.css'
export default function Home() {
  return (
    <>
      <Header />
     <div className="app__page">
       <Sidebar/>
       <RecommendedVideos/>
     </div>
    </>
  )
}
