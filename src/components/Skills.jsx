import { useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'

const skills = [
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    colorClass: 'html',
    description: 'Semantic markup, accessibility, SEO-optimized structure',
    level: 95,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    colorClass: 'css',
    description: 'Responsive layouts, animations, modern design systems',
    level: 90,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    colorClass: 'js',
    description: 'ES6+, DOM manipulation, async programming, APIs',
    level: 85,
  },
  {
    name: 'React',
    icon: <FaReact />,
    colorClass: 'react',
    description: 'Hooks, state management, component architecture',
    level: 80,
  },
]

function Skills() {
  const sectionRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            const fills = entry.target.querySelectorAll('.skill-level-fill')
            fills.forEach((fill) => {
              const level = fill.getAttribute('data-level')
              fill.style.width = `${level}%`
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            My core toolkit for building modern, responsive, and interactive web applications.
          </p>
        </div>

        <div className="skills-grid animate-on-scroll">
          {skills.map((skill) => (
            <div className="skill-card stagger-child" key={skill.name} id={`skill-${skill.name.toLowerCase()}`}>
              <div className={`skill-icon ${skill.colorClass}`}>{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
              <div className="skill-level-bar">
                <div
                  className="skill-level-fill"
                  data-level={skill.level}
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
