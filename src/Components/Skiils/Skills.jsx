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
          <p>Python, Java, JavaScript, MySQL</p>
        </div>

        <div className="skills-category">
          <h3>🌐 Web Technologies:</h3>
          <p>HTML, CSS, React.js</p>
        </div>

        <div className="skills-category">
          <h3>📦 Python Libraries & Tools:</h3>
          <p>NumPy, Pandas, Matplotlib, Seaborn, SQLite3</p>
        </div>

        <div className="skills-category">
          <h3>📊 Data Visualization & Analytics:</h3>
          <p>MS Excel, Power BI</p>
        </div>

        <div className="skills-category">
          <h3>🔧 Version Control & Tools:</h3>
          <p>Git, GitHub, MS Word</p>
        </div>
</div>
        <Footer />
      
    </>
  );
};

export default Skills;
