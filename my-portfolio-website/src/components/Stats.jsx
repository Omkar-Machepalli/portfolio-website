const Stats = () => {
  const stats = [
    { text: "2.8+ Years Experience", icon: "💼" },
    { text: "Angular & React Developer", icon: "⚛️" },
    { text: "REST API Integration", icon: "🔗" },
    { text: "Responsive UI Development", icon: "📱" },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <div className="row g-3 g-lg-4">
          {stats.map((item) => (
            <div key={item.text} className="col-12 col-sm-6 col-lg-3">
              <div className="info-box text-center">
                <div style={{ fontSize: "28px" }}>{item.icon}</div>
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