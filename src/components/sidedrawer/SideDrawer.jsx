import React, { useEffect } from "react";
import "./index.css";
import { GrClose } from "react-icons/gr";

const SideDrawer = ({ setSideDrawer }) => {
  useEffect(() => {
    return () => {};
  });
  const opennewtab = (url) => {
    window.open(url);
  };

  return (
    <div className="sideDrawer">
      <div
        className="close"
        onClick={() => {
          setSideDrawer(false);
        }}
      >
       X
      </div>

      <div className="item">
        <a style={{textDecoration:"none",color:"inherit"}} href="#home">Home</a>
      </div>
      <div className="item"><a style={{textDecoration:"none",color:"inherit"}} href="#about">About</a></div>
      <div className="item"><a style={{textDecoration:"none",color:"inherit"}} href="#portfolio">Portfolio</a></div>
      <div className="item"><a style={{textDecoration:"none",color:"inherit"}} href="#team">Team</a></div>
      <div className="item"><a  onClick={() => opennewtab("https://medium.com/@marjancapital")}>Media</a></div>
      <div className="item"><a style={{textDecoration:"none",color:"inherit"}} href="#contact">Contact</a></div>
    </div>
  );
};

export default SideDrawer;
