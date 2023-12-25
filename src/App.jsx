import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import ParticlesBackground from "./components/Particles";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Intro from "./components/Intro";
import "./styles/app.css";

export default function App() {
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [introAnimated, setIntroAnimated] = useState(false);

  function ReturnToStart() {

    return (
      <div className="return-start">
        <div className="nav-overlay">
          <p
            onClick={() => {
              setPrevPage(page);
              setPage(0);
            }}
            className={`nav-item ${page === 0 ? 'nav-selected': ''}`}
          >
            Start
          </p>
          <p
            onClick={() => {
              setPrevPage(page);
              setPage(1);
            }}
            className={`nav-item ${page === 1 ? 'nav-selected': ''}`}
          >
            About
          </p>
          <p
            onClick={() => {
              setPrevPage(page);
              setPage(2);
            }}
            className={`nav-item ${page === 2 ? 'nav-selected': ''}`}
          >
            Projects
          </p>
          <p
            onClick={() => {
              setPrevPage(page);
              setPage(3);
            }}
            className={`nav-item ${page === 3 ? 'nav-selected': ''}`}
          >
            Blog
          </p>
        </div>
      </div>
    );
  }

  const handlePageChange = (dir) => {
    setPrevPage(page);

    if (page + dir <= pageLimit && page + dir >= 0) {

      setPage(page + dir);
    }
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      return;
    }
    if (event.deltaX > 0) {
      handlePageChange(1);
    } else if (event.deltaX < 0) {
      handlePageChange(-1);
    }
  };

  const animationDirection = page > prevPage;

  const pageLimit = 3;


  useHotkeys(
    "left",
    () => {
      handlePageChange(-1);
    },
    [page]
  );
  useHotkeys(
    "right",
    () => {
      handlePageChange(1);
    },
    [page]
  );
  return (
    <AnimatePresence layout wait>
      <div 
      key={page}
      className="glowing-background"></div>
      <div
        className="main-content"
      >
        <motion.div
          key={page*2}
          initial={{
            x: animationDirection ? "100vw" : "-100vw",
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: animationDirection ? "-100vw" : "100vw",
          }}
          transition={{ duration: 0.85, ease: "circInOut" }}
          onWheel={handleWheel}
        >
          <div className="top">
            {page === 0 && <Intro pageChange={handlePageChange} introAnimated={introAnimated} setIntroAnimated={setIntroAnimated} />}
            {page === 1 && <About />}
            {page === 2 && <Projects />}
            {page === 3 && <Blog />}
          </div>
        </motion.div>
        <ReturnToStart />
      </div>
    </AnimatePresence>
  );
}
