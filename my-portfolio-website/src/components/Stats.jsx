import { YEARS_OF_EXPERIENCE } from "../data/constants";

const Stats = () => {
  const stats = [
    { text: `${YEARS_OF_EXPERIENCE} Years Experience`, icon: "fas fa-user-check" },
    { text: "Angular & React Developer", icon: "fas fa-laptop-code" },
    { text: "REST API Integration", icon: "fas fa-plug" },
    { text: "Responsive UI Development", icon: "fas fa-desktop" },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-3 g-lg-4">
          {stats.map((item) => (
            <div key={item.text} className="col-12 col-sm-6 col-lg-3">
              <div className="info-box text-center">
                <div className="skill-icon" style={{ fontSize: "30px" }} aria-hidden="true">
                  <i className={item.icon}></i>
                </div>
                <p className="mt-2 mb-0 fw-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;