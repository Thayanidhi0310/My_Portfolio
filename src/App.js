import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
        <section id="hero" className="d-flex flex-column align-items-center justify-content-center">
    <h1>Hi, I'm Thayanidhi!</h1>
    <h2>I am a final year Computer Science Engineering Student</h2>
    <a href="#about" className="btn-get-started scrollto"><i className="bi bi-chevron-double-down"></i></a>
  </section>

  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a href="index.html">Thaya</a></h1>
        
        <a href="index.html"><img src="assets/img/pic1.jpeg" alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  <main id="main">

    <section id="about" className="about">
      <div className="container">

        <div className="row no-gutters">
          <div id="image" className="image col-xl-3 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-9 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>About</h3>
              <p>
              As a final-year Computer Science Engineering student at St. Joseph's College of Engineering, I'm deeply passionate about the metaverse and virtual reality. One of my proudest achievements is creating a "College Virtual Tour" using Unreal Engine 5, Blender, and Vista 3D, which involved capturing and editing images of our campus to offer an immersive experience. I’ve also worked on a file security project focused on encryption and decryption, and developed a simple calculator web app with HTML, CSS, and JavaScript. My educational journey began at Nalandha Matric Higher Secondary School in Krishnagiri, where I completed my 10th and 12th grades with solid scores. Currently, I maintain a CGPA of 6.85, and I’m excited to continue exploring and contributing to the tech world.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Explore my expertise in cutting-edge technologies, including Metaverse and Virtual Reality, alongside foundational web development skills like HTML, CSS, and JavaScript. Dive into my hands-on projects that showcase practical applications and innovative solutions.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{ width: '60%' }}></div>
              </div>
            </div>  

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">Java <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Unreal Engine 5 <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Blender <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: '55%' }}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="resume" className="resume section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Discover my professional journey through detailed descriptions of my internships and educational background. This section provides a comprehensive overview of the experiences and knowledge that have shaped my career path and academic achievements.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Thayanidhi Venkatesan</h4>
              <p><em>Passionate and forward-thinking Computer Science Engineering student with expertise in Metaverse and Virtual Reality. Skilled in developing immersive experiences and secure applications using cutting-edge technologies.</em></p>
              <p>
              <ul>
                <li>Krishnagiri, TamilNadu</li>
                <li>thayanidhiv@gmail.com</li>
              </ul>
              </p>
            </div>

            
            <h3 className="resume-title">Internships</h3>
            <div className="resume-item">
              <h4>AI Intern</h4>
              <h5>May 2024 - June 2024</h5>
              <p><em>Anna Nagar, Chennai</em></p>
              <p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              </ul>
              </p>
            </div>

          </div>
          <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
              <h4>Bachelor of Computer Science Engineering</h4>
              <h5>2021 - 2025</h5>
              <p><em>St. Joseph's College of Engineering, Chennai, TN</em></p>
              <p>Thayanidhi is currently pursuing his final year in Computer Science Engineering. His academic journey reflects a commitment to technology and innovation.</p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary School</h4>
              <h5>2020 - 2021</h5>
              <p><em>Nalandha Matric Higher Secondary School, Krishnagiri, TN</em></p>
              <p>Completed Tamil Nadu State Board syllabus with an 80% score in 12th grade. This period laid the foundation for his technical education.</p>
            </div>
            <div className="resume-item">
              <h4>Secondary School</h4>
              <h5>2018 - 2019</h5>
              <p><em>Nalandha Matric Higher Secondary School, Krishnagiri, TN</em></p>
              <p>Completed Tamil Nadu State Board syllabus with a 73% score in 10th grade. This early education contributed to his strong academic base.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Explore my diverse projects that blend creativity with technical expertise. Each project reflects my commitment to innovation and problem-solving in the tech world.</p>
        </div>


        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>College Virtual Tour</h4>
                <p>Virtual Reality</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>File Security</h4>
                <p>Encryption and Decryption</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Calculator</h4>
                <p>Web Application</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out to me for any inquiries or collaborations. I am always open to discussing new opportunities and connecting with professionals. Your messages and feedback are important to me, so don’t hesitate to get in touch!</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>Thaya</h3>
              <p>I strive to push the boundaries of technology and design in every endeavor.</p>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="info">

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-envelope"></i>
                <p>thayanidhiv@example.com</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>

  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Thaya</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        
        Designed by Thayanidhi Venkatesan
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <script src="assets/js/main.js"></script>
    </div>
  );
}

export default App;
