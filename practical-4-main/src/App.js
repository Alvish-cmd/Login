import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './components/Dashboard/UpdateProfile/UpdateProfile';

function App(props) {

  return (
    <div className="App">
<Router>
         <Routes>
           <Route path="/signup" element={<SignUp />} />
           <Route path="/" element={<Login />} />
           <Route path='/dashboard' element={<Dashboard />} />
           <Route path='/myprofile' element={<MyProfile />} />
           <Route path='/updateprofile' element = {<UpdateProfile />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
