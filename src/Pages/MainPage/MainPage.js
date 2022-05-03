import React, { Component } from 'react';
import Header from '../../header/Header.js';
import Asside from '../../asside/Asside.js';
import CarouselUsers from '../../CarouselUsers/CarouselUsers.js';
import PostsContainer from '../../Posts/PostsContainer';
import Style from './MainPage.module.css';

export default function MainPage() {
     return (
          <>
               <div className={Style.wrapper}>
                    <Header />
                    <Asside />
                    <CarouselUsers />
                    <PostsContainer />
               </div>
          </>
     );

}
