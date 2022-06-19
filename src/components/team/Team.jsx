import React, { useEffect, useState } from "react";
import "./Team.css";

import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { getTeamPersonsApiCall } from "../../api/getTeam";

const Team = () => {

  const [teamMembers,setTeamMembers] = useState([])

  useEffect(()=>{
    getTeamPersons();
  },[])

  const getTeamPersons=async()=>{
      try{
        const {data}  = await getTeamPersonsApiCall();
        setTeamMembers(data.profile_list)
      }catch(e){}
  }

  const opennewtab = (url) => {
    window.open(url);
  };



  return (
    <div className="perfomers-section" id="team">
      <div className="perfomers-heading text-color-white">Our team</div>
      <div className="teams-items-container d-flex   text-color-white">
       {teamMembers.length > 0 && teamMembers.map((item,index)=>{
         return(
          <div className="teamItem" key={index}>
          <div className="teamItemImg">
          <img src={`data:image/png;base64,${item.image}`} alt="text" />
          </div>
          <h2 className="name"  >{item?.name}</h2>
          <h2 className="post">{item?.position}</h2>
          <div className="tele">
            {item?.telegram_profile && <FaTelegramPlane onClick={()=>{opennewtab(item.telegram_profile)}} className="teleIcon icon" size={28} color="#ffffff"/>}
            {item.email_id && <a href={`mailto:${item.email_id}`}><MdEmail size={28}  className="icon" color="#ffffff" /></a>}
          </div>
        </div>
         )
       }) }
        
        
     
      
       
      </div>
    </div>
  );
};

export default Team;
