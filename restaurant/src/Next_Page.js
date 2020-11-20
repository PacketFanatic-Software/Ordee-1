import React from 'react';
import './Next_Page.css'
import {Link} from 'react-router-dom';

function Next_Page() {
  return (
          <div className="page">
          <div>
          <Link className="link" to="/"> 
          <img className="logo"
              src={'/pf.jpeg'}
              alt=""
           />
           </Link>
           </div>
          </div>
  );
}

export default Next_Page;



