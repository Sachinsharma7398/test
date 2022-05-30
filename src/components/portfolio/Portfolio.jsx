import React from "react";
import "./Portfolio.css";
import Marque from "../Marque/Marque";
import Part1 from "../../assets/images/part1.png";

const Portfolio = () => {
  const data = [1, 2, 3, 5, 6, 7, 7, 8];
  return (
    <div className="portfolio-section text-color-white">
      <div className="portflio-heading">top PARTNERS</div>
      <Marque>
        {data.map((item) => {
          return (
            <div key={item} className="marque-item">
              <img src={Part1} alt="img"></img>
            </div>
          );
        })}
      </Marque>
      <div className="my-5"></div>
      <Marque>
        {data.map((item) => {
          return (
            <div key={item} className="marque-item">
              <img src={Part1} alt="img"></img>
            </div>
          );
        })}
      </Marque>
    </div>
  );
};

export default Portfolio;
