import './App.css'
import { codexStats } from './codexStats'
import { projects } from './projects'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="BasicEdoo home">Basic<span>Edoo</span></a>
        <span className="header-rule" aria-hidden="true" />
        <span className="hello">Hello, world.</span>
      </header>

      <main id="home">
        <div className="profile">
        <figure className="portrait">
          <img
            src="/images/profile-800.webp"
            srcSet="/images/profile-240.webp 240w, /images/profile-480.webp 480w, /images/profile-800.webp 800w, /images/profile-1254.webp 1254w"
            sizes="(max-width: 680px) 96px, (max-width: 1000px) 40vw, (max-width: 1600px) 34vw, 540px"
            alt="Portrait of BasicEdoo, known in-game as Edòó"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
          <figcaption>BasicEdoo</figcaption>
        </figure>

        <section className="introduction" aria-labelledby="name">
          <div className="identity">
            <p className="eyebrow">Personal space</p>
            <h1 id="name">Edòó</h1>
          </div>
          <div className="intro-copy">
            <p className="headline">Curious by nature.</p>
            <p className="description">I explore how technology works — and what I can create with it.</p>
          </div>

          <div className="profile-links">
            <details className="disclosure about">
              <summary>
                <span className="number">01</span><span>About me</span>
                <span className="expand-label"><span className="when-closed">Read</span><span className="when-open">Close</span></span>
              </summary>
              <div className="disclosure-content">
                <p>I’m BasicEdoo — in-game, Edòó. I like following an idea from “how does that work?” to something I can try for myself, whether that’s a small tool, a web app or a game experiment.</p>
                <p>This is my personal corner of the web. You’ll find my code on GitHub and snapshots of projects I’ve been building below.</p>
              </div>
            </details>
            <a className="link-row" href="https://github.com/basicedoo" target="_blank" rel="noopener noreferrer">
              <span className="number">02</span><span>GitHub</span>
              <span className="link-hint"><span>Visit</span><span className="destination-note" aria-hidden="true">New tab</span><span className="sr-only"> — opens in a new tab</span></span>
            </a>
            <details className="disclosure codex">
              <summary>
                <span className="number">03</span><span>Codex stats</span>
                <span className="expand-label"><span className="when-closed">View</span><span className="when-open">Close</span></span>
              </summary>
              <div className="disclosure-content">
                <p className="note-label">My activity with Codex</p>
                <dl className="codex-stats">
                  {codexStats.map((stat) => (
                    <div className={stat.featured ? 'stat stat-featured' : 'stat'} key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd aria-label={stat.accessibleValue}>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="stats-context">A snapshot of my usage, not a live counter.</p>
                <a className="snapshot-link" href="/images/codex-activity-snapshot.png" target="_blank" rel="noopener noreferrer">
                  View activity snapshot<span className="destination-note">New tab</span>
                </a>
              </div>
            </details>
            <a className="link-row" href="#projects">
              <span className="number">04</span><span>Projects</span><span className="link-hint">Explore</span>
            </a>
          </div>
        </section>
        </div>

        <section id="projects" className="projects-section" aria-labelledby="projects-heading" tabIndex={-1}>
          <div className="projects-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2 id="projects-heading">A few things I’ve been building.</h2>
            </div>
            <p className="projects-intro">A look at the work. Open an image for a closer look.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a className={`project-image${project.imageKind === 'artwork' ? ' project-artwork' : ''}`} href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} ${project.imageKind ?? 'snapshot'} in a new tab`}>
                  <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
                </a>
                <div className="project-caption">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <a className="project-open" href={project.image} target="_blank" rel="noopener noreferrer">View {project.imageKind ?? 'snapshot'}<span className="sr-only"> of {project.name} — opens in a new tab</span><span className="destination-note" aria-hidden="true">New tab</span></a>
                    {project.website && <a className="project-open" href={project.website} target="_blank" rel="noopener noreferrer">{project.websiteLabel}<span className="sr-only"> — opens in a new tab</span><span className="destination-note" aria-hidden="true">New tab</span></a>}
                    {project.source && <a className="project-open" href={project.source} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> source for {project.name} — opens in a new tab</span><span className="destination-note" aria-hidden="true">New tab</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer><span>Technology / Curiosity / Digital worlds</span><span>A more curious tomorrow.</span></footer>
    </div>
  )
}

export default App
