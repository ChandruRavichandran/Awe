// import Image from "../../public/Img"
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({
  i,
  title,
  description,
  link,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
console.log(scale , "scale");
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color.title,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className="Maincard">
          <div className="innercard">
         <div className="linopkp"></div>
            <div className="Maincard">
              <div className="headineercard">
                <div className="innerleft">
                  <h1 >
                    {title.name}<span>{title.num}</span>
                    {/* <div>yuhj</div> */}
                  </h1>
                  <p>
                   {description}
                  </p>
                  <div className="liom"></div>
                </div>
                <div>
                  <div className="innerrightko"></div>
                </div>
              </div>
            </div>
            <div className="seconditeam">
              <div className="secondinner">
                <h1>{src}</h1>
                <div className=" innerdeep">
                  <div className="gridcard">
                  <div>
                   <span> {color.one}</span> {color.two}
                  </div>
                  <div>
                  <span> {color.three} </span>{color.four}
                  </div>
                  <div>
                  <span>{color.five}</span> {color.six}
                  </div>
                  <div>
                  <span>{color.seven} </span>{color.eight}
                  </div>
                </div>
                </div>
                <div className="liom" id="lopkop"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
