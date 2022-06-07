import React, { useState } from "react";
import "./GetInTouch.css";
import messageIcon from "../../assets/svgs/message.svg";
import Launch from "../launch/Launch";
import { submitFormApi } from "../../api/contractApi";

const GetInTouch = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      if(form.name.length < 3) return alert("Please enter valid name")
      if(form.message.length < 7) return alert("Please enter long message")
      try{
       await submitFormApi(form)

      }catch(e){
          const errorMessage = e.message || "Error while submit"
          alert(errorMessage)
      }
   
  };

  return (
    <div className="row parentGet" id="contact">
      <div className="col-sm-12 col-lg-6">
        <Launch />
      </div>
      <div className=" col-sm-12 col-lg-6 ">
        <div className="get-in-touch  text-color-white">
          {/* <div className="get-in-touch-heading ">get in touch</div> */}
          <form className="row form-wrap" onSubmit={handleSubmit}>
            <div className="col-12 my-3 d-flex gap-2 ">
              <img width="45px" src={messageIcon} alt="message" />
              <div>
                <div style={{ fontSize: "14px", letterSpacing: "2px" }}>
                  EMAIL
                </div>
                <div style={{ fontSize: "14px", letterSpacing: "2px" }}>
                  fund@marjan.capital
                </div>
              </div>
            </div>
            <div className="col-lg-6 name-container ">
              <input
                className="w-100 p-2 rounded form-control"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-6 ">
              <input
                className="w-100 p-2  rounded form-control"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 mt-3">
              <input
                className="w-100 p-2 rounded form-control"
                type=""
                name="message"
                placeholder="Enter Message"
                value={form.message}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className="form-footer mt-3 d-flex justify-content-between align-items-center flex-wrap">
              <div className="flex-grow" style={{ color: " #6b6b6b" }}>
                All fields are required
              </div>
              <div className="">
                <button
                type="submit"
                  className="border-white btn btn-transparent "
                  style={{ color: "#f2f2f2" }}
                >
                  Submit message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
