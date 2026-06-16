import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Sahil Hair Expert',
    description:
      'A premium luxury salon website for Sahil Hair Expert in Karnal, featuring elegant animations, service showcases, and a modern dark-themed UI built with React & Vite.',
    tags: ['React', 'Vite', 'CSS'],
    image: null,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    liveUrl: 'https://hair-wine.vercel.app/',
    codeUrl: '#',
  },
  {
    title: 'Weather App',
    description:
      'A beautiful weather application that fetches real-time data from APIs with dynamic backgrounds that change based on weather conditions.',
    tags: ['JavaScript', 'API', 'CSS'],
    image: null,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A full-featured task manager with drag & drop, categories, priority levels, and local storage persistence. Clean, minimal interface.',
    tags: ['React', 'HTML', 'CSS'],
    image: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio! A premium, animated single-page application showcasing my skills, projects, and experience with glassmorphism design.',
    tags: ['React', 'Vite', 'CSS'],
    image: null,
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">My Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building great web experiences.
          </p>
        </div>

        <div className="projects-grid animate-on-scroll">
          {projects.map((project, index) => (
            <div className="project-card stagger-child" key={index} id={`project-${index}`}>
              <div className="project-image">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link code" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
