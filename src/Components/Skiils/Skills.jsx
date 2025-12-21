import React from "react";
import "./Skills.css";
import Footer from "../Footer/Footer";

const Skills = () => {
  return (
    <>
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">What I Know</p>

      <div className="skills-category">
        <h3>👨‍💻 Programming Languages:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-java">Java</span>
          <span className="skill-badge skill-js">JavaScript</span>
          <span className="skill-badge skill-python">Python</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>🌐 Frontend Technologies:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-html">HTML</span>
          <span className="skill-badge skill-css">CSS</span>
          <span className="skill-badge skill-react">React.js</span>
        </div>
      </div>


      <div className="skills-category">
        <h3>🌐 Backend Technologies:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-powerbi">Node.js</span>
          <span className="skill-badge skill-express">Express.js</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>📦 Python Libraries & Tools:</h3>
        <div className="skill-badges">
           <span className="skill-badge skill-pandas">Pandas</span>
          <span className="skill-badge skill-numpy">NumPy</span>
          <span className="skill-badge skill-matplotlib">Matplotlib</span>
          <span className="skill-badge skill-seaborn">Seaborn</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>📊 Data Visualization & Analytics:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-excel">Microsoft Excel</span>
          <span className="skill-badge skill-powerbi">Power BI</span>
        </div>
      </div>
      <div className="skills-category">
        <h3>🔧 Version Control & Tools:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-git">Git</span>
          <span className="skill-badge skill-github">GitHub</span>
          <span className="skill-badge skill-word">Microsoft Word</span>
          <span className="skill-badge skill-jupyter">Jupyter Notebook</span>

        </div>
      </div>
</div>
      <Footer />
    </>
  );
};

export default Skills;
