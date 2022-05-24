import React, { Component } from 'react';
import Header from '../../header/Header.js';
import Asside from '../../asside/Asside.js';
import CarouselUsers from '../../CarouselUsers/CarouselUsers.js';
import PostsContainer from '../../Posts/PostsContainer';
import Style from './MainPage.module.css';
//redux 
import { useSelector } from 'react-redux';

export default function MainPage() {
     //get redux-> global state -> userreducer -> curr logged user
     const currUserFollowing = useSelector(store => store.userData.following);

     return (
          <>
               <div className={Style.wrapper}>
                    <Header />
                    <Asside />
                    <CarouselUsers currUserFollowing={currUserFollowing} />
                    <PostsContainer />
               </div>
          </>
     );

}
