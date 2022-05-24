import React, { Component } from 'react';
import Style from './asside.module.scss';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function UserProfCard() {
          // !!!Get data from Redux gloval state -> slice userData _______________
         
          const username = useSelector(state => state.userData.username);
          const name = useSelector(state => state.userData.name);
          const profilePicture = useSelector(state => state.userData.profPicture);

     return (
          <div className={Style.curr_user_card}>
               <div className={Style.curr_user_img}>
                    <img src={profilePicture}></img>
               </div>
               <div className={Style.curr_user_text}>
                    <p>{username}</p>
                    <p>{name}</p>
               </div>
               <div className={Style.curr_user_button}>
                    <button>switch</button>
               </div>
          </div>
     );

}

