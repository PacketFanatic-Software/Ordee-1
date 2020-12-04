import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Home_Page.css';

export default function Home_Page() {
  
  return(
      <nav className="navbar"> 
      <Link className="navicon" to="/">
      <div>
        <img className="navicon"
        src={'./ordee2.png'}
        alt=""
        />
      </div>
      <Link className="usericon" to='/'>
        <div>
          <img className="user_icon"
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"
          alt=""
          />
        </div>
      </Link>
      </Link>
     </nav>
    );
}





