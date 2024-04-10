import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Navbar.css'
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Navbar3= () => {

  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  
    // <Sidebar isopen={isopen} toggle={toggle}  />
  };


  const location = useLocation();
  const path = location.pathname;
  const refOneNav = useRef()
  const refTwoNav = useRef()
  const refThreeNav = useRef()
  const refFourNav = useRef()


  useEffect(() => {
     
    if(path === "/awesuite"){
        refOneNav.current.classList.add("changed")
    }
    else if(path === "/aih"){
      refTwoNav.current.classList.add("changed")
    }
    else if(path === "/bsdesign"){
      refThreeNav.current.classList.add("changed")
    }
    else if(path === "/bundle"){
      refFourNav.current.classList.add("changed")
    }
    else{
        return
    }

}, []);



  return (
     <>
     <Sidebar isopen={isopen} toggle={toggle} />
     <div className='navbar3'>
     <nav>
        
        <div className='nav1' >
         <a href='/'> <div className='nav11'> <img src='../Img/Aweganyzlogo1.svg'></img></div></a>
          </div>
         

        <div className='nav2'> 
        <div className='nav212a'>
  <a href='/awesuite'>   <div ref={refOneNav} >Awe-Suite</div></a>
      <a href='aih'>  <div ref={refTwoNav}>Awe-ntrepreneur In-House</div></a>
      <a href='/bsdesign'>  <div ref={refThreeNav}>Business design</div></a>
      <a href='/bundle'>  <div ref={refFourNav}>Startup Bundle</div></a>

        </div>
        </div>

        <div className='nav3'>
      <div className='nav31'> 
      <a  className="menulogo"   href='about'>    <img src='../Img/col22.svg'></img></a>
      <a className="menulogo1" href=''>    <img src='../Img/nav2.svg'></img></a>

          
              </div>        
         </div>

     </nav>
     </div>
     
     <div className='mnavbar'>
         <div  className='mnavbar1'>
           <a href='/' className='mnavbar11'><img src='../Img/navmv1.svg'></img></a>
           <a onClick={toggle}  className='mnavbar12'><img src='../Img/navmv2.svg'></img></a>
         </div>
    </div>
   


     </>
  )
}

export default Navbar3