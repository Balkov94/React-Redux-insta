import React, { Component } from 'react';
import Style from './carouselUsers.module.scss';

class StoryCards
     extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     }
     render() {
          return (
               <div className={Style.storyCard_wrapper}>
                    <div className={Style.storyCard_img_container}>
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJ83DK_RTZsTrPsq_BtRT2-Hiju7FwYchFA&usqp=CAU" alt='someProfImg'></img>
                    </div>
                    <div className={Style.storyCard_username_container}>
                         <p>username</p>
                    </div>
               </div>
          );
     }
}

export default StoryCards
     ;