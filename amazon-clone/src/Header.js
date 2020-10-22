import React from 'react'
import './Header.css';
import {Link, useHistory} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "firebase";



function Header() {
    const [{ basket, user }] = useStateValue();
    const history = useHistory();
    const login = () => {
        if (user) {
            auth().signOut();
            history.push("/login")
        }
      }

    console.log(basket);


    return (
     <nav className="header">
      {/* logo */}
      <Link to="/login">
      <img 
       className="header__logo" 
       src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
       alt=""
      />
      </Link>
      {/* Search box */}
      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      </div>

      {/* links */}
      <div className="header__nav">
          {/* 1st link */}
        <Link to="/login" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
      </div>  
        </Link>

        {/*2nd link */}

        <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
      </div>  
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
      </div>  
        </Link>

        {/* basket */}
        <Link to="checkout" className="header__link">
            <div className="header__optionBasket">
                {/* Shopping Basket Icon */}
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
            </div>

        </Link>


      </div>
           
     </nav>
 );
}

export default Header;
