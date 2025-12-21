import Footer from '../Footer/Footer';
import './Home.css';
import Degree from '../Degree/Degree';
const Home = () =>{
  return (
    <>
    <center className='main-website'>
      
      <img src="/Images/Me.avif" className="img-fluid about-image" alt="images"></img>
      <div className="home-container">
      <h1>
        I'm a <span className="Highlight">Koushik Mehta</span>
      </h1>
      <p className="home-description">
        Software Developer | Full Stack Web Developer | Data Analyst
      </p>
      <a href="https://drive.google.com/file/d/1-AuFeJtfqhcMU-wFTpmGBWQrK4gQ_bZi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <button className="home-button">Resume</button>
      </a>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/koushik-mehta-7a4975285/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/KoushikMehta31" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <Degree></Degree>
<div className="about-par">
  <center className="intro-icon">💻📊</center>
  <center className="intro">About Me</center>

  <p>
    I’m <strong>Koushik Mehta</strong>, a final-year 
    <strong> B.Tech Computer Science Engineering</strong> student at 
    <strong> Birla Institute of Technology, Mesra</strong>, and a 
    <strong> Diploma holder in CSE</strong> from 
    <strong> Al-Kabir Polytechnic</strong>.
  </p>

  <p>
    I have hands-on experience in <strong>software development</strong> and 
    <strong> data analysis</strong> through internships and 
    <strong> project-based learning</strong>.
  </p>

  <p>
    As a <strong>Software Developer</strong>, I’ve built full-stack web applications using 
    <strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, Java,</strong> 
    and <strong>Python</strong>, focusing on 
    <strong> clean code, scalable architecture,</strong> and 
    <strong> efficient APIs</strong>.
  </p>

  <p>
    As a <strong>Data Analyst</strong>, I’ve worked with 
    <strong> Python, SQL, Excel,</strong> and <strong>Power BI</strong> for 
    <strong> data cleaning, analysis,</strong> and 
    <strong> visualization</strong>.
  </p>

  <p>
    During my internship at <strong>Tata Steel</strong>, I contributed to 
    <strong> fraud detection systems</strong>, transforming 
    <strong> raw data into actionable insights</strong>.
  </p>

  <p>
    I am actively seeking job opportunities in 
    <strong> Software Developer</strong> and 
    <strong> Data Analyst</strong> roles.
  </p>
</div>



    <Footer/>
    </center>
  
    </>
  );
};

export default Home;






