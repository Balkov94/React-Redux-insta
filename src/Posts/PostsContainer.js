import React, { Component } from 'react';
import PostCard from './PostCard';
import Style from './postsContainer.module.scss';

export default function PostsContainer(){

     return (
          <div className={Style.postsContainer}>
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
          </div>
     );

}

