import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#hero" className="footer-logo">
            Aryan<span className="gradient-text">.</span>
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              id="social-github"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id="social-linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              id="social-twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              id="social-instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © {currentYear} Aryan Sharma. Crafted with <span><FaHeart style={{ display: 'inline', verticalAlign: 'middle', fontSize: '0.75rem' }} /></span> and React.
        </div>
      </div>
    </footer>
  )
}

export default Footer
