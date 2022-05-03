import React, { Component } from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';
import { Routes, Route} from "react-router-dom";
import MyProfPage from 'Pages/MyProfPage/MyProfPage';


class App extends Component {
 
     render() {
          return (
               <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Loginpage" element={<LoginPage />} />
                    <Route path="/Profile"  element={<MyProfPage/>}/>
               </Routes>
               

          );
     }
}
export default App;