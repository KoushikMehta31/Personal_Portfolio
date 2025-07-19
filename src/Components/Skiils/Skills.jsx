import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  RiTailwindCssFill
} from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPowerbi,
  SiMicrosoftexcel,
  SiSeaborn,
  SiPlotly,
} from "react-icons/si";
import Footer from "../Footer/Footer";

const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-subtitle">Technologies I use</p>
        <div className="skills-container">
          {/* Frontend Skills */}



          <div className="skill-card">
            <SiMysql className="skill-icon mysql-icon" />
            <p>MySQL</p>
          </div>

          {/* Programming Languages */}
          <div className="skill-card">
            <FaJava className="skill-icon java-icon" />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <FaPython className="skill-icon python-icon" />
            <p>Python</p>
          </div>

          {/* Data Analysis Tools */}
          <div className="skill-card">
            <SiNumpy className="skill-icon numpy-icon" />
            <p>NumPy</p>
          </div>
          <div className="skill-card">
            <SiPandas className="skill-icon pandas-icon" />
            <p>Pandas</p>
          </div>
          <div className="skill-card">
            <SiSeaborn className="skill-icon seaborn-icon" />
            <p>Seaborn</p>
          </div>
          <div className="skill-card">
            <SiPlotly className="skill-icon matplotlib-icon" />
            <p>Matplotlib</p>
          </div>
          <div className="skill-card">
            <SiPowerbi className="skill-icon powerbi-icon" />
            <p>Power BI</p>
          </div>
          <div className="skill-card">
            <SiMicrosoftexcel className="skill-icon excel-icon" />
            <p>Excel</p>
          </div>


          <div className="skill-card">
            <FaHtml5 className="skill-icon html-icon" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="skill-icon css-icon" />
            <p>CSS3</p>
          </div>
          <div className="skill-card">
            <FaJs className="skill-icon js-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaBootstrap className="skill-icon bootstrap-icon" />
            <p>Bootstrap</p>
          </div>
        
          <div className="skill-card">
            <FaReact className="skill-icon react-icon" />
            <p>React</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
