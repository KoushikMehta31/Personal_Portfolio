
import React from "react";
import "./MyProject.css";
import Footer from "../Footer/Footer";


const projects = [
  {
    "title": "Portfolio Web Application",
    "description": "Built a fully responsive portfolio using React.js, HTML, CSS, and JavaScript with smooth navigation via React Router. Highlighted key sections like Skills, Certifications, Projects, and Contact, enhanced with interactive icons and deployed on Vercel for optimal performance.",
    "image": "Images/portfolio.png",
    "github": "https://github.com/KoushikMehta31/Personal_Portfolio",
    "linkedin": "#",
    "Live": "https://personal-portfolio-beige-three-23.vercel.app/"
  }
  ,

{
  "title": "AI AutoCodeReview",
  "description": "Developed an AI AutoCodeReview tool using Node.js, Express, React.js, and Google Generative AI. Enabled intelligent feedback generation via POST requests, with syntax highlighting (PrismJS) and Markdown rendering for clean code display.",
  "image": "Images/codereview.jpeg", 
  "github": "https://github.com/KoushikMehta31/AI-AutoCodeReview",
  "linkedin": "#",
  "Live": "YOUR_LIVE_DEMO_LINK"
},

{
  "title": "Enquiry Management System",
  "description": "Built a full-stack MERN application with complete CRUD operations using local MongoDB for data storage. Designed custom RESTful routes in Node.js and Express, and implemented a responsive React UI with real-time feedback using Flowbite, Toastify, and SweetAlert.",
  "image": "Images/enquiry.png", 
  "github": "https://github.com/KoushikMehta31/Enquiry-Management-System",
  "linkedin": "#",
  "Live": "YOUR_LIVE_DEMO_LINK"
},

{
  "title": "Currency Converter Web App",
  "description": "Developed a full-stack currency converter using React, Node.js, and Express. Integrated a third-party API for real-time rates, built a responsive UI with dark mode, and preserved user history using localStorage.",
  "image": "Images/currency.png", 
  "github": "https://github.com/KoushikMehta31/Currency-Converter",
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
