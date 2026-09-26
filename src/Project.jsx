import './Project.css'

const projects = [
  {
    number: '01',
    title: 'Car Prediction Model',
    type: 'Machine Learning',
    description:
      'A prediction model that estimates the price of a car based on its features and available data.',
    process:
      'I prepared the dataset by converting the information into numerical features, applied scaling, trained the model, and deployed it for use.',
    tags: ['Python', 'Data Processing', 'Prediction'],
    accent: 'blue',
    category: 'Artificial Intelligence',
  },
  {
    number: '02',
    title: 'Yoga Prediction Model',
    type: 'Computer Vision',
    description:
      'A yoga pose prediction model that identifies the type of pose based on body movement.',
    process:
      'I used MediaPipe, an open-source framework by Google, together with computer vision to analyze movement in real time.',
    tags: ['Python', 'MediaPipe', 'Computer Vision'],
    accent: 'green',
    category: 'Artificial Intelligence',
  },
  {
    number: '03',
    title: 'Banking System',
    type: 'Python Application',
    description:
      'A banking system project created with Python to practice application logic and core programming concepts.',
    process:
      'I used Python lists, dictionaries, and functions to organize data and build the main banking operations.',
    tags: ['Python', 'Lists', 'Dictionaries'],
    accent: 'purple',
    category: 'Python',
  },
]

export default function Project() {
  const renderProjectCards = (category) => (
    <div className="project-cards">
      {projects
        .filter((project) => project.category === category)
        .map((project) => (
          <article className={`project-card project-card-${project.accent}`} key={project.title}>
            <div className="project-card-top">
              <span className="project-type">{project.type}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-process">
              <span>Process</span>
              <p>{project.process}</p>
            </div>

            <div className="project-tags" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
    </div>
  )

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>
          These are some projects I built for practice and learning. Each
          project taught me something new and helped me improve my skills.
        </p>
      </section>

      <section className="projects-list" aria-labelledby="projects-list-title">
        <h2 id="projects-list-title">Artificial Intelligence</h2>
        {renderProjectCards('Artificial Intelligence')}

        <h2 className="project-category-heading">Python</h2>
        {renderProjectCards('Python')}
      </section>
    </main>
  )
}
