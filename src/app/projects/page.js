import Link from 'next/link';


export default function Contact() {
  return (
    <>
      <div className="firstHeader">
        <header>

          <div className="adhi">
            <h1><strong>Adhithyan T</strong></h1>
          </div>

          <div className="pos">
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

        </header>
      </div>

      <div >
        <h1 id='mypro'><strong>My Projects </strong> </h1>
        <div className="container">

          <div className='card'>
            <h2><strong>1.Basic Static Website</strong></h2><br />


            Tech Used: HTML, CSS, <br />

            Features: <br />

            Responsive navbar ,

            Content sections with text & images ,

            Simple contact form

            Basic CSS styling <br />

            Goal: <br />
            Build foundational HTML/CSS skills using semantic elements and common web features. <br />

            Note: First project, not yet pushed to GitHub.
          </div>

          <div className='cardA'>
            <h2><strong>2. Rock, Paper, Scissors Game</strong></h2><br />
            <p>
              <strong>Tech:</strong> HTML, CSS, JavaScript<br />
              <strong>Features:</strong>

              User selects Rock/Paper/Scissors

              Computer picks randomly

              Shows result + score (win/loss/draw)

              Interactive UI with DOM updates

              <strong>Goal:</strong>
              Practice DOM manipulation, event handling, and basic game logic. <br /><br />

              🔗 Live:  <a href='https://rock-paper-scissor-rho-lac.vercel.app/'
                target="_blank"
                rel="noopener noreferrer">rock-paper-scissor.vercel.app </a><br />
              📁 Repo:  <a href='https://github.com/Adhiithyann/ROCK-PAPER-SCISSOR'
                target="_blank"
                rel="noopener noreferrer">GitHub Link </a>
            </p>
          </div>
          <div className='cardB'>
            <h2><strong>3. Portfolio Website (Next.js)</strong></h2><br />
            <p>

              <strong>Tech:</strong>  Next.js, React, CSS Modules<br />
              <strong>Features:</strong>

              Home, About, Projects, Contact pages

              Responsive & SEO-optimized layout

              Project showcase with links

              Contact form with validation<br />

              <strong>Goal:</strong>
              Build a modern, professional portfolio using React & Next.js, with a focus on SEO, performance, and clean design.

            </p>
          </div>
        </div>
      </div>
      <footer className="last">

        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>
  );
}
