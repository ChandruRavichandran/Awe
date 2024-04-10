import React from "react";
import "../Styles/Awesuite.css";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import {projects} from "./data"
import Card from "./Card";
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Navbar2 from "./Navbar2";
import Mobileas from "./Mobileas";

console.log(projects.length , "newone");
function AweSuite() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
    <Navbar2/>
      <main>
        <section>
          <div className="nainhead">
            <div className="maindiv">
                <div className="one">Awe-suite</div>
                <div className="two">Bespoke solutions for Growth-stage businesses.</div>
            </div>
          </div>

          <div>
      <div className="mobilenijk">
        <Mobileas />
      </div>

          <div ref={container} className="main11" >
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          console.log(i, "target");
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }

      <div>
        
      </div>


      
    </div>

    <div className='top5'>
               <div className='top51'>
                  <div className='top52'><img src='../Img/faq.svg'></img></div>
               </div>

               <div className='top53'>
                <div className='inner53'>
                <div className='top55'>
                  <div className='top551'> Having questions?</div>
                  <div className='top56'>
                    <div className='top561'>Have more questions?</div>
                    <div className='top562'>Book a free 60 mins discovery call</div>
                    <div  className='top563'>
                   <a><div  className='top564'>book a call <img src='../Img/warrow.svg'/></div></a>
                    </div>                 
                   </div>
                </div>

                <div className='top57'>
                <div className='top571'>
                   
                   <div className='top572'>Enim etiam nibh aliquet feugiat molestie nibh.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample1" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>

                    <div className='top571'>
                   
                   <div className='top572'>Quis vulputate donec diam erat sit vel tellus.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample2" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Pellentesque eros in quisque feugiat.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample3" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Placerat porta magna tortor nullam auctor cras in orci lectus.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample4" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Potenti ut nulla ullamcorper sem.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample5" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                
                    <div className='top571'>
                   
                   <div className='top572'>Sed magna dictum id aliquet etiam urna aliquet a.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample6" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Ipsum lectus nunc aliquam sapien volutpat dolor.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample7" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Proin faucibus faucibus posuere tincidunt.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample8" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Purus luctus gravida nulla amet et aliquet tellus neque.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample9" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Dictumst tellus sed amet aliquam id convallis in id.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample10" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Eget sit quisque in sed.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample11" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                    <div className='top571'>
                   
                   <div className='top572'>Velit tempus pharetra sit blandit fringilla nisl a.</div> 
                   <div className='top355'>
                   <img src='../Img/faq1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample12" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                   </div>  </div>
                     
              
                   <div class="collapse" id="collapseExample12" >
                   <div class="card-body"  id='top572'>
                   We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                    </div>
                    </div>
                </div>

                <div className='top56mv'>
                    <div className='top561'>Have more questions?</div>
                    <div className='top562'>Book a free 60 mins discovery call</div>
                    <div  className='top563'>
                   <a><div  className='top564'>book a call <img src='../Img/warrow.svg'/></div></a>
                    </div>                 
                   </div>



                

               </div>
              
              
               </div>  
                </div>
          </div>
   

        </section>
        <Footer />
      </main>

      {/* <Navbar1 /> */}
    </>
  );
}

export default AweSuite;
