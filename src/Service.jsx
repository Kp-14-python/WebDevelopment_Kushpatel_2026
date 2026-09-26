import { Link } from 'react-router-dom'
import './Service.css'

const services = [
  {
    number: '01',
    title: 'Machine Learning',
    description:
      'I develop smart solutions using Python, TensorFlow, and scikit-learn, including predictive modeling and data analysis.',
    linkLabel: 'Learn more',
  },
  {
    number: '02',
    title: 'Data Cleaning and Visualization',
    description:
      'I clean, analyze, and visualize data using Python and libraries like pandas and Matplotlib.',
    linkLabel: 'Learn more',
  },
  {
    number: '03',
    title: 'Web Development',
    description:
      'I build responsive and user-friendly websites using HTML, CSS, JavaScript, and React.',
    linkLabel: 'Learn more',
  },
  {
    number: '04',
    title: 'Problem Solving and Support',
    description:
      'I enjoy solving real-world problems, providing troubleshooting guidance, and supporting technology and innovation.',
  },
]

export default function Service() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <span className="services-eyebrow">What I offer</span>
        <h1>My Services</h1>
        <p>
          I provide a range of services to help bring your ideas to life. From
          building AI models and web applications to creating intelligent
          solutions, I focus on delivering clean, efficient, and scalable code
          that meets your requirements.
        </p>
      </section>

      <section className="services-list" aria-labelledby="services-list-title">
        <div className="services-section-heading">
          <span>How I can help</span>
          <h2 id="services-list-title">Practical solutions for your goals</h2>
        </div>

        <div className="service-cards">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.linkLabel && (
                <Link className="service-link" to="/contact">
                  {service.linkLabel} <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta" aria-labelledby="services-cta-title">
        <div>
          <span className="services-eyebrow">Let&apos;s work together</span>
          <h2 id="services-cta-title">Have a project in mind?</h2>
          <p>
            Let&apos;s work together to bring your ideas into reality. I&apos;m
            always open to new opportunities and challenges.
          </p>
        </div>
        <Link className="services-cta-button" to="/contact">
          Get In Touch
        </Link>
      </section>
    </main>
  )
}
