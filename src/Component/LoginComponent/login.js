import React, { useState } from "react";
import './login.css'

import {useNavigate} from 'react-router-dom';

import LoginImage from '../Images/login.jpg'

const Login  = () => {

    const [Toggle,setToggle] = new useState(0);

    const navigate = useNavigate();

    function handle(event){
        event.preventDefault();
        console.log(event.target.value);
        if(event.target.username.value === "admin" && event.target.password.value === "Admin123")
        adminLogin()
        else
        setToggle(1)
        if(event.target.username.value === "user" && event.target.password.value === "User123")
        userLogin()
        else
        setToggle(1)
    }

    function userLogin(){
        navigate("/user")
        
    }

    function adminLogin(){
        navigate("/admin")
    }

    var error;
    if(Toggle)
    error = `Invalid Credentials.. !!`



    return(
        <section>
            <div id="img-box">
                <img src={LoginImage} alt=""></img>
            </div>
            <div id="login-box">
                <form action="" id="login-form" onSubmit={handle}>
                    <p>Login</p>
                    <label>Username</label>
                    <input type="text" id="username" name="username"></input>

                    <label>Password</label>
                    <input type="password" id="password" name="password"></input>

                    
                    <h5>{error}</h5>

                    <div>
                    <button id="user-login-btn" name="user" type="submit">User</button>
                    <button id="admin-login-btn" name="admin" type="submit">Admin</button>
                    </div>
                </form> 
            </div>
        </section>
    )
}

export default Login