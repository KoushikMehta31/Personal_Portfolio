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
        I'm a <span className="Highlight">Data Analyst</span>.
      </h1>
      <p className="home-description">
        Business Analysis | Frontend Developer | Programmer
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
    I’m <strong>Koushik Mehta</strong>, a passionate and results-driven <strong>Data Analyst</strong> with hands-on experience in<strong> data cleaning, exploratory data analysis (EDA), visualization, and dashboard development</strong>.
  </p>

  <p>
    I’m currently pursuing my B.Tech in <strong>Computer Science Engineering</strong> at<strong> Birla Institute of Technology, Mesra</strong>, and I hold a Diploma in CSE from<strong> Al-Kabir Polytechnic</strong>.
  </p>

  <p>
    My recent internships at <strong>Tata Steel</strong> and <strong>outriX</strong> helped me gain practical exposure to<strong> fraud detection, HR analytics, and sales dashboard</strong> using tools like <strong>Excel, MySQL, Python, and Power BI</strong>.
  </p>

  <p>
    I specialize in tools and techniques such as <strong>Python (Pandas, Matplotlib, Seaborn)</strong>,<strong> SQL</strong> for database management, and <strong>Power BI</strong> for delivering<strong> interactive business dashboards</strong> that drive insights and decision-making.
  </p>

  <p>
    I also bring additional strengths in <strong>web development</strong> (HTML, CSS, JavaScript, React.js).
  </p>

  <p>
    With a <strong>problem-solving mindset</strong>, a growing portfolio of real-world data projects, and certifications in<strong> Data Analytics</strong> and <strong>Machine Learning</strong>, I am eager to contribute to data-driven environments and unlock business value through analytics.
  </p>
</div>

    <Footer/>
    </center>
  
    </>
  );
};

export default Home;
