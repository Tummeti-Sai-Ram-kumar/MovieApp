import React from 'react'
import { useState } from 'react';
import './header.css'


const Header = () => {
    const [MenuToggle,setMenuToggle] = useState(0);

    return(
        <header class="header" id="home"> 

            <input type="checkbox" class="menu-input" id="menu-input-id"></input>
            <label class="menu-label" for="menu-input-id" onClick={() => setMenuToggle(!MenuToggle)}></label>
            
            <div class="title">
                <p>MovieDen</p>
            </div>

            <nav class={MenuToggle ? "nav-contents" : "nav-contents anim"}>
                <ul>
                    <li><a href="/admin">Home</a></li>
                    <li><a href="/editmovies">Edit Movies</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;