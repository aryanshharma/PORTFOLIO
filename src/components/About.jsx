import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate About Creating{' '}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into who I am, what drives me, and the journey that brought me here.
          </p>
        </div>

        <div className="about-grid animate-on-scroll">
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <span className="about-avatar-placeholder">AS</span>
            </div>
            <div className="about-image-decoration"></div>
          </div>

          <div className="about-content">
            <h3>Front-End Developer & UI Enthusiast</h3>
            <p>
              I'm Aryan Sharma, a front-end developer with a keen eye for design
              and a love for building interactive, user-centric web applications.
              I specialize in React and modern JavaScript, crafting interfaces that
              are not only visually appealing but also performant and accessible.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new web technologies,
              contributing to open-source projects, or sketching out UI ideas. I believe
              in continuous learning and pushing creative boundaries.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="about-info-icon"><FaMapMarkerAlt /></span>
                <div className="about-info-details">
                  <span className="about-info-label">Location</span>
                  <span className="about-info-value">India</span>
                </div>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon"><FaEnvelope /></span>
                <div className="about-info-details">
                  <span className="about-info-label">Email</span>
                  <span className="about-info-value">aryansharma9499@gmail.com</span>
                </div>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon"><FaBriefcase /></span>
                <div className="about-info-details">
                  <span className="about-info-label">Experience</span>
                  <span className="about-info-value">1+ Year</span>
                </div>
              </div>
              <div className="about-info-item">
                <span className="about-info-icon"><FaGraduationCap /></span>
                <div className="about-info-details">
                  <span className="about-info-label">Education</span>
                  <span className="about-info-value">BCA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
