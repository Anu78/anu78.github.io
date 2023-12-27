import "../styles/intro.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowsExpand } from "react-icons/bs";

export default function Intro(props) {
  const arrowSize = 33;
  const canvasRef = useRef(null);
  const speed = 0.01;

  const [song, setSong] = useState({
    name: "",
    progress_ms: "default",
    artists: "nothing",
    average_color: [],
    image: "",
  });

  function rgbArrayToRgbaString(rgbArray, alpha = 0.8) {
    // Destructure the RGB values from the array
    const [r, g, b] = rgbArray;

    // Clamp alpha to be between 0 and 1
    const clampedAlpha = Math.max(0, Math.min(alpha, 1));

    // Construct the RGBA string
    return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://172.16.2.179:8000/current/");
        const result = await response.json();
        setSong(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 1, duration: 0.6 },
    }),
    final: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let amplitude = 20;
    let frequency = 0.04;
    let phase = 0;

    const drawSineWave = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        const y =
          canvas.height / 2 + amplitude * Math.sin(i * frequency + phase);
        context.lineTo(i, y);
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        const y =
          canvas.height / 2 + amplitude * Math.sin(i * frequency + phase);
        context.lineTo(i, y);
      }

      // Extend the path to fill underneath
      context.lineTo(canvas.width, canvas.height);
      context.lineTo(0, canvas.height);
      context.closePath();

      context.fillStyle = "rgba(135, 206, 235, 0.5)"; // Example fill color
      context.fill();

      amplitude = 20 + 1 * Math.random();
      phase += speed;

      requestAnimationFrame(drawSineWave);
    };

    drawSineWave();
  }, []);

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
        hi. i'm anu.
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
          <FaArrowRight
            size={arrowSize}
            style={{ verticalAlign: "bottom" }}
            onClick={() => {
              props.pageChange(1);
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="now-playing"
        style={{ background: rgbArrayToRgbaString(song.average_color) }}
      >
        <canvas ref={canvasRef} className="playing-wallpaper"></canvas>
        {/* <div className="song-heading">right now, i'm listening to:</div> */}
        <motion.div className="album-art">
          <img width={50} src={"data:image/png;base64," + song.image} />
        </motion.div>

        <motion.div className="song-info">
          <div className="song-title">{song.name.toLowerCase()}</div>
          <div class="song-artists">{song.artists.toLowerCase()}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
