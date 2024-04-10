import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part1Style";
import { gsap } from "gsap/all";
import Image1 from "../../../public/Img/1.jpg";
import Image2 from "../../../public/Img/2.jpg";
import Image3 from "../../../public/Img/3.jpg";
import Image4 from "../../../public/Img/4.jpg";
import Image5 from "../../../public/Img/5.jpg";
import Image6 from "../../../public/Img/6.jpg";
import Image7 from "../../../public/Img/7.jpg";
import Image8 from "../../../public/Img/8.jpg";
import Image9 from "../../../public/Img/9.jpg";
import Image10 from "../../../public/Img/10.jpg";
import Image11 from "../../../public/Img/11.jpg";
import Image12 from "../../../public/Img/12.jpg";

function Part1() {
  const rows = [
    [Image1, Image2, Image3, Image4],
    [Image5, Image6, Image7, Image8],
    [Image9, Image10, Image11, Image12],
    [Image1, Image2, Image3, Image4],
    [Image5, Image6, Image7, Image8],
  ];

  let Part1Ref = useRef(null);

  useEffect(() => {
    let ctx1 = gsap.context(() => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: Part1Ref,
          start: "50% 50%",
          end: "250% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      tl1
        .to(".rotate-div", { rotate: -15, scale: 0.8 }, "a")
        .to(".row-div-1", { marginTop: "5%" }, "a")
        .to(".row-div-2", { marginTop: "-2%" }, "a")
        .to(".row-div-3", { marginTop: "-8%" }, "a")
        .to(".row-div-4", { marginTop: "-10%" }, "a")
        .to(".overlay-div h1", { opacity: 1, delay: 0.2 }, "a")
        .to(".overlay-div", { backgroundColor: "#000000b4" }, "a")
        .to(".scrolling", { width: "100%" }, "a");
    });

    return () => ctx1.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part1Ref = el)}>
      <div className="content-part-1">
        <div className="rotate-div">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`row-div row-div-${rowIndex}`}>
              {row.map((img, imgIndex) => (
                <div key={imgIndex} className="img-div">
                  <img src={img} alt={`Image ${rowIndex * 4 + imgIndex + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="overlay-div">
          <h1>Start-up Bundle</h1>
          <div className="scroll-down">
            <h3>SCROLL DOWN</h3>
            <div className="scroll-p">
              <div className="scrolling" />
            </div>

          </div>
        </div>
      </div>
  
    </Wrap>
  );
}

export default Part1;
