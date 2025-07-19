import React from "react";
import "./MyProject.css";
import Footer from "../Footer/Footer";

const projects = [
  {
    title: "Portfolio Web Application",
    description:
      "Built a fully responsive portfolio using React.js, HTML, CSS, and JavaScript with smooth navigation via React Router. Highlighted key sections like Skills, Certifications, Projects, and Contact, enhanced with interactive icons and deployed on Vercel for optimal performance.",
    image: "Images/portfolio.png",
    github: "https://github.com/KoushikMehta31/Personal_Portfolio",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Enquiry Management System",
    description:
      "Built a full-stack MERN application with complete CRUD operations using local MongoDB for data storage. Designed custom RESTful routes in Node.js and Express, and implemented a responsive React UI with real-time feedback using Flowbite, Toastify, and SweetAlert.",
    image: "Images/enquiry.png",
    github: "https://github.com/KoushikMehta31/Enquiry-Management-System",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Flowbite", "Toastify", "SweetAlert"],
  },
  {
    title: "",
    description: <span className="coming_soon">Coming soon.</span>,
    image: "Images/coming_soon.jpg",
    github: "#",
    skills: [],
  },
];

const MyProject = () => {
  return (
    <div className="app">
      <h1 className="title">PROJECT</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            {project.skills.length > 0 && (
              <div className="project-skills">
                <h4>Skills Used:</h4>
                <div className="skills-badge-container">
                  {project.skills.map((skill, idx) => (
                    <span className="skill-badge" key={idx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-links">
              <a
                href={project.github}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyProject;
