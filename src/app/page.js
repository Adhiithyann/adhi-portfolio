import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <h1 className="logo"><strong>Adhithyan T</strong></h1>
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <div className="image-wrapper">
          <img src="/adhii.jpeg" alt="Adhithyan" className="photo" />
        </div>

        <div className="text-content">
          <section className="intro">
            <h2 id="welcome">Welcome!</h2>
            <p className="line">
                <strong className="Adhi">Hi, I am Adhithyan</strong> — a BCA 2nd year
            student and a passionate Full Stack Developer with a fresh
            perspective and a hunger to build impactful digital  experiences.
            I have recently completed an intensive full stack development course,
            equipping me with hands-on experience in both front-end and back-end
            technologies. From crafting responsive user interfaces to building
            robust server-side applications, I enjoy bringing ideas to life
            through clean, functional code.  What excites me most is the creative
            freedom in problem-solving — whether it is optimizing a REST API or
            designing a sleek UI, I love turning complexity into  simplicity. I am
            now looking to collaborate on real-world projects where I can keep
            learning, contributing, and growing as a developer.
            </p> <br/> <br/>
          </section>

          <section className="contents">
            <h3>Contents</h3>
            <p className="line"><strong>About</strong>: A brief description about Myself</p>
            <p className="line"><strong>Projects</strong>: A brief description about the projects I have made</p>
            <p className="line"><strong>Contacts</strong>: If you want to contact me, all my contact details are here</p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>
  );
}
