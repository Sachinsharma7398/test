import React from "react";
import "./App.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getintouch/GetInTouch";
import Header from "./components/header/Header";
import Perfomers from "./components/perfomers/Perfomers";
import Team from "./components/team/Team";

const App = () => {
  return (
    <div className="main-app-container">
      <Header />
      <Banner />
      <About />
      <Perfomers/>
      <Team/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default App;
