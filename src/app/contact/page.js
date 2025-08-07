import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <header>
        <h1>Adhithyan T</h1>
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
        <strong>Email: adhithyan.t10@gmail.com </strong>
        <br />
        <strong>Phone: 6282330905 </strong>
        <br />
        <strong>
          Github
          <a
            href="https://github.com/Adhiithyann"
            target="_blank"
            rel="noopener noreferrer"
          >
           : Adhithyan T  
          </a>
        </strong>
        <br />
        <strong>
          Linked In
          <a
            href="https://www.linkedin.com/in/adhithyan-t-73206a365/"
            target="_blank"
            rel="noopener noreferrer"
          >
           : Adhithyan T  
          </a>
        </strong>
        <br />
      </div>
    </div>
  );
}
