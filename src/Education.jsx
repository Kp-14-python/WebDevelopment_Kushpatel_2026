import './Education.css';

const focusAreas = [
  'Machine Learning',
  'Data Science',
  'Web Development',
  'Deep Learning',
];

const schoolActivities = ['Sports', 'Cultural Events', 'Drama Club'];

const achievements = [
  'Captain of the school volleyball team.',
  'Winner of the district-level volleyball competition.',
  'Selected for the school cricket team.',
];

const certifications = ['Python Programming', 'SQL', 'Java'];

export default function Education() {
  return (
    <main className="education-page">
      <header className="education-hero">
        <div className="education-hero-copy">
          <span className="education-badge">Education Journey</span>
          <h1 className="education-title">My Education</h1>
          <p className="education-intro">
            A strong academic foundation in technology, problem-solving, and real-world
            innovation.
          </p>
        </div>
        <div className="education-hero-panel">
          <span className="hero-panel-label">Current Focus</span>
          <strong>Software Development - Artificial Intelligence</strong>
          <small>Centennial College</small>
        </div>
      </header>

      <section className="education-section education-grid">
        <article className="education-card timeline-card">
          <span className="section-kicker">2026 - Present</span>
          <h2>Post-secondary studies</h2>
          <p>
            I am currently pursuing <strong>Software Development - Artificial Intelligence</strong>{' '}
            at Centennial College, where I am building advanced skills in intelligent systems,
            software engineering, and modern development practices.
          </p>
        </article>

        <article className="education-card timeline-card">
          <span className="section-kicker">2022 - 2025</span>
          <h2>Bachelor's degree</h2>
          <p>
            I completed my <strong>Bachelor of Science in Information Technology</strong> in India at
            Surendranagar University. This period strengthened my foundations in technology,
            system thinking, and innovation.
          </p>
        </article>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <span className="section-kicker">Focus areas</span>
          <h2>What I am learning</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <div key={area} className="focus-item">
              <span className="focus-number">0{index + 1}</span>
              <h3>{area}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section info-grid">
        <article className="education-card">
          <div className="section-heading left-align">
            <span className="section-kicker">Schooling</span>
            <h2>My educational roots</h2>
          </div>
          <p>
            I completed my schooling in India at <strong>SKUM School</strong>, where I developed a
            passion for learning, teamwork, and leadership.
          </p>
        </article>

        <article className="education-card">
          <div className="section-heading left-align">
            <span className="section-kicker">Participation</span>
            <h2>School life</h2>
          </div>
          <ul className="education-list">
            {schoolActivities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <span className="section-kicker">Impact</span>
          <h2>Achievements</h2>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <div key={achievement} className="achievement-item">
              <span className="achievement-mark">✓</span>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section cert-section">
        <div className="section-heading">
          <span className="section-kicker">Certificates</span>
          <h2>Skills I have built</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert} className="cert-item">
              {cert}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
