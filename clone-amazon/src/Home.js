import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="
            https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"          
            alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product
            id="123213341"
            title="The Lean Startup: How constant Innovation Creates Radically Successful Business Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg" 
            />
            <Product
            id="123213342"
            title="Minecraft - Nintendo Switch"
            price={59.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81nxNas5onL._SL1500_.jpg" 
            />
            </div>
            <div className="home__row">
            <Product
            id="123213343"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display,Backlit Keyboard,Silver"
            price={359.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81vNRgHlqGL._AC_SL1500_.jpg" 
            />
            <Product
            id="123213344"
            title="Samsung Galaxy Tab S6 Lite 10.4, 64GB WiFi Tablet Oxford Gray"
            price={299.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/718B6zl%2Bb6L._AC_SL1500_.jpg" 
            />
            <Product
            id="123213345"
            title="Creative Pebble 2.0 USB-Powered Desktop Speakers for Pcs and Laptops (Black)"
            price={19.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/31lrbOsJ2qL._AC_.jpg" 
            />
            </div>
            <div className="home__row">
            <Product
            id="123213346"
            title="Vinsguir Ab Roller for Abs Workout, Ab Roller Wheel Exercise Equipment for Core Workout, Ab Wheel Roller for Home Gym, Ab Workout Equipment for Abdominal Exercise"
            price={16.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/718gZNGDWmL._AC_SL1500_.jpg" 
            />
            </div>
        </div>
    );
}

export default Home;

