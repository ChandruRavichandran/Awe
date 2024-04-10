import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import "../Styles/Bundle.css";
import { gsap, ScrollTrigger } from "gsap/all";
import { smooth } from "./utils/smooth";
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import Part7 from "./part7/Part7";
import Part4 from "./Part4";
import { Wrap } from "./styles";
import { useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar/Sidebar";


const Bundle = () => {

  
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    // alert(isopen)
    // <Sidebar isopen={isopen} toggle={toggle}  />
  };

  const location = useLocation();
  const path = location.pathname;
  const refOneNav = useRef()
  const refTwoNav = useRef()
  const refThreeNav = useRef()
  const refFourNav = useRef()


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    smooth();

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
    
  });

  return (
    <>
     <Sidebar isopen={isopen} toggle={toggle} />

      <div className="main">
      <Wrap>
      {/* <Navbar2 /> */}

      <Part1 />
        <Part2 />
        <Part4 />
        <Part7 />
        <div className="suryajkhgilj">
        <div className='navbarjhfgh'>
        <nav >
        
        <div className='nav1'>
         <a href='/'> <div className='nav11'> <img src='../Img/logoblack.svg'></img></div></a>
          </div>
         

        <div className='nav2'> 
        <div className='nav21'>
        <a href='/awesuite'>   <div ref={refOneNav} >Awe-Suite</div></a>
      <a href='aih'>  <div ref={refTwoNav}>Awe-ntrepreneur In-House</div></a>
      <a href='/bsdesign'>  <div ref={refThreeNav}>Business design</div></a>
      <a href='/bundle'>  <div ref={refFourNav}>Startup Bundle</div></a>
         {/* <a><img src='../Img/col3.svg'></img></a>
         <a><img src='../Img/col4.svg'></img></a>
         <a><img src='../Img/col5.svg'></img></a>
         <a><img src='../Img/col6.svg'></img></a> */}
        </div>
        </div>

        <div className='nav3'>
             <div className='nav31'> 
             <a href='about'> <img src='../Img/col22.svg'></img></a>

             {/* <a>collaborate with us</a> */}
             {/* <a> <img src='../Img/col1.svg'></img></a>
              <a> <img src='../Img/arrow1.svg'></img></a> */}
              </div>        
         </div>

     </nav>
     </div>
     
     <div className='mnavbar00' id="hgfytgiu">
         <div  className='mnavbar1'>
           <a href='/' className='mnavbar11'><img src='../Img/navmv1.svg'></img></a>
           <a onClick={toggle} className='mnavbar12'><img src='../Img/navmv2.svg'></img></a>

         </div>
    </div>
   

        </div>
      </Wrap>

        <div className="top5a">
          <div className="top53a">
            <div className="inner53  inner53a ">
              <div className="top55">
                <div className="top551a"> Having questions?</div>
                <div className="top56">
                  <div className="top561a">Have more questions?</div>
                  <div className="top562a">
                    Book a free 60 mins discovery call
                  </div>
                  <div className="bs5a">
                    <a>
                      <div className="bs6a">
                        book a call <img src="../Img/barrow.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="top57">
                <div className="top571">
                  <div className="top572a">
                    Enim etiam nibh aliquet feugiat molestie nibh.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample1">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>

                <div className="top571">
                  <div className="top572a">
                    Quis vulputate donec diam erat sit vel tellus.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample2">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Pellentesque eros in quisque feugiat.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample3">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Placerat porta magna tortor nullam auctor cras in orci
                    lectus.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample4"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample4">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Potenti ut nulla ullamcorper sem.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample5"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample5">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>

                <div className="top571">
                  <div className="top572a">
                    Sed magna dictum id aliquet etiam urna aliquet a.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample6"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample6">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Ipsum lectus nunc aliquam sapien volutpat dolor.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample7"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample7">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Proin faucibus faucibus posuere tincidunt.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample8"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample8">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Purus luctus gravida nulla amet et aliquet tellus neque.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample9"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample9">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Dictumst tellus sed amet aliquam id convallis in id.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample10"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample10">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">Eget sit quisque in sed.</div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample11"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample11">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
                <div className="top571">
                  <div className="top572a">
                    Velit tempus pharetra sit blandit fringilla nisl a.
                  </div>
                  <div className="top355">
                    <img
                      src="../Img/faq2.svg"
                      class="btn btn-primary-black"
                      data-bs-toggle="collapse"
                      href="#collapseExample12"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></img>
                  </div>{" "}
                </div>

                <div class="collapse" id="collapseExample12">
                  <div class="card-body" id="top572a">
                    We'll craft a brand identity that's as unique as your
                    grandma's secret cookie recipe (and just as irresistible).
                  </div>
                </div>
              </div>
              <div className="top56mv">
                <div className="top561a">Have more questions?</div>
                <div className="top562a">
                  Book a free 60 mins discovery call
                </div>
                <div className="bs5a">
                  <a>
                    <div className="bs6a">
                      book a call <img src="../Img/arrow1.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </>
  );
};

export default Bundle;
