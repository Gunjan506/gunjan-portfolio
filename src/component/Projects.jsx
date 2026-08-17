function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <p className="section-title">My Projects</p>

        <h2>Projects I've Built</h2>

        <div className="project-card">
          <div className="project-info">
            <h3>Rama Technical Institute</h3>

            <p>
              A responsive website developed for Rama Technical Institute,
              featuring course information, admission enquiry forms,
              contact options and an admin dashboard for managing enquiries.
            </p>

            <p className="technologies">
              <strong>Technologies:</strong> React, JavaScript, CSS,
              Node.js, Express.js, MongoDB
            </p>

            <div className="project-buttons">
              <a
               href="https://rama-technical-institute.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              >
            Live Demo
            </a>

              <a
                href="https://github.com/Gunjan506/Rama-Technical-Institute.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;