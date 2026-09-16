import './App.css'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="BasicEdoo home">Basic<span>Edoo</span></a>
        <span className="header-rule" aria-hidden="true" />
        <span className="hello">Hello, world.</span>
      </header>

      <main id="home" className="profile">
        <figure className="portrait">
          <img src="/images/profile-enhanced.png" alt="Portrait of BasicEdoo, known in-game as Edòó" width="1254" height="1254" fetchPriority="high" />
          <figcaption>BasicEdoo</figcaption>
        </figure>

        <section className="introduction" aria-labelledby="name">
          <p className="eyebrow">Personal space</p>
          <h1 id="name">Edòó</h1>
          <p className="headline">Curious by nature.</p>
          <p className="description">I love technology in all its forms.</p>

          <div className="profile-links">
            <details className="about">
              <summary><span className="number">01</span><span>About me</span><span className="expand-label">Read</span></summary>
              <div className="about-content">
                <p>I’m BasicEdoo — in-game, Edòó. I love exploring technology, figuring out how things work and seeing where new ideas can lead.</p>
                <p>This is my personal corner of the web. Inspired by cyber worlds and Tron, with a little digital world of my own still to come.</p>
              </div>
            </details>
            <a className="link-row" href="https://github.com/basicedoo" target="_blank" rel="noreferrer"><span className="number">02</span><span>GitHub</span><span className="link-hint">Visit</span></a>
            <div className="world-row"><span className="number">03</span><span>My world</span><span className="world-status">In development</span></div>
          </div>
        </section>
      </main>

      <footer><span>Technology / Curiosity / Digital worlds</span><span>A more curious tomorrow.</span></footer>
    </div>
  )
}

export default App
