import React, { Component } from 'react';
import Style from './carouselUsers.module.scss';

export default function StoryCards(props) {
     return (
          <div className={Style.storyCard_wrapper}>
               <div className={Style.storyCard_img_container}>
                    <img src={props.profPicture} alt='someProfImg'></img>
               </div>
               <div className={Style.storyCard_username_container}>
                    <p>{props.username}</p>
               </div>
          </div>
     )

}






