import React, { Component, useLayoutEffect } from 'react';
// import Style from './carouselUsers.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryCards from './StoryCards';
//redux
import { useSelector } from 'react-redux';


class CarouselTest extends Component {
     constructor(props) {
          super(props);
          this.state = {
               reduxState: this.props.currUserFollowing,
               stories:null
          }
          // all usersdata from localStorage
          let allUsersData = JSON.parse(localStorage.getItem("users"));
          let storyCardsList = this.state.reduxState.map(id => { //following - usersID

               let currFollowing = allUsersData.find(e => e.userID == id);
               return(
                    <StoryCards key={id}
                    profPicture={currFollowing.profPicture}
                    username={currFollowing.username}
                    />
               )
             
          });
          console.log(storyCardsList);
          this.setState({...this.state,stories:storyCardsList})
          console.log('State');
          console.log(this.state);
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
                    itemClass="carousel-item-padding-40-px">
                    {/* put usersCards */}
                    {/* <StoryCards/>
                    <StoryCards/>
                    <StoryCards/> */}
                    {this.state.stories.foreach(e=>{return e})}
                    



               </Carousel>
          );
     }
}

export default CarouselTest;

