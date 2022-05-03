import React, { Component } from 'react';
import Style from './asside.module.scss';



export default function AssideCard() {


     return (
          <>
               <div className={Style.follow_suggestion_container}>
                    <div className={Style.card_wrapper}>
                         <div className={Style.user_photo_container}>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnWpbzYtrJLPTusvDcEEwTvMdc-bZ5dBr5A&usqp=CAU" alt='someImg'></img>
                         </div>
                         <div className={Style.username_container}>
                              <p>username</p>
                              <p>name</p>
                         </div>

                         <div className={Style.button_follow_container}>
                              <button>Follow</button>
                         </div>
                    </div>
               </div>
          </>


     );

}


