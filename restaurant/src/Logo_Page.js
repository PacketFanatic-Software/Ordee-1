import React from 'react';
import './Logo_Page.css'
import {Link} from 'react-router-dom';


function Logo_Page() {
    return (
            <div className="page">
            <div className="home">
            <img className="background" 
                 src={'./grey.jpg'}
                 alt=""
            />
            <div>
            <img className="logo"
                src={'/pf.jpeg'}
                alt=""
             />
             </div>
             <div className="boxed">
            <Link className="link" to="/Home">  
            <p className= "text" 
            ><strong>Hungry? Talk it out! </strong>
            </p>
            </Link>
             </div>
             </div>
            </div>
    );
}

export default Logo_Page;
