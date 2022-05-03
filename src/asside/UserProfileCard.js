import React, { Component } from 'react';
import Style from './asside.module.scss';


export default function UserProfCard() {


     return (
          <div className={Style.curr_user_card}>
               <div className={Style.curr_user_img}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU'></img>
               </div>
               <div className={Style.curr_user_text}>
                    <p>curr prof userername</p>
                    <p>curr user name</p>
               </div>
               <div className={Style.curr_user_button}>
                    <button>switch</button>
               </div>
          </div>
     );

}

