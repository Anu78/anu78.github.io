import "../styles/intro.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Intro(props) {
  const arrowSize = 33;

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1, duration: 0.6 }
    }),
    final: { y: 0, opacity: 1 } 
  };

  return (
    <div className="content">
      {props.setIntroAnimated(true)}
      <motion.div
        className="box"
        id="big-heading"
        custom={0}
        initial={props.introAnimated ? "final" : "hidden"}
        animate={props.introAnimated ? "final" : "visible"}
        variants={containerVariants}
      >
        Hi, I'm Anuraag.
      </motion.div>
      <motion.div
        className="box"
        id="info-text"
        custom={1}
        initial={props.introAnimated ? "final" : "hidden"}
        animate={props.introAnimated ? "final" : "visible"}
        variants={containerVariants}
      >
        You can navigate using <span className="text-bold">arrow keys</span> or
        your <span className="text-bold">trackpad</span>. 
      </motion.div>

      <motion.p
        className="box"
        id="nav-text"
        custom={2}
        initial={props.introAnimated ? "final" : "hidden"}
        animate={props.introAnimated ? "final" : "visible"}
        variants={containerVariants}
      >
        Start from the beginning:
      </motion.p>

      <motion.div
        className="box"
        id="arrows"
        custom={3}
        initial={props.introAnimated ? "final" : "hidden"}
        animate={props.introAnimated ? "final" : "visible"}
        variants={containerVariants}
      >
        <div className="arrow-bounce">
          <FaArrowRight size={arrowSize} style={{ verticalAlign: "bottom" }} onClick={() => {props.pageChange(1)}}/>
        </div>
      </motion.div>
    </div>
  );
}
