import React from "react";
import "./Degree.css";

const Degree = () => {
  return (
    <div className="profile-container">

      <div className="card">
        <div className="card-icon">🏅</div>
        <h3 className="card-title">Experience</h3>
       
        <p className="card-content">
          <strong className="highlight">Tata Steel</strong>. 
           Internship.
          <br />
          ( May 2025 - June 2025 )
        </p>
        <p className="card-subcontent">Data Analysis</p>
     

           <p className="card-content">
          <strong className="highlight">outriX</strong>. 
           Internship.
          <br />
          ( June 2025 - July 2025 )
        </p>
        <p className="card-subcontent">Data Analysis</p>
     


        <p className="card-content">
          <strong className="highlight">Edu-versity</strong>. 
           Internship.
          <br />
          ( May 2024 - Jun 2024 )
        </p>
        <p className="card-subcontent">Full Stack Web Development</p>
      </div>

      <div className="card">
        <div className="card-icon">👥</div>
        <h3 className="card-title">Education</h3>
        <p className="card-content">
          <strong className="highlight">B.Tech</strong>. 
          " Bachelors Degree."
          <br />
          ( Computer Science Engineering )
          <br />
          ( Birla Institute Of Technology, Mesra )
        </p>
        <p className="card-content">
          <strong className="highlight">Diploma</strong>. 
           " Diplome Degree."
          <br />
          ( Computer Science Engineering )
          <br />
          ( Al-Kabir Polytechnic )
        </p>
      </div>
    </div>
  );
};

export default Degree;
