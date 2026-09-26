import './about.css'

const focusAreas = [
  {
    number: '01',
    title: 'Artificial Intelligence',
    text: 'Exploring intelligent systems that can understand information, learn from data, and support better decisions.',
  },
  {
    number: '02',
    title: 'Machine Learning',
    text: 'Building practical models and experimenting with patterns, predictions, and data-driven solutions.',
  },
  {
    number: '03',
    title: 'Software Development',
    text: 'Creating useful, reliable applications with clean interfaces and a focus on real user needs.',
  },
]

const toolkit = ['Python', 'Java', 'React', 'Web Development', 'Machine Learning', 'Problem Solving']


export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-heading">
          <span className="about-eyebrow">A little about me</span>
          <h1>Building with curiosity and purpose.</h1>
          <p>
            Im Kush Patel, an AI student and developer who enjoys turning
            interesting ideas into practical digital projects.
          </p>
        </div>

        <div className="about-profile-card">
          <img src="/profile.png" alt="Kush Patel profile" />
          <div>
            <strong>Kush Patel</strong>
            <span>AI Student Developer</span>
          </div>
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-section-label">
          <span>01</span>
          <h2 id="about-story-title">My story</h2>
        </div>
        <div className="about-story-copy">
          <p>
            I am interested in artificial intelligence, software development,
            web development, and machine learning. I enjoy learning new
            technologies and understanding how they can be used to solve
            everyday challenges.
          </p>
          <p>
            My goal is to keep improving as a developer while creating
            meaningful projects that connect technology with real-world
            problems. Every project gives me a chance to learn, experiment,
            and build something more useful than the last.
          </p>
        </div>
      </section>

      <section className="about-focus" aria-labelledby="about-focus-title">
        <div className="about-section-label">
          <span>02</span>
          <h2 id="about-focus-title">What I focus on</h2>
        </div>
        <div className="about-focus-grid">
          {focusAreas.map((area) => (
            <article className="about-focus-card" key={area.title}>
              <span className="about-card-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-toolkit" aria-labelledby="about-toolkit-title">
        <div>
          <div className="about-section-label">
            <span>03</span>
            <h2 id="about-toolkit-title">Use of Languages</h2>
          </div>
          <p className="about-toolkit-intro">
            Technologies and skills I use while learning, designing, and
            building projects.
          </p>
        </div>
        <div className="about-toolkit-content">
          <div className="about-toolkit-list">
            {toolkit.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <button className="about-resume-button" type="button">
            <span aria-hidden="true">↗</span>
            View Resume
          </button>
        </div>
      </section>
    </main>
  )
}
