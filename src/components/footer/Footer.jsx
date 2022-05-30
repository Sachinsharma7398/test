import React from "react";
import "./Footer.css";
import logo from "../../assets/images/marjan logo.png";
import twitterLogo from '../../assets/svgs/twitter.svg'
import telegramLogo from '../../assets/svgs/telegram.svg'
import messageLogo from '../../assets/svgs/message.svg'

const Footer = () => {
  return (
    <div className="footer-section text-color-white">
      <div className="mh-img-container text-center mb-4">
          <img width="130px" src={logo} alt="logo"/>
      </div>
      <div className="social-container text-center my-5">
          <img className="mx-3" width="35x" src={twitterLogo}/>
          <img className="mx-3" width="35px" src={telegramLogo}/>
          <img className="mx-3" width="35px" src={messageLogo}/>
      </div>
      {/*<div className="footer-bottom-text-one text-center">
        VENTURES MARKETING (COMING SOON)
  </div>*/}
      <div className="footer-bottom-text-two text-center">© MARJAN CAPITAL 2022</div>
      {/*<div className="footer-bottom-text-three text-center">A MASTERFUL CREATION</div>*/}
    </div>
  );
};

export default Footer;
