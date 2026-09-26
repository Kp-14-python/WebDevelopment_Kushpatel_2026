import './Home.css'

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Deep Learning', icon: '🧠' },
]

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <div className="home-intro-grid">
            <div className="home-copy">
              <span className="home-badge">AI Student • Developer</span>

              <h1 className="home-title">
                <strong>Hello</strong> <span aria-label="hello emoji">👋</span>
                <br />
                <strong>I&apos;m Kush Patel</strong>
              </h1>

              <div className="home-description-row">
                <div className="home-text-block">
                  <p className="home-paragraph">
                    I am an AI student with a strong interest in AI, software development,
                    web development, and machine learning.
                  </p>

                  <p className="home-paragraph">
                    I enjoy exploring new technologies and building practical projects that
                    turn ideas into real solutions.
                  </p>

                  <p className="home-paragraph">
                    I like to solve real-world problems through AI and create meaningful
                    impact with technology.
                  </p>
                </div>

                <div className="home-profile-panel">
                  <img
                    className="home-profile-photo"
                    src="/profile.png"
                    alt="Kush Patel profile"
                  />
                </div>
              </div>

              <div className="home-cta-row">
                <a href="/projects" className="home-button primary">
                  View Projects
                </a>
                <a href="/contact" className="home-button secondary">
                  Contact Me
                </a>
              </div>
            </div>

          </div>

          <section className="home-skills" aria-labelledby="home-skills-title">
            <h2 id="home-skills-title" className="home-skills-title">My Skills</h2>
            <div className="home-skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="home-mission" aria-labelledby="mission-title">
            <div className="home-mission-icon" aria-hidden="true">✦</div>
            <div>
              <span className="home-mission-label">Mission Statement</span>
              <h2 id="mission-title">Making healthcare information more accessible with AI</h2>
              <p>
                I want to build medical chatbots that can assist patients and healthcare
                providers. People should be able to scan their diagnosis and get clear
                information about their disease and how to treat it.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
