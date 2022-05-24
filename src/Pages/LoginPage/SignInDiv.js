import React, { Component, useEffect, useState } from 'react';
import Style from './LoginPageStyles.module.scss';
//
import Button from '@mui/material/Button';
// import OutLineButton from '../../Components/OutLineButton';
import { getUsers } from 'Server/usersdata/users.js';





export default function SignInDiv(props) {
     // get all users form mock data (local folder SERVER)
     const [users, setUsers] = useState(null);
     useEffect(() => {
          getUsers()
               .then(res => {
                    //get data from local storage??? for new registered users
                    let localStorageUsers = [];
                    if (localStorage.getItem("users") !== null) {
                         localStorageUsers = JSON.parse(localStorage.getItem("users"));
                    }
                    if (res.length < localStorageUsers.length) {
                         setUsers(localStorageUsers)
                    }
                    else {
                         setUsers(res)
                         localStorage.setItem("users",JSON.stringify(res));
                    }
               })
     }, [])

     function register() {
          if (localStorage.getItem("users") !== null) {
               let localSorageUsers = JSON.parse(localStorage.getItem("users"));
               localSorageUsers.push(
                    {mobile: mobileNuber, 
                         name: fullName, 
                         username: username,
                          password: password ,
                          posts:[],
                          followers:[],
                          following:[],
                          profPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv39EqbHKO-G_Iq0iYLwQ37AJABHVb1UQ4Aw&usqp=CAU"
                         });
               localStorage.setItem("users", JSON.stringify(localSorageUsers));
          }

     }

     // ____________________
     const [mobileNuber, SetMobileNumber] = useState("");
     const [fullName, SetFullName] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     function getInputValues(e) {
          if (e.target.name === "username") {
               setUsername(e.target.value);
          }
          else if (e.target.name === "password") {
               setPassword(e.target.value);
          }
          else if (e.target.name === "mobileNumber") {
               SetMobileNumber(e.target.value);
          }
          else if (e.target.name === "fullname") {
               SetFullName(e.target.value);
          }
     }

     return (
          <div className={Style.form_signUp_container}>
               <div className={Style.form__logo}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'></img>
               </div>
               <div className={Style.form}>
                    <h3 className={Style.sign_intro_text}>Sign up to see photos and videos from ypur friends.</h3>
                    <Button className={Style.signIn_buttons} variant="contained" >Log in with Facebook</Button>
                    <h3 className={Style.sign_intro_text}>OR</h3>
                    <form className={Style.signUp_form}>
                         <input type="text" name="mobileNumber" value={mobileNuber} onInput={getInputValues} placeholder='Mobile number'></input>
                         <input type="text" name="fullname" value={fullName} onInput={getInputValues} placeholder="Full name"></input>
                         <input type="text" name="username" value={username} onInput={getInputValues} placeholder='Username'></input>
                         <input type="text" name="password" value={password} onInput={getInputValues} placeholder="Password"></input>
                         <Button onClick={register} className={Style.signIn_buttons} variant="contained" >Next</Button>
                    </form>

                    <div className={Style.sign_polocity_text}>
                         <p>By signing up, you agree to our Terms . Learn how we collect,
                              use and share your data in our Data Policy and how we use cookies and similar technology
                              in our Cookies Policy .
                         </p>
                    </div>

               </div>

               <div className={Style.haveAcc_div}>
                    <p>Have an account?
                         <button onClick={props.handleLogOrSign} type="button">Log in</button>
                    </p>
               </div>

               <div className={Style.haveAcc_div}>
                    <p>Get the app</p>
               </div>




          </div>
     )
}