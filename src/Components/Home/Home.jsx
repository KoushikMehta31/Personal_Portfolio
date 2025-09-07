import Footer from '../Footer/Footer';
import './Home.css';
import Degree from '../Degree/Degree';
// import Footer from './Footer';
const Home = () =>{
  return (
    <>
    <center className='main-website'>
      
      <img src="/Images/Me.avif" className="img-fluid about-image" alt="images"></img>
      <div className="home-container">
      <h1>
        I'm a <span className="Highlight">Koushik Mehta</span>.
      </h1>
      <p className="home-description">
        Data Analyst | Frontend Developer | Programmer
      </p>
      <a href="https://koushikmehtaresume.tiiny.site/" target="_blank" rel="noopener noreferrer">
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
  <center className="intro-icon">📊</center>
  <center className="intro">About Me</center>

  <p>
    I’m <strong>Koushik Mehta</strong>, a dedicated <strong>Data Analyst</strong> and 
    <strong> AI/ML Enthusiast</strong> with hands-on experience in 
    <strong> data cleaning, analysis, visualization</strong>, and building 
    <strong> interactive dashboards</strong>.
  </p>

  <p>
    I’m currently pursuing a <strong>B.Tech in Computer Science Engineering</strong> at 
    <strong> Birla Institute of Technology, Mesra</strong>, and also hold a 
    <strong> Diploma in CSE</strong> from <strong>Al-Kabir Polytechnic</strong>.
  </p>

  <p>
    I gained valuable industry experience through internships at 
    <strong> Tata Steel</strong> and <strong>outriX</strong>, where I worked on 
    <strong> fraud detection, HR analytics</strong>, and 
    <strong> sales dashboards</strong> using 
    <strong> Python, SQL, Excel,</strong> and <strong>Power BI</strong>.
  </p>

  <p>
    I also have hands-on experience in <strong>AI/ML development</strong> through projects like:
    <ul>
      <li>
        <strong>Language Detection using Machine Learning & NLP</strong> – built a text classification 
        model to detect multiple languages from input text.
      </li>
      <li>
        <strong>Customer Churn Analysis & Prediction</strong> – developed predictive models to identify 
        customers at risk of leaving, enabling data-driven retention strategies.
      </li>
    </ul>
  </p>

  <p>
    Currently, I’m enhancing my expertise in <strong>Machine Learning & AI</strong>, exploring algorithms 
    and real-world applications to build <strong>scalable, data-driven solutions</strong>.
  </p>
</div>


    <Footer/>
    </center>
  
    </>
  );
};

export default Home;




