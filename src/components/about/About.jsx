import React from "react";
import "./About.css";
import HorseSvg from "../../assets/svgs/horse.svg";
import PersonSvg from "../../assets/svgs/person.svg";
import HeartSvg from "../../assets/svgs/heart.svg";
import PencilSvg from "../../assets/svgs/pencil.svg";

const About = () => {
  return (
    <div className="about-container w-100 d-flex align-items-center justify-content-center flex-column">
      <div className="about-heading text-color-white">
        A GOLD STANDARD COMMUNITY-BACKED INVESTMENT GROUP, SUPPORTING ONLY THE
        BEST BLOCKCHAIN PROJECTS.
      </div>
      <div className="about-count-container text-center row text-color-white">
        <div className="col-lg-3 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
            PORTFOLIO
          </div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-lg-3 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
            PORTFOLIO
          </div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-lg-3 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
            PORTFOLIO
          </div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-lg-3 col-md-6  about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
            PORTFOLIO
          </div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
      </div>
      {/* <div className="about-mh-ventures text-center text-color-white">
        ABOUT MH VENTURES
      </div> */}
      {/* <div className="row about-details-container text-color-white">
        <div className="col-lg-3 about-detail-item d-flex flex-column justify-content-center align-items-center">
          <div className="about-detail-item-img-container">
            <img src={HorseSvg} alt="horse" />
          </div>
          <div className="about-detail-item-text">OUR MISSION</div>
        </div>
        <div className="col-lg-3 about-detail-item d-flex flex-column justify-content-center align-items-center">
          <div className="about-detail-item-img-container">
            <img src={PersonSvg} alt="person" />
          </div>
          <div className="about-detail-item-text">OUR TEAM</div>
        </div>
        <div className="col-lg-3 about-detail-item d-flex flex-column justify-content-center align-items-center">
          <div className="about-detail-item-img-container">
            <img src={HeartSvg} alt="heart" />
          </div>
          <div className="about-detail-item-text">OUR COMMUNITY</div>
        </div>
        <div className="col-lg-3 about-detail-item d-flex flex-column justify-content-center align-items-center">
          <div className="about-detail-item-img-container">
            <img src={PencilSvg} alt="SKILLS" />
          </div>
          <div className="about-detail-item-text">OUR SKILLS</div>
        </div>
      </div> */}

      {/* <div className="row about-text-details-container text-color-white">
        <div className="col-lg-4  about-text-details-para">
          We are veterans of Wall Street, advertising, marketing, creative, and
          have a portfolio of successful ventures in both traditional business
          and most importantly, blockchain!
        </div>
        <div className="col-lg-4  about-text-details-para">
        MH Ventures is well placed within the blockchain community to help ensure the success of projects willing to take guidance from a team that has success within its roots! Our contacts and truly beneficial partnerships with top-tier partners allow us to successfully guide and advise our portfolio projects and place them on a path to success.
        </div>
        <div className="col-lg-4  about-text-details-para">
        MH Ventures is committed to the success of all involved and we take a top down approach to ensure that the foundations of success are bred within!
        </div>
      </div> */}
    </div>
  );
};

export default About;
