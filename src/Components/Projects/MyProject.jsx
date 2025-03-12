
import React from "react";
import "./MyProject.css";
import Footer from "../Footer/Footer";


const projects = [
  {
    "title": "Portfolio Web Application",
    "description": "Developed a fully responsive portfolio using React.js, HTML, CSS, and JavaScript, ensuring compatibility across all devices. Implemented smooth navigation with React Router, enhanced interactivity with React Icons and animations, and optimized performance by deploying on Vercel. The portfolio includes key sections like Home, Skills, Projects, Certifications, and Contact.",
    "image": "Images/portfolio.png",
    "github": "https://github.com/KoushikMehta31/Portfolio",
    "linkedin": "#",
    "Live": "https://portfolio-kzzr.vercel.app/"
  }
  ,

{
  "title": "AI AutoCodeReview",
  "description": "Developed an AI-powered code review tool using Node.js, Express, React.js, and Google Generative AI for automated code analysis. Features AI-driven feedback, syntax highlighting with PrismJS, and seamless frontend-backend communication using Axios and CORS.",
  "image": "Images/codereview.jpeg", 
  "github": "https://github.com/KoushikMehta31/AI-AutoCodeReview",
  "linkedin": "#",
  "Live": "YOUR_LIVE_DEMO_LINK"
},
  {
    title: "",
    description: <span className="coming_soon">Coming soom.</span>,
    image: "Images/coming_soon.jpg",
    github: "#",
    linkedin: "#",
    Live: "#",
  },
];

const MyProject = () => {
  return (
    <div className="app">
      <h1 className="title">PROJECT</h1>
      
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} className="button">GitHub</a>
              <a href={project.Live} className="button">Live</a>
              <a href={project.linkedin} className="button">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
     <Footer/>
    </div>
  );
};

export default MyProject;