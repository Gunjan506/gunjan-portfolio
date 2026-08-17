function Services() {
  const services = [
    {
      title: "Responsive Website Development",
      description:
        "I create responsive and user-friendly websites that work smoothly on desktop, tablet and mobile devices.",
    },
    {
      title: "React Website Development",
      description:
        "I build modern and interactive websites using React and reusable components.",
    },
    {
      title: "Website Bug Fixing",
      description:
        "I fix HTML, CSS, JavaScript and React issues and improve website functionality.",
    },
    {
      title: "Landing Page Development",
      description:
        "I create clean and professional landing pages for businesses, portfolios and startups.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-content">
        <p className="section-title">My Services</p>

        <h2>What I Can Do For You</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;