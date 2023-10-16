import React from 'react';

const Behance = (props) => {
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
      </head>
      <body>
        <header>
          <div className="holder"></div>
        </header>
        <nav>
          <ul>
            <li><a href="index.html">About me</a></li>
            <li><a className="active" href="Behance.html">Behance</a></li>
            <li><a href="Git.html">Git</a></li>
            <li><a href="Socialmedia.html">Social media</a></li>
            <li><a href="Mockups.html">Mockups</a></li>
            <li><a href="Contact.html">Contact</a></li>
          </ul>
        </nav>
        <main className="holder">
          <div className="row">
            <div className="col card" style={{ width: '18rem', margin: '0 auto', background: '#dcdcdc' }}>
              PlantIn
              <a href="https://www.behance.net/gallery/151056005/UXUI-Case-Study-Plant-Int" className="btn btn-light">
                Go Behance
              </a>
              <img src="/Users/ospi/Desktop/Diplomatura-UTN/react1/front/public/PlantInprofile.jpg" className="card-img-top" alt="PlantIn" style={{ margin: '0 auto' }} />
            </div>

            <div className="col card" style={{ width: '18rem', margin: '0 auto', background: '#dcdcdc' }}>
              Galeno movil
              <a href="https://www.behance.net/gallery/169106659/Case-Study-for-Galeno" className="btn btn-light">
                Go Behance
              </a>
              <img src="css/galeno mockup.png" className="card-img-top" alt="Galeno movil" style={{ margin: '0 auto' }} />
            </div>

            <div className="col card" style={{ width: '18rem', margin: '0 auto', background: '#dcdcdc' }}>
              Wave
              <a href="https://www.behance.net/gallery/168350301/UXUI-Designer-WAVE-HealthTech" className="btn btn-light">
                Go Behance
              </a>
              <img src="css/Waveprofile.jpg" className="card-img-top" alt="Wave" style={{ margin: '0 auto' }} />
            </div>
          </div>
        </main>
        <footer>
          <p>Design by Carlos Ospina &copy;</p>
        </footer>
      </body>
    </html>
  );
};

export default Behance;
