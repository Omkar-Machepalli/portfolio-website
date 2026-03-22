import experiencePoints from "../data/experience";

const Experience = () => {
  const tools = [
    "Angular",
    "TypeScript",
    "RxJS",
    "Kendo UI",
    "Bootstrap",
    "REST APIs",
    "Git",
  ];

  return (
    <section id="experience">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="section-title">Experience</p>

            <h2 className="section-heading">
              Professional journey
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="row g-4">
          
          {/* Left: Experience */}
          <div className="col-lg-7">
            <div className="experience-box">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-4 pb-3 border-bottom">
                
                <div>
                  <h3 className="project-title mb-1">
                    Front-End Developer
                  </h3>
                  <p className="section-text mb-0">
                    MR Soft Solutions
                  </p>
                </div>

                <span className="project-tag">
                  2022 – Present
                </span>
              </div>

              <div>
                {experiencePoints.map((point) => (
                  <div key={point} className="d-flex align-items-start mb-3">
                    
                    {/* Dot */}
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#f97316",
                        borderRadius: "50%",
                        marginTop: "8px",
                        marginRight: "10px",
                        display: "inline-block",
                      }}
                    ></span>

                    <p className="project-text mb-0">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tools */}
          <div className="col-lg-5">
            <div className="skills-box">
              <h3 className="project-title mb-4">Tools Used</h3>

              <div className="row g-3">
                {tools.map((tool) => (
                  <div key={tool} className="col-6">
                    <div className="theme-card text-center py-3">
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;