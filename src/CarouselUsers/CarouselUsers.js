import React, { Component } from 'react';
import CarouselTest from './Carousel';
import Style from './carouselUsers.module.scss';



class CarouselUsers extends Component {
     constructor(props) {
          super(props);
          this.state = {
              reduxState: this.props.currUserFollowing
          };
     }

     render() {
          return (
               <div className={Style.carousel_container}>
                      <CarouselTest currUserFollowing={this.state.reduxState}/> 
               </div>
          );
     }
}

export default CarouselUsers;