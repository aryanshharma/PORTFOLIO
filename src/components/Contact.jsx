import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this data to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-wrapper animate-on-scroll">
          <div className="contact-info">
            <div>
              <h3>Let's Chat!</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Drop me a message and
                I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="contact-item" id="contact-email">
              <div className="contact-item-icon">
                <FaEnvelope />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Email</span>
                <span className="contact-item-value">aryansharma9499@gmail.com</span>
              </div>
            </div>

            <div className="contact-item" id="contact-phone">
              <div className="contact-item-icon">
                <FaPhone />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Phone</span>
                <span className="contact-item-value">+91 82959 11146</span>
              </div>
            </div>

            <div className="contact-item" id="contact-location">
              <div className="contact-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-item-details">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">India</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                id="form-name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                id="form-email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                id="form-subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                id="form-message"
              ></textarea>
            </div>
            <button type="submit" className="form-submit" id="form-submit">
              {submitted ? 'Message Sent! ✓' : (
                <>Send Message <FaPaperPlane /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
