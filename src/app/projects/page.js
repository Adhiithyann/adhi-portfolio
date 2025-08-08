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


            <strong>Tech Used</strong>: HTML, CSS, <br />

           <strong>Features:</strong> <br />

            Responsive navbar ,

            Content sections with text & images ,

            Simple contact form

            Basic CSS styling <br />

            <strong>Goal:</strong> <br />
            Build foundational HTML/CSS skills using semantic elements and common web features. <br />

            <strong>Note:</strong> First project, not yet pushed to GitHub.
          </div>

          <div className='cardA'>
            <h2><strong>2. Rock, Paper, Scissors Game</strong></h2><br />
            <p>
              <strong>Tech:</strong> HTML, CSS, JavaScript<br />
              <strong>Features:</strong>

              User selects Rock/Paper/Scissors

              Computer picks randomly

              Shows result + score (win/loss/draw)

              Interactive UI with DOM updates <br/>

              <strong>Goal:</strong>
              Practice DOM manipulation, event handling, and basic game logic. <br />

              🔗 Live:  <a href='https://rock-paper-scissor-rho-lac.vercel.app/'
                target="_blank"
                rel="noopener noreferrer"
                className='tdec'><strong>rock-paper-scissor</strong> </a><br />
              📁 Repo:  <a href='https://github.com/Adhiithyann/ROCK-PAPER-SCISSOR'
                target="_blank"
                rel="noopener noreferrer"
                className='tdec'><strong>GitHub Link</strong> </a>
            </p>
          </div>
          <div className='cardB'>
            <h2><strong>3. Portfolio Website </strong></h2><br />
            <p>

              <strong>Tech:</strong>  Next.js, React, CSS Modules<br />
              <strong>Features:</strong>

              Home, About, Projects, Contact pages

              Responsive & SEO-optimized layout

              Project showcase with links

              Contact form with validation<br />

              <strong>Goal:</strong>
              Build a modern, professional portfolio using React & Next.js<br/> <br/>

              🔗 Live:  <a href=''
                target="_blank"
                rel="noopener noreferrer"
                className='tdec'><strong>My Portfolio</strong> </a><br />
              📁 Repo:  <a href='https://github.com/Adhiithyann/adhi-portfolio'
                target="_blank"
                rel="noopener noreferrer"
                className='tdec'><strong>GitHub Link</strong> </a>

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
