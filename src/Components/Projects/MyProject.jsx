import React from "react";
import "./MyProject.css";
import Footer from "../Footer/Footer";

const projects = [
  {
    title: "Portfolio Web Application",
    description:
      "Built a fully responsive portfolio using React.js, HTML, CSS, and JavaScript with smooth navigation via React Router. Highlighted key sections like Skills, Certifications, Projects, and Contact, enhanced with interactive icons and deployed on Vercel for optimal performance.",
    image: "Images/homepages.png",
    github: "https://github.com/KoushikMehta31/Personal_Portfolio",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "AI AutoCodeReview",
    description:
      "Built an AI-powered Code Review System using React.js and Node.js, integrated with Google Generative AI to automate code analysis. Implemented syntax highlighting and actionable code improvement suggestions, delivering a fast, user-friendly review workflow through a clean and responsive interface.",
    image: "Images/aiautocode.png",
    github: "https://github.com/KoushikMehta31/AI-AutoCodeReview",
    skills: ["React.js", "Node.js", "Express.js", "Google Generative AI"],
  },
  {
    title: "Currency Converter Web App",
    description:
      "Built a real-time currency converter using HTML, CSS, and JavaScript, integrated with a live exchange-rate API to provide accurate and instant conversions. Designed a responsive user interface with features such as amount validation and currency swapping, ensuring a smooth and user-friendly experience.",
    image: "Images/converter.png",
    github: "https://github.com/KoushikMehta31/Currency_converter",
    skills: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Enquiry Management System",
    description:
      "Built a full-stack Enquiry Management System using the MERN stack (MongoDB, Express.js, React, Node.js) to manage customer enquiries with complete CRUD functionality. Implemented custom RESTful APIs for seamless frontend–backend communication and integrated real-time user feedback through Toastify and SweetAlert. Designed a responsive and user-friendly interface using React and Flowbite, with enquiry data securely stored and managed in MongoDB.",
    image: "Images/enquiry.png",
    github: "https://github.com/KoushikMehta31/Enquiry-Management-System",
    skills: ["React.js","Node.js","Express.js","MongoDB"],
  },
  {
  title: "PAN & Aadhaar Card Fraud Detection",
  description:
    "Created and structured employee datasets in MS Excel and performed data cleaning and transformation using MySQL. Managed and validated data to support fraud detection rules related to PAN and Aadhaar cards. Imported the cleaned data into Power BI and developed an interactive dashboard to visualize fraud detection patterns and insights.",
  image: "Images/dashboard.png",
  github: "https://github.com/KoushikMehta31/PAN-and-Aadhaar-Card-Fraud-Detection",
  skills: ["MS Excel", "MySQL", "Power BI"]
},
  {
  title: "EDA Placement Analysis Using Python",
  description:
    "Performed Exploratory Data Analysis (EDA) on a placement dataset sourced from Kaggle using Python and Pandas. Cleaned and preprocessed data by handling null values, duplicates, and inconsistent entries. Created insightful visualizations using Matplotlib and Seaborn to uncover key trends and factors affecting student placements.",
  image: "Images/placement.png",
  github: "https://github.com/KoushikMehta31/EDA-Placement-Analysis-using-Python", 
  skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Visualization","Data Cleaning"]
},
  {
  title: "Students Performance in Exam",
  description:
    "Performed analysis on student performance data to understand how factors like gender, parental education, and test preparation affect exam scores. Used Python and pandas for data cleaning and preprocessing. Conducted EDA and created visualizations to explore relationships between different variables.",
  image: "Images/student.png",
  github: "https://github.com/KoushikMehta31/Students-Performance-in-Exams", 
  skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Data Cleaning"]
},
  {
  title: "Indian Bike Sales Analysis Using Excel",
  description:
    "Analyzed Indian bike sales data from Kaggle using Excel to derive insights on brand performance and sales trends. Cleaned the dataset by handling duplicates and inconsistencies to ensure accuracy. Created an interactive dashboard using Pivot Tables and Excel charts for dynamic and insightful data visualization.",
  image: "Images/dashboardexcel.png",
  github: "https://github.com/KoushikMehta31/Indian-Bike-Sales-Analysis-Using-Excel",
  skills: ["MS Excel", "Pivot Tables", "Excel Charts", "Data Visualization","Data Cleaning"]
},
  {
    title: "Customer Churn Analysis And Prediction",
    description:
      "Analyzed a customer churn analysis and prediction project using Python by analyzing telecom customer data to identify churn patterns and key influencing factors. Performed exploratory data analysis and applied machine learning models to predict customer churn, generating actionable insights through data visualizations using Matplotlib and Seaborn to support data-driven decision-making.",
    image: "Images/churn.png",
    github: "https://github.com/KoushikMehta31/Customer-Churn-Analysis-And-Prediction",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning"]
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
