import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Adhithyan T</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="projects-wrapper">
        <header className="projects-header">
          <h1 className="projects-logo"><strong>Adhithyan T</strong></h1>
          <nav className="projects-nav">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="projects-main">
          <h2 className="projects-title">My Projects</h2>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <h3>1. Basic Static Website</h3><br/>
              <p>
                <strong>Tech Used:</strong> HTML, CSS<br />
                <strong>Features:</strong> Responsive navbar, content sections, basic contact form<br />
                <strong>Goal:</strong> Build foundational HTML/CSS skills using semantic elements<br />
                <strong>Note:</strong> First project, not yet pushed to GitHub.
              </p>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <h3>2. Rock, Paper, Scissors Game</h3><br/>
              <p>
                <strong>Tech:</strong> HTML, CSS, JavaScript<br />
                <strong>Features:</strong> Game logic, score tracking, interactive UI<br />
                <strong>Goal:</strong> Practice DOM manipulation and basic JS logic<br />
                🔗 <a href="https://rock-paper-scissor-rho-lac.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a><br />
                📁 <a href="https://github.com/Adhiithyann/ROCK-PAPER-SCISSOR" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <h3>3. Portfolio Website</h3><br/>
              <p>
                <strong>Tech:</strong> Next.js, React, CSS Modules<br />
                <strong>Features:</strong> Full responsive layout, multiple pages, SEO optimized<br />
                <strong>Goal:</strong> Build a professional portfolio using React and Next.js<br />
                🔗 <a href="https://adhi-portfolio-vhhk.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a><br />
                📁 <a href="https://github.com/Adhiithyann/adhi-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
          </div>
        </main>

        <footer className="projects-footer">
          <p>© 2025 Adhithyan T. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
