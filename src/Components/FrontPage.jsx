import React, { useEffect, useRef, useState } from 'react'
import Navbar1 from './Navbar1'
import Footer from './Footer'
import '../Styles/Frontpage.css'

import TimelineObserver from "react-timeline-animation";
import { smooth } from './utils/smooth';
import { HashRouter } from 'react-router-dom';


const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("FirstOne");
  const [message5, setMessage5] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  // const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);

  const someCallback = () => {
// setMessage4("")
    setMessage1("Build");
    setMessage3("Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. ");
    callback();
    // HashRouter()

  };

  const someCallback2 = () => {
    setMessage2("Grow");
    setMessage5("Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. ")
// hasReverse()
// callback();
  };


  useEffect(() => {
    smooth()
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    // setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    // setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div className='tyjfdyukigh'>
    <div className="wrapper">
       <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          
        </div>
        <div className="message">
        <div className='FirstOne'></div>
        <div className='diuiobuji'>Diagnose</div>
        <div className='diuiobuji1'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. </div>
        </div>
      </div>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          
        </div>
        <div className="message">
        <div className={message4}></div>
        <div className='diuiobuji'>{message1.length > 0 ? message1 : <span className='hgfdytrfcuy'>Build</span>} </div>
        <div className='diuiobuji1'>{message3.length > 0 ? message3 : <span className='hgfdytrfcuy1'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. </span> }</div>
        
        </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          
        </div>
        <div className="message">
        <div className={message4}></div>
        <div className='diuiobuji'>{message2.length > 0 ? message2 : <span className='hgfdytrfcuy'>Grow</span>}</div>
        <div className='diuiobuji1'>{message5.length > 0 ? message5 : <span className='hgfdytrfcuy1'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. </span> }</div>
        </div>
      </div>
      {/* <div id="timeline3" ref={timeline3} className="timeline" /> */}
  
    </div>
    </div>
  );
};


const FrontPage = () => {

  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <>

     <main>
        
        <section>
        <Navbar1/>

              <div className='top1'>
                <div className='top01'>
                   <div className='top11'>We are</div>
                   <div className='top110'><img src='../Img/a.svg'></img></div>
                   <div className='top110mv'><img src='../Img/mv1.svg'></img></div>

                   {/* <div className='top12'>A Hybrid Growth</div>
                   <div className='top12'>Enabling Company</div> */}
                </div>
                <div  className='top02'>
                 <div  className='top13'>
                   <div  className='top14'>Book a free 60 mins discovery call</div>
                   <div  className='top15'>
                   <a href='/contact'><div  className='top17'>book a call <img src='../Img/warrow.svg'/></div></a>
                    </div>
                 </div>
                 <div  className='top16'>We enable Business Owner's and CEO's to make informed decisions.</div>
                </div>
             </div>
           
            



      {/* <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#0A66C2"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div> */}


            {/* <div className='topwee'>
                <img src='../Img/we1.svg'></img>
              </div>
              <div className='topwee1'>
                <img src='../Img/mv2.svg'></img>
              </div> */}
              <div className='top2'>
              <div className='top21'>
                  <div className='top22'><img src='../Img/wedo.svg'></img></div>
               </div>
                <div className='top23'>
             
                  <div className='top24'>What we fundamentally <br></br> do...</div>



      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#0A66C2"
        hasReverse="boolean"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
            
          />
        )}
      />
      <div className="stub2">{message}</div>
     

                </div>

                

              </div>
             



            <div className='top3'>
               <div className='top31'>
                  <div className='top32'><img src='../Img/who.svg'></img></div>
               </div>
               <div className='top33'>
                   <div className='top34'>
                   <div className='top341 '>If you are reading this,<br></br> you must be</div>
                   {/* <div className='top342'><img src='../Img/a4.svg'></img> </div> */}
                   <div className='top342'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. Proin amet ultrices pulvinar id et tincidunt dolor lorem. Purus rhoncus eget lorem pretium quam venenatis nunc integer sit. </div>

                     <div className='top343'><img src='../Img/a5.svg'></img></div>
                   </div>

                    <div className='top35'>

                    <div className='top351' >
                    <hr className='hr'></hr>
                     <div className='top352'>
                   
                     <div className='top353'>A Startup Founder</div> 
                     <div className='top355'>
                     <img src='../Img/acco1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                     </div>                     </div>
                       
                
                     <div class="collapse" id="collapseExample1" >
                     <div class="card-body"  id='top354'>
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                      </div>
                      </div>
                     </div>



                     <div className='top351' >
                    <hr className='hr'></hr>
                     <div className='top352'>
                   
                     <div className='top353'>Owner/CEO of a Growth-stage company</div> 
                     <div className='top355'>
                     <img src='../Img/acco1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                     </div>
                     </div>
                       
                
                     <div class="collapse" id="collapseExample2" >
                     <div class="card-body"  id='top354'>
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                      </div>
                      </div>
                     </div>


                     <div className='top351' >
                    <hr className='hr'></hr>
                     <div className='top352'>
                   
                     <div className='top353'>An Inventor</div> 
                     <div className='top355'>
                     <img src='../Img/acco1.svg'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample"></img>

                     </div>                     </div>
                       
                
                     <div class="collapse" id="collapseExample3" >
                     <div class="card-body"  id='top354'>
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                      </div>
                      
                      </div>
                      <hr className='hr'></hr>
                     </div>





                    </div>
               </div>
            </div>

            <div>
              
            </div>


            <div className='top4'>
               <div className='top41'>
                  <div className='top42'><img src='../Img/ser.svg'></img></div>
               </div>
               <div className='top43'>
                <div className='top44'>
                  <div className='top431'>Dolor nunc aliquam ipsum purus </div> 
                  <div className='top431'>donec dignissim nisi amet. Nibh.</div>
                </div>
                <div className='top44mv'>
                  <div className='top431'>Dolor nunc aliquam ipsum purus  donec dignissim nisi amet. Nibh.</div> 

                </div>
                <div className='top45'>
                  <div className='top451'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. </div> 
                  <div className='top451'> Placerat sed nunc id ultricies sagittis vel vel sagittis augue. </div>
                </div>
                <div className='top45mv'>
                  <div className='top451'>Sem tincidunt duis posuere at vel lacinia varius nisl neque. Placerat sed nunc id ultricies sagittis vel vel sagittis augue. </div> 
                 
                </div>

               <div  className='top46'>

                <div className='top461'>
                  <div className='top462'><img src='../Img/ser1.svg'></img></div>
                  <div className='top463'>Awe-Suite</div>
                  <div className='top467'>
                  <div className='top464'>A suite of high-end strategic services</div>
                  <a className='top465'><div className='top466'>know more</div><img src='../Img/warrow1.svg'></img></a>
                  </div>
          
                </div>

                

                <div className='top461'>
                  <div className='top462'><img src='../Img/ser1.svg'></img></div>
                  <div className='top463'>Awe-ntrepreneur In-House</div>
                  <div className='top467'>
                  <div className='top464'>A fractional hire with a full-scale efficiency.</div>
                  <a className='top465'><div className='top466'>know more</div><img src='../Img/warrow1.svg'></img></a>
                  </div>
                
                </div>

                
                <div className='top461'>
                  <div className='top462'><img src='../Img/ser1.svg'></img></div>
                  <div className='top463'>Business Design</div>
                  <div className='top467'>
                  <div className='top464'>Sustainable & customer-centric business modeling for every innovator.</div>
                  <a className='top465'><div className='top466'>know more</div><img src='../Img/warrow1.svg'></img></a>
                  </div>
             
                </div>

                
                <div className='top461'>
                  <div className='top462'><img src='../Img/ser1.svg'></img></div>
                  <div className='top463'>Start-up Bundle</div>
                  <div className='top467'>
                  <div className='top464'>A launchpad for startup founders</div>
                  <a className='top465'><div className='top466'>know more</div><img src='../Img/warrow1.svg'></img></a>
                  </div>
               
                </div>

               </div>
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


         


     


         
        </section>
        
        <Footer/>
   
     </main>
     
    </>
  )
}

export default FrontPage