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
                <div key={skill} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="theme-card h-100">
                    <div
                    className="mb-3"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #fdba74 0%, #fb923c 100%)",
                    }}
                    ></div>

                    <h3 className="project-title mb-2">{skill}</h3>

                    <p className="project-text mb-0">
                    Experience building practical frontend solutions using {skill}.
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