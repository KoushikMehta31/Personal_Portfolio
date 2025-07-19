import React from "react";
import "./Skills.css";
import Footer from "../Footer/Footer";

const Skills = () => {
  return (
    <>
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">What I Know</p>

      {/* Programming Languages */}
      <div className="skills-category">
        <h3>👨‍💻 Programming Languages:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-python">Python</span>
          <span className="skill-badge skill-java">Java</span>
          <span className="skill-badge skill-js">JavaScript</span>
          <span className="skill-badge skill-sql">MySQL</span>
        </div>
      </div>

      {/* Web Technologies */}
      <div className="skills-category">
        <h3>🌐 Web Technologies:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-html">HTML</span>
          <span className="skill-badge skill-css">CSS</span>
          <span className="skill-badge skill-react">React.js</span>
        </div>
      </div>

      {/* Python Libraries */}
      <div className="skills-category">
        <h3>📦 Python Libraries & Tools:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-numpy">NumPy</span>
          <span className="skill-badge skill-pandas">Pandas</span>
          <span className="skill-badge skill-matplotlib">Matplotlib</span>
          <span className="skill-badge skill-seaborn">Seaborn</span>
          <span className="skill-badge skill-sqlite">SQLite3</span>
        </div>
      </div>

      {/* Data Analytics */}
      <div className="skills-category">
        <h3>📊 Data Visualization & Analytics:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-excel">MS Excel</span>
          <span className="skill-badge skill-powerbi">Power BI</span>
        </div>
      </div>

      {/* Tools */}
      <div className="skills-category">
        <h3>🔧 Version Control & Tools:</h3>
        <div className="skill-badges">
          <span className="skill-badge skill-git">Git</span>
          <span className="skill-badge skill-github">GitHub</span>
          <span className="skill-badge skill-word">MS Word</span>
        </div>
      </div>
</div>
      <Footer />
    </>
  );
};

export default Skills;
