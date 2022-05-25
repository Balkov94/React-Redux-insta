import React, { Component, useLayoutEffect } from 'react';
// import Style from './carouselUsers.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryCards from './StoryCards';
//redux

class CarouselTest extends Component {
     constructor(props) {
          super(props);
          this.state = {
               reduxState: this.props.currUserFollowing,
          }
     }
     render() {
          const responsive = {
               superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 10
               },
               desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 7
               },
               tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 7
               },
               mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 6
               }
          };
          // !!!!!!!! HARD FIX -> make STORIES for print in carousel
          let allStories;
          if(this.props.stories!=null){
               allStories=this.props.stories.map(e=>
                    <StoryCards key={e.userID} username={e.username} profPicture={e.profPicture}/>
               )
               console.log(allStories)
          }
   
          return (
               <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    stories={this.props.stories}>
                    {/* put usersCards */}
                    {/*!!!show all sotires or <sotrycard> ->carousel didnt't work with null elemenets */}
                    {(allStories ? allStories :<StoryCards />)}
                   
                  
               </Carousel>
          );
     }
}

export default CarouselTest;

