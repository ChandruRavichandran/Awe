import React from "react";
import "../Styles/Contact.css";
import Navbar3 from "./Navbar3";
export default function Contact() {
  return (
    <>
    <Navbar3 />
      <main>
        <section>
          <div className="contact" id="contact">
            <div className="innercontact">
              <div></div>
              <div>
                <div className="contact12">
                  We exclusively collaborate with brands that resonate deeply
                  with our passion and values.
                </div>
                <div className="contact13">
                  Protecting your privacy is our top priority.
                </div>
                <div className="contact14">Happy to Connect!</div>
              </div>
              <div className="lastcontact">
                <div className="scrolldown">SCROLL DOWN</div>
              </div>
            </div>
          </div>

          <div className="contactimage">
            <img src="/Img/conimg.svg" />
          </div>

          <div className="contactform">
            <div className="contactforminner">
              <div>
                <div className="freshper">NEED A FRESH PERSPECTIVE?</div>
                <div className="mehfcv">
                  Quam pharetra eu libero adipiscing ut commodo bibendum vitae
                  vitae.
                </div>
              </div>
              <div>
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="Phone Number" />
                <br />
                <input type="email" placeholder="E-mail" />
                <br />
                <input type="text" id="message" placeholder="Message" />

                <div className="sendfiles">
                  send form
                  <span>
                    <img src="/Img/arraowimji.svg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
         
        </section>
         <div className='innnnerrontoo'>
  <div className='lastfooter'>
     <div>© 2024 NEW TAB TECH LAB PRIVATE LIMITED</div>
     <div>Sitemap</div>
  </div>
</div>
      </main>
      
    </>
  );
}
