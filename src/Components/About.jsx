import React from "react";
import "../Styles/About.css";
import Footer from "./Footer";
import Navbar3 from "./Navbar3";
import Navbar2 from "./Navbar2";
export default function About() {
  return (
    <>
    <Navbar2 />
      <main>
        <section>
          <div className="aboutmain">
            <div className="innerabout">
              <div className="abouthead">
                We are fundamentally a Hybrid Growth-Enabling Company.
              </div>
            </div>
          </div>

          <div className="slidersa">

          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item   active" id="oneslider">
<div className="surya">Diagnose</div>
      {/* <img class="d-block imagehu" src="/Img/slider1.svg" alt="First slide" /> */}
    </div>
    <div class="carousel-item " id="oneslider1">
<div className="surya">Build</div>

      {/* <img class="d-block imagehu" src="/Img/slider1.svg" alt="Second slide" /> */}
    </div>
    <div class="carousel-item " id="oneslider2">
<div className="surya">Grow</div>

      {/* <img class="d-block imagehu" src="/Img/slider1.svg" alt="Third slide" /> */}
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>

         
          </div>

          <div className="aboutmain" id="aboutmain">
            <div className="abouttwo">
              <div className="leftabout">
                <h1>What we offer</h1>
                <p>
                  Sem tincidunt duis posuere at vel lacinia varius nisl neque.
                  Placerat sed nunc id ultricies sagittis vel vel sagittis
                  augue. Proin amet ultrices pulvinar id et tincidunt dolor
                  lorem. Purus rhoncus eget lorem pretium quam venenatis nunc
                  integer sit.{" "}
                </p>
                <div className="touch">
                  get in touch
                  <span>
                    <img src="/Img/aboutarrow.svg" />
                  </span>
                </div>
              </div>
              <div className="horizondallineko"></div>
              <div className="rightabout">
                <div className="linabout"></div>
                <div className="rightinner">
                  <div>Awe-Suite</div>
                  <div>Awe-ntrepreneur In-House</div>
                  <div>Business Design</div>
                  <div>Start-up Bundle</div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutmain" id="aboutmainheader">
            <div className="aboutheaders">
              <div className="core">Our Core</div>
              <div className="contebt">
                With the support of a diverse, highly experienced and
                well-equipped panel of 10+ mentors spanning various industries,
                we at Aweganyz have a robust foundation to guide and assist you
                on your growth journey.
              </div>
              <div className="headers">
                <div>
                  <div className="imageofhead"></div>
                  <div className="name">Sajen Sivaraman</div>
                  <div className="describ">Founder & Lead Strategist</div>
                  <div className="title">
                    Non cum eros eu dignissim et fringilla dui tempus. Aliquet
                    nam lobortis cras erat pellentesque. Posuere bibendum sit
                    metus sed auctor purus. Gravida eu ipsum suspendisse justo a
                    semper fermentum hac. Consectetur vitae molestie eget
                    dignissim aliquet massa amet facilisis ac. Nec dignissim
                    velit adipiscing luctus consequat in dolor vitae.
                  </div>
                </div>
                <div>
                  <div className="imageofhead2"></div>
                  <div className="name">Kamaleshwar</div>
                  <div className="describ">Co-founder & Head of Technology</div>
                  <div className="title">
                    Non cum eros eu dignissim et fringilla dui tempus. Aliquet
                    nam lobortis cras erat pellentesque. Posuere bibendum sit
                    metus sed auctor purus. Gravida eu ipsum suspendisse justo a
                    semper fermentum hac. Consectetur vitae molestie eget
                    dignissim aliquet massa amet facilisis ac. Nec dignissim
                    velit adipiscing luctus consequat in dolor vitae.
                  </div>
                </div>
                <div>
                  <div className="imageofhead3"></div>
                  <div className="name">Praveen Rathan</div>
                  <div className="describ">
                    Co-founder & Head of Communication Design
                  </div>
                  <div className="title">
                    Non cum eros eu dignissim et fringilla dui tempus. Aliquet
                    nam lobortis cras erat pellentesque. Posuere bibendum sit
                    metus sed auctor purus. Gravida eu ipsum suspendisse justo a
                    semper fermentum hac. Consectetur vitae molestie eget
                    dignissim aliquet massa amet facilisis ac. Nec dignissim
                    velit adipiscing luctus consequat in dolor vitae.
                  </div>
                </div>
              </div>
            </div>
          </div>
     
        </section>
        <Footer />
      </main>
    </>
  );
}
