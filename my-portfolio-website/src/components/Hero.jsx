import profileImg from "../assets/images/profile.png";
import { YEARS_OF_EXPERIENCE } from "../data/constants";
import { SOCIAL_LINKS } from "../data/constants";

const Hero = () => {
  const techItems = ["Angular", "React", "TypeScript", "RxJS", "HTML", "CSS", "JavaScript", "Bootstrap", "REST APIs", "Git", "SASS", "Karma", "Jasmine", "Kendo UI"];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <p className="section-title">Front-End Developer Portfolio</p>

            <h1 className="hero-title">
              Hi, I’m <span className="highlight-text"> Omkar </span>
            </h1>

            <h2 className="hero-subtitle">
              Front-End Developer | Angular, React, TypeScript
            </h2>

            <p className="hero-text">
              Front-End Developer with {YEARS_OF_EXPERIENCE} years of experience in building
              responsive web applications, reusable UI components, dynamic forms,
              and API-integrated modules using Angular, RxJS, TypeScript, and
              React.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="theme-btn" aria-label="View my projects section">
                View Projects
              </a>

              <a href="#resume" className="theme-btn-outline" aria-label="Download my resume">
                Download Resume
              </a>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                <i className="fab fa-github"></i>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={SOCIAL_LINKS.email} className="social-icon" aria-label="Send Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="profile-card">
              <img
                src={profileImg}
                alt="Omkar Machepalli"
                className="profile-image"
                loading="lazy"
              />

              <div className="mt-4">
                {techItems.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;