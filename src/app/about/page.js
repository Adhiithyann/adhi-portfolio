import Link from 'next/link';


export default function about() {
  return (
    <>
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

      <div className="para">
        <h1>Hii , I Am Adhithyan T</h1>
        <p> A passionate Full Stack Developer with a fresh perspective and a hunger to build impactful digital experiences. I’ve recently completed an intensive full stack development course, equipping me with hands-on experience in both front-end and back-end technologies. From crafting responsive user interfaces to building robust server-side applications, I enjoy bringing ideas to life through clean, functional code. What excites me most is the creative freedom in problem-solving — whether it’s optimizing a REST API or designing a sleek UI, I love turning complexity into simplicity. I’m now looking to collaborate on real-world projects where I can keep learning, contributing, and growing as a developer.</p>
      </div>
      <div className='skill'>
        <div>
          <h2><strong>My Skills</strong></h2>
          <p>
          I have hands-on experience in web development with a solid foundation in HTML and CSS for creating responsive and structured layouts. I'm proficient in Python and have worked extensively with the Django framework for building robust backend systems and APIs. On the frontend, I use React.js to create interactive user interfaces and have also worked with Next.js for building full-stack and server-rendered React applications.
          </p>
        </div>
      </div>
      <footer className='last'>
        

        <p>© 2025 Adhithyan T. All rights reserved.</p>
    </footer>
    </>


  );
}
