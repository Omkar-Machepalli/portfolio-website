import profileImg from "../assets/images/profile.png";

const Hero = () => {
  const techItems = ["Angular", "React", "TypeScript", "RxJS"];

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
              Front-End Developer with 2.8+ years of experience in building
              responsive web applications, reusable UI components, dynamic forms,
              and API-integrated modules using Angular, RxJS, TypeScript, and
              React.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="theme-btn">
                View Projects
              </a>

              <a href="#resume" className="theme-btn-outline">
                Download Resume
              </a>
            </div>

            <div className="d-flex flex-wrap">
              <span className="skill-badge">GitHub</span>
              <span className="skill-badge">LinkedIn</span>
              <span className="skill-badge">Email</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="profile-card">
              <img
                src={profileImg}
                alt="Omkar Machepalli"
                className="profile-image"
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