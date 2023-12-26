import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Intro from "./components/Intro";
import "./styles/app.css";

export default function App() {
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [introAnimated, setIntroAnimated] = useState(false);

  const parentVariants = {
    hidden: { opacity: 0, x: 200, y: 200 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  function ReturnToStart() {
    const pages = ["Start", "About", "Projects", "Blog"];
    return (
      <div className="return-start">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="nav-overlay"
        >
          {pages.map((label, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              onClick={() => {
                setPrevPage(page);
                setPage(index);
              }}
              className={`nav-item ${page === index && "selected"}`}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
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
      <div key={-1} className="glowing-background"></div>
      <div className="main-content">
        <motion.div
          key={page}
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
          // onWheel={handleWheel}
        >
          <div className="top">
            {page === 0 && (
              <Intro
                pageChange={handlePageChange}
                introAnimated={introAnimated}
                setIntroAnimated={setIntroAnimated}
              />
            )}
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
