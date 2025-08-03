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
      <h1>Here Are Some Of My Projects</h1>
      <ul>
        <li><h3><strong>My First Project</strong></h3><br></br>
        <p>This project involves the creation of a basic static website using HTML (HyperText Markup Language) to showcase foundational web development skills. The website will be composed of several pages, featuring standard elements such as: <br></br>

-Navigation bar: A simple, responsive navigation menu for easy access to different sections.<br></br>

-Content sections: Including headings, paragraphs, images, and links to provide valuable information.<br></br>

-Form elements: For user interaction, like a simple contact form with text input fields and a submit button.<br></br>

-Styling: Basic CSS will be applied to ensure the website is visually appealing, though the focus is primarily on the HTML structure.<br></br><br></br>

Objective:<br></br>
To understand the core structure of an HTML document.<br></br>

To implement common web elements and attributes like links, images, forms, and tables.<br></br>

To practice the proper use of semantic HTML for better accessibility and SEO.<br></br><br></br>

Technologies Used:<br></br>
HTML: To structure the content.<br></br>

CSS: To apply simple styling and layout enhancements.<br></br>

Optional JavaScript: For basic interactivity (like form validation).<br></br><br></br>

This project aims to serve as a beginner-level introduction to web development, building familiarity with HTML elements, and laying the groundwork for future projects involving more complex web technologies.<br></br><br></br>
I haven't pushed this work to github because it was my first project</p>
        </li><br></br><br></br>
        <li><h3><strong>My Second Project</strong></h3><br></br>
        <p>
          Project Overview: Rock, Paper, Scissors Game<br></br>
This project is about creating a Rock, Paper, Scissors game using HTML for structure, CSS for styling, and JavaScript for the game logic and interactivity. The objective is to develop a simple, interactive web-based game that allows the user to play against the computer.<br></br><br></br>

Features:<br></br>
User Interaction: The user can select between Rock, Paper, or Scissors by clicking buttons.<br></br>

Game Logic: The game compares the player's choice with the computer's randomly generated choice and determines the winner based on traditional rules:<br></br>

Rock beats Scissors<br></br>

Scissors beats Paper<br></br>

Paper beats Rock<br></br><br></br>

Display Results: After each round, the game shows the user's choice, the computer's choice, and the result (win, loss, or draw).<br></br><br></br>

Scoreboard: Tracks and displays the number of wins, losses, and ties during the game session.<br></br><br></br>

Objective:<br></br>
To practice using HTML for structuring a simple web page.<br></br>

To use JavaScript for handling user input, randomization (computer's choice), and game logic.<br></br>

To improve understanding of DOM manipulation, event handling, and basic algorithms for decision-making.<br></br><br></br>

Technologies Used:<br></br>
HTML: To create the basic structure (buttons for choices, result display, score tracker).<br></br>

CSS: To style the game interface (layout, button styles, score display).<br></br>

JavaScript: To implement the game logic (random choice for the computer, comparison of choices, and updating results).<br></br><br></br>

Summary:
This project serves as a fun and engaging way to learn about basic web development concepts while also practicing logic and interactivity with JavaScript. By building a Rock, Paper, Scissors game, you will strengthen your skills in handling user inputs, conditional statements, and manipulating the DOM.<br></br><br></br>

<strong>
  Github repository link: 
  <a href="https://share.google/zU19lDDrO1MKiX9AB" target="_blank" rel="noopener noreferrer">
    https://share.google/zU19lDDrO1MKiX9AB
  </a>
</strong><br /><br />
<strong>
  Game link hosted by Vercel: 
  <a href="https://rock-paper-scissor-rho-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
    https://rock-paper-scissor-rho-lac.vercel.app/
  </a>
</strong>

          </p></li><br></br><br></br>
        <li>
          <h3><strong>My Third Project</strong></h3><br></br>
          <p>
            Project Overview: Portfolio Website Using Next.js<br></br>
This project involves building a personal portfolio website using Next.js, a powerful React framework for building fast, SEO-friendly web applications. The goal is to create a sleek, modern, and responsive online portfolio to showcase personal projects, skills, and professional experience.<br></br><br></br>

Features:<br></br>
Home Page: A clean, welcoming landing page with a brief introduction and a call to action (e.g., "Get to know more about me" or "See my work").<br></br>

About Me Section: A page or section detailing your background, experience, and personal information.<br></br>

Project Showcase: Display of personal or professional projects with descriptions, technologies used, and links to live demos or GitHub repositories.<br></br>

Contact Form: A form where visitors can get in touch, integrated with basic form validation and possibly email notifications.<br></br>

Responsive Design: The website will be fully responsive, adapting to different screen sizes (mobile, tablet, desktop).<br></br>

SEO Optimization: Using Next.js built-in features like Head to improve SEO, ensuring better visibility on search engines.<br></br><br></br>

Objective:<br></br>
To create a professional, polished portfolio that serves as a personal brand for showcasing skills and projects.<br></br>

To deepen understanding of React and Next.js, particularly its features like Static Site Generation (SSG), Server-Side Rendering (SSR), and API routes.<br></br>

To practice using CSS modules or styled-components for modular styling and design consistency.<br></br>

To implement good practices for SEO and accessibility (a clean and optimized web experience).<br></br><br></br>

Technologies Used:<br></br>
Next.js: Framework for building the application with features like SSR, SSG, and dynamic routing.<br></br>

React: Used for building reusable components such as the navbar, footer, project cards, and contact form.<br></br>

CSS Modules/Styled Components: For styling the components with scoped, reusable CSS.<br></br>

Vercel: (Optional) Deploying the portfolio to Vercel for fast, serverless hosting.<br></br><br></br>

Key Learning Points:<br></br>
Routing in Next.js: Using Next.js's file-based routing to structure pages and navigate between sections.<br></br>

Dynamic Content Rendering: Displaying dynamic project data from JSON or Markdown files.<br></br>

Deploying with Next.js: Understanding deployment practices, especially on platforms like Vercel.<br></br>

Performance Optimization: Ensuring fast load times with Next.js's built-in optimization tools.<br></br><br></br>

Summary:<br></br>
This project serves as both a learning experience and a real-world application of Next.js. By building a portfolio site, you will strengthen your skills in modern web development, working with React, Next.js, and ensuring a solid foundation in performance, SEO, and accessibility. The resulting portfolio can be used as a professional tool to showcase your skills to potential employers or clients.<br></br><br></br>
          </p>
        </li>
      </ul>
    </div>
    </div>
  );
}
