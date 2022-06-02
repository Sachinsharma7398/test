import React from "react";
import "./Perfomers.css";
import portfolioItemImage from "../../assets/images/portfolioItem.jpeg";

const Perfomers = () => {
  return (
    <div className="perfomers-section" id="portfolio">
      <div className="perfomers-heading text-color-white">Portfolio</div>
      <div className="perfomers-items-container d-flex   text-color-white">

        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
      </div>
    </div>
  );
};

export default Perfomers;
