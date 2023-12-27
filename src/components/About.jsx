import { useState } from "react";
import "../styles/about.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const [text, setText] = useState("some text here");

  const initialDelay = 0.4;
  const stagger = 0;
  const initialOffset = 900;

  const cornerVariants = {
    shiftText: {
      initial: { x: -initialOffset, y: -initialOffset, opacity: 0 },
      animate: { x: 0, y: 0 , opacity: 1},
    },
    bioText: {
      initial: { x: -initialOffset * 2, y: 0, opacity: 0 },
      animate: { x: 0, y: 0 , opacity: 1},
    },
    image1: {
      initial: { x: initialOffset, y: -initialOffset / 2, opacity: 0 },
      animate: { x: 0, y: 0 , opacity: 1},
      hover: {rotateY: 180}
    },
    image2: {
      initial: { x: initialOffset, y: initialOffset / 2, opacity: 0 },
      animate: { x: 0, y: 0 , opacity: 1},
      hover: {rotateY: 180}
    },
    links: {
      initial: { x: 0, y: initialOffset , opacity: 0 },
      animate: { x: 0, y: 0 , opacity: 1},
    },
  };

  const transition = (num) => {
    return {
      delay: initialDelay + stagger * num,
      type: "easeIn",
      duration: 0.6,
    };
  };

  return (
    <div className="about-container">
      <div className="left-about">
        <motion.div
          variants={cornerVariants.shiftText}
          initial="initial"
          animate="animate"
          transition={transition(0)}
        >
          <p className="typed-text">{text}</p>
        </motion.div>
        <motion.div
          variants={cornerVariants.bioText}
          initial="initial"
          animate="animate"
          transition={transition(1)}
        >
          <p className="bio-text">
            &nbsp;&nbsp;I'm a student who's currently studying computer
            engineering. However, I dedicate far more of my time to programming
            and software development. I love solving Advent of Code puzzles
            (2023 is really tough ☹️) and finding creative solutions to
            problems. I also play billiards and volleyball in my free time. By
            the way, this website is open source! Check it out below!
          </p>
        </motion.div>
        <motion.div
          variants={cornerVariants.links}
          initial="initial"
          animate="animate"
          transition={transition(2)}
          className="links"
        >
          <a target="_blank" href="https://github.com/Anu78" className="link">
            <span>
              <FaGithub size={20} style={{ verticalAlign: "bottom" }} />
            </span>{" "}
            Github
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/anuraagw"
            className="link"
          >
            <span>
              <FaLinkedin size={20} style={{ verticalAlign: "bottom" }} />
            </span>{" "}
            LinkedIn
          </a>
          <a
            target="_blank"
            href="/anuraag_resume.pdf"
            download
            className="link"
          >
            <span>
              <FaDownload size={20} style={{ verticalAlign: "bottom" }} />
            </span>
            Resumé
          </a>
          <a
            target="_blank"
            href="https://last.fm/user/boop_png"
            className="link"
          >
            <span>
              <img src="/last_fm.svg" width={25}/>
            </span>
            last.fm
          </a>
        </motion.div>
      </div>
      <motion.div className="photo-walls">
        <motion.div
          className="image-holder"
          variants={cornerVariants.image1}
          initial="initial"
          animate="animate"
          transition={transition(3)}
          whileHover="hover"
        >
          <div className="img-front">          <img id="dog-img" height={250} src="/dog.png" /></div>
          <div className="img-back"><h3>My Dog</h3></div>
        </motion.div>
        <motion.div
          className="image-holder"
          variants={cornerVariants.image2}
          initial="initial"
          animate="animate"
          transition={transition(4)}
          whileHover="hover"
        >
          <div className="img-front">          <img id="sd-img" width={200} src="/suit.png" /></div>
          <div className="img-back"><h3>Presenting at Senior Design 2023</h3> <i>Vitrifying and Rewarming Organoids</i></div>

        </motion.div>
      </motion.div>
    </div>
  );
}
