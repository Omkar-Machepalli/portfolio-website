import { YEARS_OF_EXPERIENCE } from "../data/constants";

const Resume = () => {

  const downloadableResumeUrl = "Omkar_Machepalli_Frontend_Developer.pdf";

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
              Front-End Developer with {YEARS_OF_EXPERIENCE} years of experience in Angular, RxJS,
              TypeScript, and React, building scalable and responsive web
              applications.
            </p>
          </div>

          <div className="col-lg-auto">
            <a href={downloadableResumeUrl} className="theme-btn" download={downloadableResumeUrl} rel="noopener noreferrer">
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
                  Completed: May 2018 | Percentage: 91%
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="resume-box h-100">
              <h3 className="project-title mb-4">Achievements</h3>

              <div className="theme-card mb-3">
                <p className="project-title mb-1">Best Employee of the Year (2023)</p>
                <p className="project-text mb-0">
                  Recognized for work quality and dedication to delivering high-quality solutions at MR Soft Solutions, contributing to team success.
                </p>
              </div>

              <div className="theme-card mb-3">
                <p className="project-title mb-1">Academic Topper Award (2018)</p>
                <p className="project-text mb-0">
                  Awarded by JLA of Andhra Pradesh for securing first rank in Intermediate (MPC) with 430 marks at Government Junior College, Marripudi.
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