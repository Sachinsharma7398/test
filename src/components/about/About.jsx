import React, { useEffect, useState } from "react";
import "./About.css";
import HorseSvg from "../../assets/svgs/horse.svg";
import PersonSvg from "../../assets/svgs/person.svg";
import HeartSvg from "../../assets/svgs/heart.svg";
import PencilSvg from "../../assets/svgs/pencil.svg";
import Countup from "react-countup";
import { getProject, getProjectApiCall } from "../../api/getproject";

const About = () => {
  const [projectData,setProjectData] = useState({
    portfolio_projects:"",
    community_members:"",
    private_investment:"",
    strategic_partners:"",
  })
  useEffect(() => {
    getProjectFunction();
  }, []);

  const getProjectFunction = async () => {
    try {
      const {data} = await getProjectApiCall();
      setProjectData({
        portfolio_projects:data.portfolio_projects,
        community_members:data.community_members,
        private_investment:data.private_investment,
        strategic_partners:data.strategic_partners,
      })
    } catch (e) {
      console.log("error while fetching project")
    }
  };

  console.log(projectData,"project data")

  return (
    <div
      className="about-container w-000 d-flex align-items-center justify-content-center flex-column"
      id="about"
    >
      <div className="about-heading text-color-white">
        Early stage private venture capital fund investing into the best
        blockchain projects in the emerging digital asset economy.
      </div>
      <div className="about-count-container text-center row text-color-white">
        <div className="col-lg-3  col-sm-6 col-6 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">
            <Countup duration={7} end={projectData.portfolio_projects.split(" ")[0] || 0} />{projectData.portfolio_projects.split(" ")[1] }
          </div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
           Return On Capital Deployed
          </div>
        </div>
        <div className=" col-sm-6 col-6 col-lg-3 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">
            <Countup duration={7} end={projectData.private_investment.split(" ")[0] || 0} />{projectData.portfolio_projects.split(" ")[1] }
          </div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
            Total Investments Invested
          </div>
      
        </div>
        <div className="col-sm-6 col-6 col-lg-3 col-md-6 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">
            <Countup duration={7} end={projectData.community_members.split(" ")[0] || 0} />{projectData.portfolio_projects.split(" ")[1] }
          </div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >
          Average Investments Size
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-6 col-md-6  about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">
            <Countup duration={7} end={projectData.strategic_partners.split(" ")[0] || 0} />{projectData.portfolio_projects.split(" ")[1] }
          </div>
          <div
            className="abount-count-item-heading"
            style={{ marginTop: "5px" }}
          >Assets Under Management
          </div>
        </div>
      </div>
      <div className="about-mh-ventures text-center text-color-white">
        ABOUT Us
      </div>
      <p className="text-color-white about-para">
        Marjan Capital is a private venture capital fund based out of United
        Arab Emirates with keen focus on investments around emerging
        digital-tech & blockchain projects across the globe.???
      </p>
      <p className="text-color-white about-para">
        At Marjan, we are very excited about the future growth of blockchain
        technologies & its evolving ecosystem. ???We actively invest in
        early-stage blockchain projects & are always looking for the next big
        idea.
      </p>
      <p className="text-color-white about-para">
        Send us your project details on fund@marjan.capital
      </p>
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
