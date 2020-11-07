import React from 'react';
import './Logo_Page.css'
import {Link} from 'react-router-dom';


function Logo_Page() {
    return (
            <div className="page">
            <div className="home">
            <img className="background" 
                 src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm27-bb-11-productbackground.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=58e4b37302f8bcca3e909f62a6a72568" 
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
