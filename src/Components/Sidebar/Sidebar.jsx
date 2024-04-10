import React from "react";
import "./Sidebar.css";
// import navbarItems from "../NavbarItems";
// import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
      <a href='/'> <div className='nav11'> <img src='../Img/logoblack.svg'></img></div></a>
      <div  onClick={toggle}><img src="/Img/close.svg" /></div>
        {/* <FaTimes className="close-icon" /> */}
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
        <a href="/awesuite">     <div>Awe-Suite</div></a>
        <a href="/aih">   <div>Awe-ntrepreneur In-House</div></a>
        <a href="/bsdesign"><div>Business design</div></a>
        <a href="/bundle"> <div>Startup Bundle</div></a>
        <a href="/contact">         <div>collaborate with us<span><img src="/Img/arrp.svg" /></span></div></a>
    
      
         
        

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
