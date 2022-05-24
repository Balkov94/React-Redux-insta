import React, { Component, useEffect, useState } from 'react';
import Style from './LoginPageStyles.module.scss';
//
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { getUsers } from 'Server/usersdata/users.js';// f to get users form folder server
//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



export default function LoginDiv(props) {
     // get all users data (moka server json files in folder SERVER)
     const [users, setUsers] = useState(null);
     useEffect(() => {
          getUsers()
               .then(res => {
                    //get data from local storage??? for new registered users
                    let localStorageUsers = []
                    if (localStorage.getItem("users") !== null) {
                         localStorageUsers = JSON.parse(localStorage.getItem("users"));
                    }
                    if (res.length < localStorageUsers.length) {
                         setUsers(localStorageUsers)
                    }
                    else {
                         setUsers(res)
                    }
               })
     }, [])

     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");

     function getInputValues(e) {
          if (e.target.name === "username") {
               setUsername(e.target.value);

          }
          else if (e.target.name === "password") {
               setPassword(e.target.value);
          }
     }
     //!!!!!!!!!!!!!!!!! redux state / slice userData__________________________
     const currUserName = useSelector(state => state.userData.username);
     
     const dispatch = useDispatch();
     function login() {

          if (users.some(e => e.username == username && e.password == password)) {
               //curr logged user data
               let currUserData = users.find(e => e.username == username && e.password == password);
               alert(`Successful login ${currUserName}`)

                dispatch({
                    type: "LOGIN",
                    payload: {
                         userID: currUserData.userID,
                         mobile: currUserData.mobile,
                         name: currUserData.name,
                         username: currUserData.username,
                         password: currUserData.password,
                         posts: currUserData.posts,
                         followers: currUserData.followers,
                         following: currUserData.following,
                         profPicture: currUserData.profPicture
                    }
               })

          }
          else {
               alert("Incorent username password")
               setPassword("");
               setUsername("");
          }
     }

     return (
          <div className={Style.form_container}>
               <div className={Style.form__logo}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'></img>
               </div>
               <div className={Style.form}>

                    <input type="text" name="username" value={username} onInput={getInputValues} placeholder='Phone number, username or emal'></input>
                    <input type="text" name="password" value={password} onInput={getInputValues} placeholder="Password"></input>
                    <Button variant="contained" onClick={login}>Log In</Button>


                    <div className={Style.or_container}>
                         <hr></hr>
                         <p>OR</p>
                    </div>
               </div>

               <div className={Style.forgotPass_container}>
                    <div className={Style.forgotPass_facebook}>
                         <p><FacebookIcon sx={{ width: "16px", position: "absolute", top: "-5px", left: "6px" }} />Login with Facebook</p>
                    </div>
                    <p>Forgot password?</p>
               </div>
               <div className={Style.signup_container}>
                    <p>Don't have an account?</p>
                    <Button variant="contained" onClick={props.handleLogOrSign}>Sign in</Button>
               </div>

               <div className={Style.apps_container}>

               </div>

          </div>
     )
}