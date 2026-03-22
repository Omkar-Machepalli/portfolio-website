import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="section-title">Projects</p>

            <h2 className="section-heading">
              Selected work and module experience
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
                                <span className="project-tag">{project.category}</span>
                            </div>

                            <p className="project-text">{project.description}</p>

                            <div className="mb-4">
                                {project.tech.map((item) => (
                                <span key={item} className="project-tag">
                                    {item}
                                </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons pushed to bottom */}
                        <div className="d-flex flex-wrap gap-3 mt-auto">
                            <a href={project.demo} className="theme-btn">
                                Live Demo
                            </a>

                            <a href={project.github} className="theme-btn-outline">
                                GitHub
                            </a>
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