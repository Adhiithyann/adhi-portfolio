import Link from 'next/link';


export default function about() {
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

      <div className="para">
        <h1><strong>Hii , I Am Adhithyan T</strong></h1>
        <p className='line'><strong>
             a BCA 2nd year
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
      </div>
      <div className='education'>
        <h1><strong>My Education</strong></h1>
        <p className='line'>
          Currently I am studying at  <strong>Jamia Nadwiyya Arts & Science College</strong> , As a 2nd year BCA student <br/>
          And from <strong>Talrop Techies Park</strong> I am completing a <strong>full stack developer course </strong> <br/>
          I have studied <strong> German Language</strong> From <strong>Bristol International Academy , Vytilla</strong>

        </p>
      </div>
      <div className='skill'>
          <h1><strong>My Skills</strong></h1>
          <p className='line'>
            I have hands-on experience in web development with a solid foundation in <strong>HTML</strong> and <strong>CSS </strong>for creating responsive and structured layouts. I'm proficient in <strong>Python</strong> and have worked extensively with the <strong>Django</strong> <br/>framework for building robust backend systems and APIs. On the frontend, I use <strong>React.js</strong> to create interactive user interfaces and have also worked with <strong>Next.js</strong> for building full-stack and server-rendered <br/>React applications.
          </p> 
      </div>
      <footer className='last'>


        <p>© 2025 Adhithyan T. All rights reserved.</p>
      </footer>
    </>


  );
}
