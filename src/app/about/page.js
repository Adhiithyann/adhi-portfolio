import Link from 'next/link';
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Adhithyan T</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="about-header">
        <h1 className="about-logo"><strong>Adhithyan T</strong></h1>
        <nav className="about-nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="about-main">
        <section className="about-section">
          <h2>Hi, I Am Adhithyan T</h2>
          <p className="about-text">
            <strong>a BCA 2nd year
            student and a passionate Full Stack Developer with a fresh
            perspective and a hunger to build impactful digital experiences.
            I have recently completed an intensive full stack development course,
            equipping me with hands-on experience in both front-end and back-end
            technologies. From crafting responsive user interfaces to building
            robust server-side applications, I enjoy bringing ideas to life
            through clean, functional code. What excites me most is the creative
            freedom in problem-solving — whether it is optimizing a REST API or
            designing a sleek UI, I love turning complexity into simplicity. I am
            now looking to collaborate on real-world projects where I can keep
            learning, contributing, and growing as a developer.</strong>
        </p>
      </section>

      <section className="education-section">
        <h2>My Education</h2>
        <p className="about-text">
          Currently I am studying at  <strong>Jamia Nadwiyya Arts & Science College</strong> , As a 2nd year BCA student <br />
          And from <strong>Talrop Techies Park</strong> I am completing a <strong>full stack developer course </strong> <br />
          I have studied <strong> German Language</strong> From <strong>Bristol International Academy , Vytilla</strong>
        </p>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <p className="about-text">
          I have hands-on experience in web development with a solid foundation in <strong>HTML</strong> and <strong>CSS </strong>for creating responsive and structured layouts. I am proficient in <strong>Python</strong> and have worked extensively with the <strong>Django</strong> <br />framework for building robust backend systems and APIs. On the frontend, I use <strong>React.js</strong> to create interactive user interfaces and have also worked with <strong>Next.js</strong> for building full-stack and server-rendered <br />React applications.
        </p>
      </section>
    </main >

      <footer className="about-footer">
        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>
  );
}
