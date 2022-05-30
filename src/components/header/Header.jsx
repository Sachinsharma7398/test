import React, { useEffect, useState } from 'react'
import './Header.css'
import headerLogo from '../../assets/images/headerLogo.png'

const Header = () => {

  const [scrolled,setScroll] = useState(false);

  useEffect(()=>{

    window.addEventListener('scroll',scrollCheck)
   
  },[])

  const scrollCheck=(e)=>{
      let scrollTop =window.scrollY;
      scrollTop > 50 ?  setScroll(true): setScroll(false);
  }
  return (
    <div className={`header text-color-white position-fixed top-0 row d-flex justify-content-between ${scrolled && "backgroundBlack"}  `}>
        <div className=' col-2 d-flex align-items-center'><img className='header-logo' src={headerLogo} alt="header logo"/></div>
        <div className='nav-items-container text-color-white  container-fluid col-10 d-flex justify-content-end align-items-center'>
                <div className=' nav-item'>Home</div>
                <div className=' nav-item'>About</div>
                <div className=' nav-item'>Portfolio</div>
                <div className=' nav-item'>Team</div>
                <div className=' nav-item'>Media</div>
                <div className=' nav-item'>Contact</div>
        </div>
    </div>
  )
}

export default Header