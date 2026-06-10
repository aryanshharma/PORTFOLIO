const experiences = [
  {
    date: '2025 — Present',
    role: 'Frontend Developer',
    company: 'Freelance / Personal Projects',
    description:
      'Building modern, responsive web applications using React and vanilla JavaScript. Focused on creating pixel-perfect UIs, optimizing performance, and delivering seamless user experiences for clients.',
  },
  {
    date: '2024 — 2025',
    role: 'Web Development Intern',
    company: 'Self-Directed Learning',
    description:
      'Completed intensive coursework and hands-on projects in HTML, CSS, JavaScript, and React. Built multiple full-stack projects, learned version control with Git, and explored responsive design principles.',
  },
  {
    date: '2023 — 2024',
    role: 'Learning & Exploration',
    company: 'Open Source & Community',
    description:
      'Began my coding journey by learning the fundamentals of web development. Contributed to open-source repositories, participated in coding challenges, and built a solid foundation in front-end technologies.',
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            The path that shaped my skills and passion for front-end development.
          </p>
        </div>

        <div className="experience-timeline animate-on-scroll">
          {experiences.map((exp, index) => (
            <div className="timeline-item stagger-child" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
