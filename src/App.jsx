import './App.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from "react-icons/ai";
function App() {
  const iconSize = 35;
  return (
    <div className="main">
      <div className="text-content">
        <h1 id="coming-soon">under construction</h1>
        <p>
          view the code on <a href="https://github.com/Anu78">GitHub</a>
        </p>
      </div>

      <div className="reach-out">
        <a target="_blank" rel="noreferrer" className='reach-links' href="mailto:anuraag.warudkar@gmail.com">
          <AiOutlineMail size={iconSize}/>
        </a>
        <div id="spacer"></div>
        <a target="_blank" rel="noreferrer" className='reach-links' href="https://linkedin.com/in/anuraagw">
          <AiOutlineLinkedin size={iconSize} />
        </a>
      </div>
    </div>
  );
}

export default App