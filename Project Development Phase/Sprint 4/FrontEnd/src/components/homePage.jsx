import React from "react";
import Header from "./nav bar";
import './homePage.css'
import heart from '../img/heart-img.jpg';

const HomePage=()=>{

    return(
        <div>
            <Header />
            <div className="ihd__header section__padding" id="home">
    <div className="ihd__header-content">
      <h1 className="gradient__text mx-3"> Heart Disease Prediction Tool</h1>
      <p className="mx-3">Heart Disease Prediction Tool provides you the option of diagnosing whether you have heart disease or not without visiting a hospital.</p>

      
    </div>

    <div className="ihd__header-image">
      <img src={heart} />
    </div>
  </div>
        </div>
    )

}

export default HomePage;