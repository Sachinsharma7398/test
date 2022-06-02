import React from "react";
import "./Banner.css";
import BannerCenter from "../../assets/images/bannerCenter.png";
import BannerDownArrow from "../../assets/svgs/arrowd.png";

const Banner = () => {
  
  return (
    <div className="banner d-flex justify-content-center align-items-center flex-column " id="home">
      <div className="banner-center">
       <h1 className="text-color-white"> Investing in the future of blockchain  </h1>
      </div>
      <div className="banner-down" >
      <a href="#about" style={{textDecoration:"none",color:"inherit"}}> <img src={BannerDownArrow} alt="load more"/></a>
      </div>
    </div>
  );
};

export default Banner;
