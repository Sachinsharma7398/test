import React from "react";
import "./Team.css";

import portfolioItemImage from "../../assets/images/portfolioItem.jpeg";
import team1 from "../../assets/images/team1.jpg";
import up from "../../assets/images/up.jpg";
import girl from "../../assets/images/girl.jpg";
import long from "../../assets/images/long.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Team = () => {
  return (
    <div className="perfomers-section" id="team">
      <div className="perfomers-heading text-color-white">Our team</div>
      <div className="teams-items-container d-flex   text-color-white">
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={team1} alt="text" />
          </div>
          <h2 className="name">Rahul sharma</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon icon" size={28} color="#ffffff" />
            <MdEmail size={28} className="icon" color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={up} alt="text" />
          </div>
          <h2 className="name">emran</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={long} alt="text" />
          </div>
          <h2 className="name">katty</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={girl} alt="text" />
          </div>
          <h2 className="name">julia</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={team1} alt="text" />
          </div>
          <h2 className="name">Rahul sharma</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon icon" size={28} color="#ffffff" />
            <MdEmail size={28} className="icon" color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={up} alt="text" />
          </div>
          <h2 className="name">Rahul sharma</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={long} alt="text" />
          </div>
          <h2 className="name">Rahul sharma</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
        <div className="teamItem">
          <div className="teamItemImg">
          <img src={girl} alt="text" />
          </div>
          <h2 className="name">Rahul sharma</h2>
          <h2 className="post">Manager</h2>
          <div className="tele">
            <FaTelegramPlane className="teleIcon" size={28} color="#ffffff" />
            <MdEmail size={28} color="#ffffff" />
          </div>
        </div>
     
      
       
      </div>
    </div>
  );
};

export default Team;
