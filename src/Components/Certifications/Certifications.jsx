
import React from "react";
import "./Certifications.css";
import Footer from "../Footer/Footer";

const Certifications = () => {
  const certificates = [
    {
      image: "Images/WebDevApnaCollege.jpg", 
      title: "Full Stack Web Development",
      platform: "Apna College",
      
    },
    {
      image: "Images/data.jpg",
      title: "Data Science & Analytics",
      platform: "HP LIFE | HP Foundation",
    },
    {
      image: "Images/java.jpeg", 
      title: "Introduction To Java",
      platform: "LearnTube",
      
    },
    {
      image: "Images/oop.jpg",
      title: "Object Oriented Programming",
      platform: "Great Learning",
      
    },
    {
      image: "Images/dsa.jpg",
      title: "DSA With Java",
      platform: "Apna College",
    },
    {
      image: "Images/LeetCode.jpg", 
      title: "Top LeetCode Interview Questions",
      platform: "Udemy",
      
    },
    {
      image: "Images/Git_Github.jpg",  
      title: "Git and Github - Beginners to Expert",
      platform: "Udemy",
      
    },
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <div className="certificate-details">
              <h3>{certificate.title}</h3>
              <p className="platform">{certificate.platform}</p>
      
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Certifications;
