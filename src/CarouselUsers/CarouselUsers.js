import React, { Component } from 'react';
import CarouselTest from './Carousel';
import Style from './carouselUsers.module.scss';



class CarouselUsers extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     }

     render() {
          return (
               <div className={Style.carousel_container}>
                      <CarouselTest/> 
               </div>
          );
     }
}

export default CarouselUsers;