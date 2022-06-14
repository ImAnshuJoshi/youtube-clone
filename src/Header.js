import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';  
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';

function Header() {

  const [inputSearch,setInputSearch]=useState('');
  return (
    <div className="header">
     <div className="header__left">
      <MenuIcon className="burger"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" className='header__logo'/>
      </div>

      <div className="header__input">
      <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search" />
      <SearchIcon className="header__inputB utton" />
      <Link to={`/search/${inputSearch}`}> </Link>
      </div>

      <div className="header__icons">
      <VideoCallIcon/>
      <AppsIcon/>
      <NotificationsIcon/>
      <AccountCircleIcon/>
      </div>
      
    </div>
  )
}

export default Header
