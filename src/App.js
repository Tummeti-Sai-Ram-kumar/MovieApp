import React from 'react';
import './App.css';

import {Route , Routes} from 'react-router-dom';

import User from './Component/UserComponent/user'
import Admin from './Component/AdminComponent/admin'
import Login from './Component/LoginComponent/login'

function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/admin" element = {<Admin/>} />
        <Route path="/user" element = {<User/>} />
        </Routes>
      </div>
  );
}

export default App;
