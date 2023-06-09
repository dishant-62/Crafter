import React from "react";
import "./home.css";
import ic1 from './images/item-1.jpeg' 
import ic2 from './images/item-2.jpeg' 
import ic3 from './images/item-7.jpeg' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


export const Home = () => {
  return (

    <div id="Home">
    <Carousel showThumbs={false} showStatus={false} className="slider-container">
      <div>
        <div className="grad1"></div>
        <img className="image" src={ic3} alt="1" />
        <p className="para1">Let’s Eat Delicious Food!<br/>
          <p className="stay"><br/><br/>Stay Tuned</p>
          <p className="new">Want to view into menu?<br/><br/></p>
          <p className="comingsoon">Scroll Down!</p>    
        </p>      
      </div>
      <div>
          <div className="grad1"></div>
          <img src={ic2} className="image" alt="1"/>
          <p className="para2"> We at Carva serves you the delicious food of all time with amazing experience.</p>
      </div>
      <div>
      <div className="grad1"></div>
        <img className="image" src={ic1} alt="1" />
        <p className="para2">Experience the wholesome experience with you friends and family.</p>
      </div>
    </Carousel>
    </div>
  );
};

export default Home;