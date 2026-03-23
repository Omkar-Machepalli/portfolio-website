import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="section-title">Projects</p>

            <h2 className="section-heading">
              Selected projects and work experience
            </h2>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.title} className="col-12 col-md-6 col-xl-4">
              <article className="project-card h-100 d-flex flex-column">
                    <div className="project-card-body d-flex flex-column h-100">
                        
                        <div>
                            <div className="d-flex justify-content-between align-items-center gap-2 mb-3 flex-wrap">
                                <h3 className="project-title mb-0">{project.title}</h3>
                            </div>

                            <p className="project-text">{project.description}</p>
                        </div>

                    </div>
                </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;