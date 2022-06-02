import React, { useEffect, useState } from "react";
import "./Header.css";
import headerLogo from "../../assets/images/headerLogo.png";

const Header = () => {
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);
  }, []);

  const opennewtab = (url) => {
    window.open(url);
  };

  const scrollCheck = (e) => {
    let scrollTop = window.scrollY;
    scrollTop > 50 ? setScroll(true) : setScroll(false);
  };
  return (
    <div
      className={`header text-color-white position-fixed top-0 row d-flex justify-content-between ${
        scrolled && "backgroundBlack"
      }  `}
    >
      <div className=" col-2 d-flex align-items-center">
        <img className="header-logo" src={headerLogo} alt="header logo" />
      </div>
      <div className="nav-items-container text-color-white  container-fluid col-10 d-flex justify-content-end align-items-center">
        <div className=" nav-item">
          <a style={{ color: "inherit", textDecoration: "none" }} href="#home">
            Home
          </a>
        </div>
        <div className=" nav-item">
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
            About
          </a>
        </div>
        <div className=" nav-item">
          <a
            href="#portfolio"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Portfolio
          </a>
        </div>
        <div className=" nav-item">
          <a href="#team" style={{ color: "inherit", textDecoration: "none" }}>
            Team
          </a>
        </div>
        <div className=" nav-item">
          <a
            onClick={()=> opennewtab("https://medium.com/@marjancapital")}
            style={{ color: "inherit", textDecoration: "none",cursor:"pointer" }}
          >
            Media
          </a>
        </div>
        <div className=" nav-item">
          <a
            href="#contact"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
