import React from 'react';

const Index = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio Carlos Ospina</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link 
        rel="stylesheet" 
        href="css/Portfolio_ux:ui.css" />
        <link rel="stylesheet" href="css/normalize.css" />
        <style>{`
          .holder {
            text-align: justify;
          }
        `}</style>
      </head>
      <body>
        <header>
          <div class="holder"></div>
        </header>
        <nav>
          <ul>
            <li><a className="active" href="index.html">About me</a></li>
            <li><a href="Behance.html">Behance</a></li>
            <li><a href="Git.html">Git</a></li>
            <li><a href="Socialmedia.html">Social media</a></li>
            <li><a href="Mockups.html">Mockups</a></li>
            <li><a href="Contact.html">Contact</a></li>
          </ul>
          <h1>
            <p className="text-center text-silver">CARLOS OSPINA</p>
          </h1>
          <h1>
            <p className="text-center text-teal">UX / UI Designer</p>
            <img
              src="css/prfile2.jpg"
              className="d-block"
              style={{ maxWidth: '200px', margin: '0 auto' }}
              alt="..."
            />
          </h1>
        </nav>
        <main className="holder">
          <div className="Aboutme">
            <p>
              I'm a UX/UI Designer, passionate about Design. I consider myself a
              multidisciplinary designer who combines service and product design
              skills to create human-centric solutions with a passion for
              interactivity and UX/UI.
            </p>
            <p>
              I have experience as a Project Control Services at Accenture, where I
              carried out several activities related to design and user experience. I
              have also worked as a freelance UX/UI designer. I am always looking for
              ways to improve my skills and become a better professional.
            </p>
          </div>
        </main>
        <footer>
          <p>Design by Carlos Ospina &copy;</p>
        </footer>
      </body>
    </html>
  );
};

export default Index;
