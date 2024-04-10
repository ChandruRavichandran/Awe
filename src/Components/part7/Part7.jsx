import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part7Style";
import { gsap } from "gsap/all";
import IMG1 from "../../../public/Img/1.jpg";
import IMG2 from "../../../public/Img/2.jpg";
import IMG10 from "../../../public/Img/10.jpg";
import IMG11 from "../../../public/Img/11.jpg";
import IMG12 from "../../../public/Img/12.jpg";
import IMG13 from "../../../public/Img/13.jpg";
import IMG14 from "../../../public/Img/14.jpg";

function Part7() {
  let Part7Ref = useRef(null);
  let DemoRef = useRef(null);
  let OurWorkRef = useRef(null);
  let OurTextRef = useRef(null);
  let OurRef = useRef(null);
  let OurWork = useRef(null);
  let ScrollRef = useRef(null);

  useEffect(() => {
    let ctx7 = gsap.context(() => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: Part7Ref,
          start: "50% 50%",
          end: "300% 50%",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl7
        .to(DemoRef, { bottom: "7%" })
        .to(OurTextRef, { height: "60vh" }, "height")
        .to(OurWorkRef, { height: "60vh" }, "height")
        .to(OurRef, { left: "0%" }, "height")
        .to(OurWork, { right: "0%" }, "height")
        .to(ScrollRef, { marginTop: "-300%" });
    });

    return () => ctx7.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part7Ref = el)}>
      <div className="our-work-txt" ref={(el) => (OurWorkRef = el)}>
        <h1 ref={(el) => (OurRef = el)}>Our</h1>
        <h1 className="inenergfdcv" ref={(el) => (OurWork = el)}>Work</h1>
      </div>
      <div className="our-work-txt-div" ref={(el) => (OurTextRef = el)}>
        <div className="scroll-work">
          <div className="scroll-img" ref={(el) => (ScrollRef = el)}>
            <img src={IMG1} alt="imageone" />
            <img src={IMG2} alt="imagetwo" />
            <img src={IMG10} alt="imageten" />
            <img src={IMG11} alt="imageeleven" />
            <img src={IMG12} alt="imagetwelve" />
            <img src={IMG13} alt="imagethirteen" />
            <img src={IMG14} alt="imagefourteen" />
          </div>
        </div>
      </div>
      {/* <button id="demo" ref={(el) => (DemoRef = el)}>
        Book a demo
      </button> */}
    </Wrap>
  );
}

export default Part7;
