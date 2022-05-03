import Header from 'header/Header';
import React, { useState } from 'react';
import Styles from './profPage.module.scss';


export default function MyProfPage() {
     return (
          <div className={Styles.wrapper}>
               <Header />
               <div className={Styles.prof_container}>
                    <div className={Styles.img_prof_container}>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeAcbGLYtVaSSR9SaiRBAmxr94SxDIkHKeQ&usqp=CAU' alt="profile_img"></img>
                    </div>
                    <div className={Styles.info_prof_container}>
                         <div className={Styles.text_lines}>
                                   <p>username</p>
                                   <p>edit profile</p>
                                   <p>ICON</p>
                         </div>
                         <div className={Styles.text_lines}>
                                   <p>500post</p>
                                   <p>159following</p>
                                   <p>800followers</p>
                         </div>
                         <div className={Styles.text_lines}>
                                   <p>user names</p>
                         </div>
                    </div>
               </div>
               <div className={Styles.gallery_menu_container}>
                    <p>POSTS</p>
                    <p>SAVED</p>
                    <p>TAGGED</p>
               </div>
               <div className={Styles.gallery_container}>
                         <GalleryImg/>
                         <GalleryImg/>
                         <GalleryImg/>
                         <GalleryImg/>
                         <GalleryImg/>
                         <GalleryImg/>
                         <GalleryImg/>
               </div>
               <div className={Styles.gallery_footer}>
                    <div className={Styles.gallery_footer_links}>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                              <p>meta</p>
                    </div>
                    <div className={Styles.gallery_footer_links}>
                              <p>English</p>
                              <p>2022 from Meta</p>
                    </div>

               </div>
          </div>
     );
}


function GalleryImg(){
     return(
          <div className={Styles.gallery_card}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG84bDpZ-8_WEfnCx6DqtpzTQ7wLVr2Me9yQ&usqp=CAU' alt="img_1"></img> 
          </div>
     )
}

