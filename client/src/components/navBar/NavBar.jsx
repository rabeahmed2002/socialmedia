import "./Navbar.scss"
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';




const NavBar = () => {

    const {currentUser}=useContext(AuthContext)

  return (
    <div className='navbar'>

        <div className='left'></div>
            <Link to='/' style={{textDecoration:'none'}}>
                <span>ShadowNetwork</span>
            </Link>
            <HomeOutlinedIcon/>
            {/* <DarkModeOutlinedIcon/> */}
            <AppsOutlinedIcon/>

            <div className='search'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search...'/>
            </div>
        <div className='right'>

            <PersonOutlineOutlinedIcon/>
            <MailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>

            <div className='user'>
                <img src='https://i.postimg.cc/VstndRgb/IMG-20230413-170805-149.jpg'/>
                <span>Rabe Ahmed</span>
                {/* <img src={currentUser.profilePic}/>
                <span>{currentUser.name}</span> */}
            </div>

        </div>
      
    </div>
  )
}

export default NavBar
