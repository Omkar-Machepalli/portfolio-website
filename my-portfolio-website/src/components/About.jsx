const About = () => {
  const info = [
    ["Experience", "2.8+ Years"],
    ["Primary Stack", "Angular"],
    ["Secondary Stack", "React"],
    ["Role", "Front-End Developer"],
    ["UI Focus", "Responsive & Dynamic Interfaces"],
    ["API Work", "REST Integration"],
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
              I am a Front-End Developer with 2.8+ years of experience in Angular,
              TypeScript, RxJS, and React. I have worked on responsive web
              applications, reusable UI components, dynamic forms, and API-driven
              modules. My experience includes Broadcast, Events, Invoice,
              Committees, and Payment Forms.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {info.map(([label, value]) => (
            <div className="col-md-6 col-lg-4" key={label}>
              <div className="info-box">
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