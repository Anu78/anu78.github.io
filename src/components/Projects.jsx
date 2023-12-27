import "../styles/projects.css";
import { IoMdMore } from "react-icons/io";
import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "React Sudoku Solver",
      languages: ["React", "CSS"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/sudoku",
      blogId: -1,
      description: "A simple sudoku solver and player."
    },
    {
      title: "Canvas Discord Bot",
      languages: ["Python", "MongoDB"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/new-canvas-bot",
      blogId: 2,
      description: "A discord bot that encourages collaboration and brings students together."
    },
    {
      title: "GeoGuessr AI",
      languages: ["Python", "PyTorch"],
      image: "/geoguessr_game.png",
      githubLink: "https://github.com/Anu78/intro-to-ml-hw/tree/main/project",
      blogId: 3,
      description: "Predicting locations in the US within 100 miles."
    },
    {
      title: "Mom's Inventory Management",
      languages: ["React", "Go", "MongoDB"],
      image: "/sudoku.png",
      githubLink: "https://github.com/Anu78/sudoku", //. add link later
      blogId: 4,
      description: "A web app to keep track of Mom's groceries."
    },
    {
      title: "C++ Data Structures",
      languages: ["C++"],
      image: "/leetcode_stats.png",
      githubLink: "https://github.com/Anu78/C-Data-Structures-Algorithms", //. add link later
      blogId: -1,
      description: "Simple DSA Concepts in C++."
    },
  ];

  function ProjectCard({ title, languages, image, githubLink, blogId, description }) {
    
    return (
      <div className="outer-card">
        <div className="card-img">
          <img draggable="false" width={550} src={image} />
        </div>
        <div className="card-languages">
          {/* array map here */}
          {languages.map((language, index) => (
            <div
              key={index}
              className={`language-box ${language.toLowerCase() === "c++" ? "cpp" : language.toLowerCase()}`}
            >
              {language}
            </div>
          ))}
        </div>
        <div className="short-desc">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-learn-more">
          <a target="_blank" href={githubLink}>
            View on GitHub
          </a>
          {blogId > 0 ? <div>See blog post</div> : ""}

          <span>
            <IoMdMore size={25} />
          </span>
        </div>
      </div>
    );
  }

  const carouselSettings = {
    drag: "x",
    dragConstraints: { left: -1500, right: 0 },
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
