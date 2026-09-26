import { useState } from 'react'
import './contact.css'

const contactDetails = [
  { label: 'Location', value: 'Scarborough, ON', icon: '⌖' },
  { label: 'Phone', value: '437 545 8518', href: 'tel:+14375458518', icon: '↗' },
  { label: 'Email', value: 'patelkush1403@gmail.com', href: 'mailto:patelkush1403@gmail.com', icon: '@' },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:patelkush1403@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <span className="contact-eyebrow">Start a conversation</span>
          <h1>Let&apos;s make something <em>meaningful.</em></h1>
          <p>
            Have a project idea, a question, or an opportunity to share? I&apos;m
            always open to connecting and exploring what we can build together.
          </p>
        </div>
        <div className="contact-hero-note">
          <span className="contact-note-dot" aria-hidden="true" />
          <span>Currently open to new opportunities</span>
        </div>
      </section>

      <section className="contact-layout" aria-label="Contact information and message form">
        <div className="contact-details">
          <div className="contact-section-heading">
            <span className="contact-section-number">01</span>
            <h2>Get in touch</h2>
          </div>
          <p className="contact-details-intro">
            I&apos;d love to hear from you. Reach out through the form or use one of
            the details below and I&apos;ll get back to you soon.
          </p>

          <div className="contact-detail-list">
            {contactDetails.map((detail) => {
              const content = (
                <>
                  <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                  <span className="contact-detail-copy">
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </span>
                </>
              )

              return detail.href ? (
                <a className="contact-detail" href={detail.href} key={detail.label}>{content}</a>
              ) : (
                <div className="contact-detail" key={detail.label}>{content}</div>
              )
            })}
          </div>

          <div className="contact-aside">
            <span className="contact-aside-mark" aria-hidden="true">✦</span>
            <p>Good ideas become better when they&apos;re shared.</p>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-section-heading">
            <span className="contact-section-number">02</span>
            <h2>Send a message</h2>
          </div>
          <p className="contact-form-intro">Tell me a little about what you have in mind.</p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field-row">
              <label>
                <span>Your name</span>
                <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              <span>How can I help?</span>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows="6" required />
            </label>
            <div className="contact-form-footer">
              <button type="submit">Send message <span aria-hidden="true">↗</span></button>
              {submitted && <span className="contact-success">Opening your email app...</span>}
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
