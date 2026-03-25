import { YEARS_OF_EXPERIENCE } from "../data/constants";

const About = () => {
  const info = [
    ["Experience", `${YEARS_OF_EXPERIENCE} Years`, "fas fa-briefcase"],
    ["Role", "Front-End Developer", "fas fa-laptop-code"],
    ["Core Framework", "Angular", "fab fa-angular"],
    ["Additional Framework", "React", "fab fa-react"],
    ["Specialization", "Component-Based UI", "fas fa-mobile-alt"],
    ["Backend Integration", "REST APIs", "fas fa-server"],
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="section-title">About Me</p>

            <h2 className="section-heading">
              Building clean, scalable, and user-friendly interfaces
            </h2>

            <p className="section-text">
              I am a passionate Front-End Developer with {YEARS_OF_EXPERIENCE} years of experience
              specializing in Angular, TypeScript, RxJS, and React. Throughout my
              career, I've focused on creating responsive web applications that
              deliver exceptional user experiences. My expertise includes
              developing reusable UI components, implementing dynamic forms,
              and integrating REST APIs to build robust, scalable solutions.
              I've successfully delivered projects involving Broadcast systems,
              Event management platforms, Invoice processing modules, Committee
              management tools, and secure Payment Forms, always prioritizing
              clean code, performance optimization, and user-centric design.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {info.map(([label, value, icon]) => (
            <div className="col-md-6 col-lg-4" key={label}>
              <div className="info-box">
                <i className={`${icon} skill-icon mb-2`} ></i>
                <p className="info-box-title">{label}</p>
                <p className="info-box-value">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;