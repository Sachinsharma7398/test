import React from "react";
import Marquee from "react-fast-marquee";
import './Marque.css'

const Marque = ({children}) => {
  return (
    < div className="custom-marque">
      <Marquee
        style={{ background: "transparent" }}
        className="text-color-white marqueCustom"
      >
        {children}
      </Marquee>
    </div>
  );
};

export default Marque;
