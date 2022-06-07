import React, { useEffect, useState } from "react";
import "./Perfomers.css";
import portfolioItemImage from "../../assets/images/portfolioItem.jpeg";
import { getPortfolioApiCall } from "../../api/getPortfolio";

const Perfomers = () => {
  const [portFolioItem, setPortFolioItem] = useState([]);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    try {
      const { data } = await getPortfolioApiCall();
      setPortFolioItem(data.profile_list);
    } catch (e) {}
  };

  
  const opennewtab = (url) => {
    url && window.open(url);
  };


  return (
    <div className="perfomers-section" id="portfolio">
      <div className="perfomers-heading text-color-white">Portfolio</div>
      <div className="perfomers-items-container d-flex   text-color-white">
        {portFolioItem.length > 0 &&
          portFolioItem.map((item, index) => {
            return (
              <div className="portfolioItem" onClick={()=>{opennewtab(item?.url)}} style={{cursor:"pointer"}}>
                <img src={`data:image/png;base64,${item.image}`} alt="text" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Perfomers;
