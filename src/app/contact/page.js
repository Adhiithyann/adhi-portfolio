import Link from "next/link";

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

      <div>
        <h1 className="conhead">Contact Me</h1>
        <div className="container">

        <div>
        <strong>Email: adhithyan.t10@gmail.com </strong>
        </div><br/>
        <div>
        <strong>Phone: 6282330905 </strong>
        </div><br/>
        <div>
        <strong>
          Github
          <a
            href="https://github.com/Adhiithyann"
            target="_blank"
            rel="noopener noreferrer"
            className="tdec"
          >
           : Adhithyan T  
          </a>
        </strong>
        </div><br/>
        <div>
        <strong>
          Linked In
          <a
            href="https://www.linkedin.com/in/adhithyan-t-73206a365/"
            target="_blank"
            rel="noopener noreferrer"
            className="tdec"
          >
           : Adhithyan T  
          </a>
        </strong>
        </div><br/>
        <div>
          <strong>
           Instagram
          <a
            href="https://www.instagram.com/adhith.yann/"
            target="_blank"
            rel="noopener noreferrer"
            className="tdec"
          >
           : adhith.yann 
          </a>
          </strong>
        </div>
        </div>
      </div>
        <footer className="last">

        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>
  );
}
