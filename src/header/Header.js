import React, { Component, createRef, useState } from 'react';
import Style from './Header.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconMenu from './IconMenu';
// router
import { Routes, Route, Link } from "react-router-dom";
//redux
import { useSelector } from 'react-redux';


export default function Header() {

     const [isMenuOpen, setMenuState] = useState(false);

     let handleMenu = () => {
          setMenuState(!isMenuOpen);
     }

     // render() {
     const iconsMargins = {
          marginRight: "6px",
     };

      // !!!Get data from Redux gloval state -> slice userData _______________
     const userProfPicture = useSelector(state => state.userData.profPicture);

     return (
          <div className={Style.header}>
               <div className={Style.headerNavWrapper}>
                    <img className={Style.logo} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt='instagramLogo'></img>
                    <TextField id="standard-basic" label="" variant="standard" />
                    <div className={Style.icons_cotainer}>
                    <Link to="/"> 
                    <HomeIcon style={{ marginRight: "5px" }} />
                    </Link>    
                         <SendIcon style={iconsMargins} />
                         <AddCircleOutlineIcon style={iconsMargins} />
                         <FavoriteBorderIcon style={iconsMargins} />
                         <span style={{ display: "inline" }}>
                              <Avatar onClick={handleMenu} alt="profile picture"
                                   src={userProfPicture}
                                   sx={{ display: "inline-block", width: 24, height: 24, }}
                              />
                         </span>
                         {/* handle ismenuOpen */}
                         {isMenuOpen ? <IconMenu /> : null}

                    </div>
               </div>
          </div>
     );

}


