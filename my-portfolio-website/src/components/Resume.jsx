const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="row align-items-end justify-content-between mb-5 g-4">
          <div className="col-lg-8">
            <p className="section-title">Resume</p>

            <h2 className="section-heading">
              Snapshot of qualifications
            </h2>

            <p className="section-text mb-0">
              Front-End Developer with 2.8+ years of experience in Angular, RxJS,
              TypeScript, and React, building scalable and responsive web
              applications.
            </p>
          </div>

          <div className="col-lg-auto">
            <a href="/resume.pdf" className="theme-btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="resume-box h-100">
              <h3 className="project-title mb-4">Education</h3>

              <div className="theme-card mb-4">
                <p className="project-title mb-2">B.Sc (Computers)</p>
                <p className="project-text mb-1">
                  Sri Vivekananda Degree College, Podili
                </p>
                <p className="info-box-title mb-0">
                  Completed: October 2021 | CGPA: 8.51
                </p>
              </div>

              <div className="theme-card">
                <p className="project-title mb-2">Intermediate (MPC)</p>
                <p className="project-text mb-1">
                  Government Junior College, Marripudi
                </p>
                <p className="info-box-title mb-0">
                  Percentage: 91%
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="resume-box h-100">
              <h3 className="project-title mb-4">Achievements</h3>

              <div className="theme-card mb-3">
                <p className="project-text mb-0">
                  Best Employee of the Year (2023)
                </p>
              </div>

              <div className="theme-card">
                <p className="project-text mb-0">
                  Academic Topper
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;