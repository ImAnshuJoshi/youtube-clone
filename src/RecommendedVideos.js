import React from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard';
import './VideoCard.css';
import './VideoCard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ='./images/1.jpg'
        />
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />
         <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />
        <VideoCard
        title="this is my first video"
        views="113 Views"
        timestamp="3 days ago"
        channelImage={AccountCircleIcon}
        channel="Anshu Joshi"
        image ="./images/1.jpg"
        />

      </div>
    </div>
  )
}

export default RecommendedVideos
