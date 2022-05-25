import React, { Component } from 'react';
import CarouselTest from './Carousel';
import Style from './carouselUsers.module.scss';

class CarouselUsers extends Component {
     constructor(props) {
          super(props);
          this.state = {
              reduxState: this.props.currUserFollowing,
              stories:null
          };
     }
          componentDidMount(){
          // all usersdata from localStorage
          let allUsersData = JSON.parse(localStorage.getItem("users"));
          let following = [];
          allUsersData.forEach(e => {
               if (this.state.reduxState.includes(e.userID)) {
                    following.push(e);
               }
             
          });
          this.setState({ stories: following })
     }

     render() {
          return (
               <div className={Style.carousel_container}>
                      <CarouselTest currUserFollowing={this.state.reduxState} stories={this.state.stories}/> 
               </div>
          );
     }
}

export default CarouselUsers;