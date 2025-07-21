import React from "react";
import "./MyProject.css";
import Footer from "../Footer/Footer";

const projects = [
  {
  title: "PAN & Aadhaar Card Fraud Detection",
  description:
    "Created and structured employee datasets in MS Excel and performed data cleaning and transformation using MySQL. Managed and validated data to support fraud detection rules related to PAN and Aadhaar cards. Imported the cleaned data into Power BI and developed an interactive dashboard to visualize fraud detection patterns and insights.",
  image: "Images/pan-aadhaar-fraud.png", // Replace with the actual image file
  github: "https://github.com/KoushikMehta31/Pan-Aadhaar-Fraud-Detection", // Update if different
  skills: ["MS Excel", "SAP BIS", "Data Cleaning", "MySQL", "Power BI"]
},
  {
  title: "Indian Bike Sales Analysis Using Excel",
  description:
    "Analyzed Indian bike sales data from Kaggle using Excel to derive insights on brand performance and sales trends. Cleaned the dataset by handling duplicates and inconsistencies to ensure accuracy. Created an interactive dashboard using Pivot Tables and Excel charts for dynamic and insightful data visualization.",
  image: "Images/bike-sales-analysis.png", // Replace with your actual image path
  github: "https://github.com/KoushikMehta31/Indian-Bike-Sales-Excel", // Update with actual GitHub repo
  skills: ["MS Excel", "Pivot Tables", "Excel Charts", "Data Visualization","Data Cleaning", "Kaggle"]
},
  {
  title: "EDA Placement Analysis Using Python",
  description:
    "Performed Exploratory Data Analysis (EDA) on a placement dataset sourced from Kaggle using Python and Pandas. Cleaned and preprocessed data by handling null values, duplicates, and inconsistent entries. Created insightful visualizations using Matplotlib and Seaborn to uncover key trends and factors affecting student placements.",
  image: "Images/eda-placement-analysis.png", // Replace with the actual image path
  github: "https://github.com/KoushikMehta31/EDA-Placement-Analysis", // Update if different
  skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Visualization","Data Cleaning","Kaggle"]
},
  {
  title: "Students Performance in Exam",
  description:
    "Performed analysis on student performance data to understand how factors like gender, parental education, and test preparation affect exam scores. Used Python and pandas for data cleaning and preprocessing. Conducted EDA and created visualizations to explore relationships between different variables.",
  image: "Images/student-performance.png", // Replace with actual image path
  github: "https://github.com/KoushikMehta31/Student-Performance-EDA", // Update if different
  skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Cleaning"]
},
  {
  title: "E-commerce Sales Data Analysis",
  description:
    "Performed data analysis on e-commerce sales data to uncover insights on product performance, customer behavior, and regional trends. Cleaned and explored the dataset using Python and Pandas. Created interactive visualizations using Matplotlib and Seaborn to identify top-selling products, sales distribution, and category-wise performance.",
  image: "Images/ecommerce-sales-analysis.png", // Replace with actual image path
  github: "https://github.com/KoushikMehta31/Ecommerce-Sales-Analysis", // Update if different
  skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Visualization","Data Cleaning"]
},
  {
    title: "Portfolio Web Application",
    description:
      "Built a fully responsive portfolio using React.js, HTML, CSS, and JavaScript with smooth navigation via React Router. Highlighted key sections like Skills, Certifications, Projects, and Contact, enhanced with interactive icons and deployed on Vercel for optimal performance.",
    image: "Images/portfolio.png",
    github: "https://github.com/KoushikMehta31/Personal_Portfolio",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
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
