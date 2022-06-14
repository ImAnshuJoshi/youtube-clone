import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './VideoCard.css';
import Image from "./images/1.jpg"

function VideoCard({image,title,channel,timestamp,views}) {
  return (
    <div className="videoCard">
      <img className ="videoCard__thumbnail" src={Image} alt="" />
        <div className="videoCard__info">
            <AccountCircleIcon className="videoCard__avatar" alt={channel}/>
            <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
              <p>{views}*{timestamp}</p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard
