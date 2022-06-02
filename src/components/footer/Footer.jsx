import React from "react";
import "./Footer.css";
import logo from '../../assets/images/headerLogo.png';
import twitterLogo from '../../assets/svgs/twitter.svg'
import telegramLogo from '../../assets/svgs/telegram.svg'
import messageLogo from '../../assets/svgs/message.svg'
import linkedin from '../../assets/images/linkedin.png'

const Footer = () => {
  const redirect =(url) =>{
    window.open(url);
  }
  return (
    <div className="footer-section text-color-white">
      <div className="mh-img-container text-center mb-4">
          <img width="130px" src={logo} alt="logo"/>
      </div>
      <div className="social-container text-center my-5">
          <img style={{cursor:"pointer"}} className="mx-3" width="35x" onClick={()=>{redirect('https://twitter.com/MarjanCapital')}} src={twitterLogo}/>
          <img style={{cursor:"pointer"}} className="mx-3" width="35px" onClick={()=>{redirect('https://t.me/marjancapital  ')}} src={telegramLogo}/>
          <img style={{cursor:"pointer"}} className="mx-3" width="35px" onClick={()=>{redirect('https://www.linkedin.com/company/marjancapital/')}} src={linkedin}/>
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
