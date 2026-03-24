import skills from "../data/skills";

const Skills = () => {

    return (
        <section id="skills">
        <div className="container">
            <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
                <p className="section-title">Skills</p>

                <h2 className="section-heading">
                Core technologies and tools
                </h2>
            </div>
            </div>

            <div className="row g-4">
            {skills.map((skill) => (
                <div key={skill.name} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="theme-card h-100">
                    <div className="mb-3">
                        <i className={` ${skill.icon} skill-icon`} aria-hidden="true" ></i>
                    </div>

                    <h3 className="project-title mb-2">{skill.name}</h3>

                    <p className="project-text mb-0">
                        {skill.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;