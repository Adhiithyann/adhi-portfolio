import Link from 'next/link';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className='firstHeader'>
        <header>
          <h1>My Portfolio</h1>
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
        </header>
      </div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <div className="container">
        <div>
          <h1 className='welcome'>Welcome to My Portfolio!</h1>
        </div>

        <div className='firstPara'>
          <p>
            <strong className='Adhi'>Hi, I'm Adhithyan</strong> — a BCA 2nd year student and a passionate Full Stack Developer with a fresh perspective and a hunger to build impactful digital experiences. I’ve recently completed an intensive full stack development course, equipping me with hands-on experience in both front-end and back-end technologies. From crafting responsive user interfaces to building robust server-side applications, I enjoy bringing ideas to life through clean, functional code. What excites me most is the creative freedom in problem-solving — whether it’s optimizing a REST API or designing a sleek UI, I love turning complexity into simplicity. I’m now looking to collaborate on real-world projects where I can keep learning, contributing, and growing as a developer.
          </p>
        </div>

        <div className='image'>

        </div>

      </div>
      <footer className='last'>

        <div className='info'>
          <strong>Contact Info</strong>
          <ul>
            <li>Email: adhithyan.t10@gmail.com</li>
            <li>Phone: 6282330905</li>
            <li>Social Media Links:
              <li>Linked in:</li>
              <li>Git Hub:</li>
              <li></li>
            </li>
          </ul>
        </div>
        

          <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
}
