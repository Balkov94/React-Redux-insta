import React, { Component, useEffect, useState } from 'react';
import Style from './LoginPageStyles.module.scss';
// import OutLineButton from '../../Components/OutLineButton';
import MainPage from 'Pages/MainPage/MainPage';
import LoginDiv from './LoginDiv';
import SignInDiv from './SignInDiv';
//redux 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function LoginPage() {
     //use redux global state - LOGGED
     const dispatch = useDispatch();
     const logged = useSelector(store => store.userData.logged);


     const [logOrSign, setLogOrSign] = useState(true);
     function changeLogOrSign() {
          setLogOrSign(!logOrSign)
     }


     return (
          logged ? <MainPage /> :
               <>
                    <div className={Style.login_main_container}>
                         <div className={Style.login_large_img}>
                              <img src='https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'></img>

                         </div>
                         <>
                              {logOrSign ?
                                   <LoginDiv handleLogOrSign={changeLogOrSign} 
                                   />
                                   : <SignInDiv handleLogOrSign={changeLogOrSign} />}
                         </>
                    </div>
               </>

     );

}





