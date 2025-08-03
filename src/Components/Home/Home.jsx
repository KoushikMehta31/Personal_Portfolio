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
  I’m <strong>Koushik Mehta</strong>, a dedicated <strong>Data Analyst</strong> and <strong>Web Developer</strong> with hand-on-experience in <strong>data cleaning, analysis, visualization</strong>, and creating <strong>interactive dashboards</strong>.
</p>

<p>
  I’m currently studying <strong>B.Tech in Computer Science Engineering</strong> at <strong>Birla Institute of Technology, Mesra</strong>. I also hold a <strong>Diploma in CSE</strong> from <strong>Al-Kabir Polytechnic</strong>.
</p>

<p>
  I recently completed internships at <strong>Tata Steel</strong> and <strong>outriX</strong>, where I worked on <strong>fraud detection, HR analytics</strong>, and <strong>sales dashboards</strong> using <strong>Excel, MySQL, Python</strong>, and <strong>Power BI</strong>.
</p>

<p>
  I use <strong>Python (Pandas, Matplotlib, Seaborn)</strong> for data analysis, <strong>SQL</strong> for databases, <strong>Power BI</strong> for dashboards, and <strong>Excel</strong> for reports.
</p>

<p>
  I also build websites and web apps using <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js</strong>, and <strong>MongoDB</strong>.
</p>

<p>
  Currently, I’m learning <strong>Machine Learning</strong> and I enjoy solving problems and building useful data and web solutions.
</p>


</div>

    <Footer/>
    </center>
  
    </>
  );
};

export default Home;



