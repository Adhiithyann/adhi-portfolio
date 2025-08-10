import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Adhithyan T</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="contact-wrapper">
        <header className="contact-header">
          <h1 className="contact-logo"><strong>Adhithyan T</strong></h1>
          <nav className="contact-nav">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="contact-main">
          <h2 className="contact-heading">Contact Me</h2>
          <div className="contact-content">
            <p><strong>Email:</strong> adhithyan.t10@gmail.com</p>
            <p><strong>Phone:</strong> 6282330905</p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/Adhiithyann"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Adhithyan T
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/adhithyan-t-73206a365/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Adhithyan T
              </a>
            </p>
            <p>
              <strong>Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/adhith.yann/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @adhith.yann
              </a>
            </p>
          </div>
        </main>

        <footer className="contact-footer">
          <p>© 2025 Adhithyan T. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
