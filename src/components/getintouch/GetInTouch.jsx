import React from "react";
import "./GetInTouch.css";
import messageIcon from "../../assets/svgs/message.svg";

const GetInTouch = () => {
  return (
    <div className="get-in-touch  text-color-white">
      <div className="get-in-touch-heading ">get in touch</div>
      <div className="row form-wrap">
        <div className="col-12 my-3 d-flex gap-2">
          <img width="45px" src={messageIcon} alt="message" />
          <div>
            <div style={{ fontSize: "14px", letterSpacing: "2px" }}>EMAIL</div>
            <div style={{ fontSize: "14px", letterSpacing: "2px" }}>
              info@mhventures.io
            </div>
          </div>
        </div>
        <div className="col-6">
          <input
            className="w-100 p-2 rounded form-control"
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="col-6">
          <input
            className="w-100 p-2  rounded form-control"
            type="email"
            name="name"
            placeholder="Enter Email"
          />
        </div>
        <div className="col-12 mt-3">
          <input
            className="w-100 p-2 rounded form-control"
            type=""
            name="messsage"
            placeholder="Enter Message"
          />
        </div>
        <div className="form-footer mt-3 d-flex justify-content-between align-items-center">
          <div className="" style={{color:" #6b6b6b"}}>All fields are required</div>
          <div className="">
            <button className="border-white btn btn-transparent " style={{color:"#f2f2f2"}}>
              Submit message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;