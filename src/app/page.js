import Link from "next/link";

import Head from "next/head";

export default function Home() {
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
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
       <div className="image">
          <img src="/adhii.jpeg" alt="image" className="photo"></img>
        </div>
      <div className="container">

       

      <div className="firstPara">
          <h1 className="welcome">Welcome!</h1>


        
          <p id="line">
            <strong className="Adhi">Hi, I am Adhithyan</strong> — a BCA 2nd year
            student and a passionate Full Stack Developer with a fresh
            perspective and a hunger to build impactful digital <br/> experiences.
            I have recently completed an intensive full stack development course,
            equipping me with hands-on experience in both front-end and back-end
            technologies. From crafting responsive user interfaces to building
            robust server-side applications, I enjoy bringing ideas to life
            through clean, functional code. <br/> What excites me most is the creative
            freedom in problem-solving — whether it is optimizing a REST API or
            designing a sleek UI, I love turning complexity into <br/> simplicity. I am
            now looking to collaborate on real-world projects where I can keep
            learning, contributing, and growing as a developer.
          </p>
        </div>

        <div className="content">
          <h1><strong>Contents</strong></h1> <br/>
          <div><p><strong>About</strong>: A brief description about Myself</p></div><br/>
          <div><p><strong>Projects</strong>: A brief description about the projects I have made</p></div><br/>
          <div><p><strong>Contacts</strong>: If you want to contact me , all my contact details are here</p></div>
        </div>
      </div>
      <footer className="last">

        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>
  );
}
