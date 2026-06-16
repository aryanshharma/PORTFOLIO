import { FaArrowRight, FaDownload } from 'react-icons/fa'
import { SiReact, SiJavascript } from 'react-icons/si'

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background glows */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>
      <div className="hero-bg-glow glow-3"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Freelance Work
          </div>

          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="gradient-text">Aryan Sharma</span>
            <br />
            Front-End Developer
          </h1>

          <p className="hero-description">
            I craft pixel-perfect, accessible, and performant web experiences
            using modern technologies. Passionate about turning creative ideas
            into stunning digital realities with clean, efficient code.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" id="hero-cta-projects">
              View My Work <FaArrowRight />
            </a>
            <a href="https://resume-tau-seven-90.vercel.app/" className="btn-secondary" id="hero-cta-cv" target="_blank" rel="noopener noreferrer">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">1+</div>
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-window">
            <div className="code-window-header">
              <span className="code-window-dot red"></span>
              <span className="code-window-dot yellow"></span>
              <span className="code-window-dot green"></span>
              <span className="code-window-title">App.jsx</span>
            </div>
            <div className="code-window-body">
              <div className="code-line">
                <span className="code-line-number">1</span>
                <span><span className="code-keyword">const</span> <span className="code-function">Developer</span> <span className="code-bracket">=</span> <span className="code-bracket">{'() => {'}</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">2</span>
                <span>&nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-bracket">(</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">3</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;div&gt;</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">4</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;h1&gt;</span><span className="code-string">Aryan Sharma</span><span className="code-tag">&lt;/h1&gt;</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">5</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;p&gt;</span><span className="code-string">Frontend Dev</span><span className="code-tag">&lt;/p&gt;</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">6</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;Skills</span> <span className="code-variable">level</span><span className="code-bracket">=</span><span className="code-string">"expert"</span> <span className="code-tag">/&gt;</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">7</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-tag">&lt;/div&gt;</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">8</span>
                <span>&nbsp;&nbsp;<span className="code-bracket">)</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">9</span>
                <span><span className="code-bracket">{'}'}</span></span>
              </div>
              <div className="code-line">
                <span className="code-line-number">10</span>
                <span className="code-comment">// Let's build something amazing ✨</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="hero-floating-badge badge-react">
            <SiReact /> React
          </div>
          <div className="hero-floating-badge badge-js">
            <SiJavascript /> JavaScript
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
