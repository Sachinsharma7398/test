import React from "react";
import Marque from "../Marque/Marque";
import "./Partners.css";
import Part1 from '../../assets/images/part1.png'

const Partners = () => {
    
    const data=[1,2,3,5,6,7,7,8]
  return (
    <div className="partners-section text-color-white">
      <div className="partners-heading">top PARTNERS</div>
      <Marque>
        {data.map(item=>{
            return (
                <div key={item} className="marque-item">
                <img src={Part1} alt="img"></img>
        </div>
            )
        })}
        
      </Marque>
    </div>
  );
};

export default Partners;
