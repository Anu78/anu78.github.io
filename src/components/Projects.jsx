import "../styles/projects.css";
import { IoMdMore } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
export default function Projects() {
  const projects = [
    {
      title: "React Sudoku Solver",
      languages: ["React", "CSS"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/sudoku",
      blogId: 1,
    },
    {
      title: "Canvas Discord Bot",
      languages: ["Python", "MongoDB"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/new-canvas-bot",
      blogId: 2,
    },
    {
      title: "GeoGuessr AI",
      languages: ["Python", "PyTorch"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/intro-to-ml-hw/tree/main/project",
      blogId: 3,
    },
    {
      title: "Mom's Inventory Management",
      languages: ["React", "Go", "MongoDB"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/sudoku", //. add link later
      blogId: 4,
    },
  ];

  function ProjectCard({ title, languages, image, githubLink, blogId }) {

    return (
      <div className="outer-card">
        <div className="card-img">
          <img draggable="false" width={500} src={image} />
        </div>
        <div className="card-languages">
          {/* array map here */}
          {languages.map((language, index) => (
            <div
              key={index}
              className={`language-box ${language.toLowerCase()}`}
            >
              {language}
            </div>
          ))}
        </div>
        <div className="short-desc">
          <h3>{title}</h3>
        </div>
        <div className="card-learn-more">
          <a target="_blank" href={githubLink}>
            View on GitHub
            <span>
              <FaExternalLinkAlt />
            </span>
          </a>
          <div>See blog post {blogId}</div>
          <span>
            <IoMdMore size={25} />
          </span>
        </div>
      </div>
    );
  }

  const carouselSettings = {
    drag: "x",
    dragConstraints: { left: -1000, right: 0 },
  };

  return (
    <div className="projects-container">
      <div className="headers">
        <h1 id="project-heading">My Projects</h1>
        <p>Here are some of my projects. Scroll to learn more.</p>
      </div>
      <motion.div className="projects-list" {...carouselSettings}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project}/>
        ))}
      </motion.div>
    </div>
  );
}
