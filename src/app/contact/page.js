import Link from 'next/link';


export default function Contact() {
  return (
     <div>
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
      
      <div className="container">
      <h1>Contact Me</h1>
      <p>Email: your-email@example.com</p>
    </div>
    </div>
  );
}
