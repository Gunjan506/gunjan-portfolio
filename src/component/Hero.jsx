function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>

        <h1>Gunjan Gupta</h1>

        <h2>Frontend / Full-Stack Developer</h2>

        <p className="hero-text">
          I build responsive and user-friendly websites using modern
          web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;