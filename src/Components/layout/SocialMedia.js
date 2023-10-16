import React from 'react';
const SocialMedia = (props) => {
    return (
<html lang="en">

<head>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <title>Portfolio Carlos Ospina</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="css/Portfolio_ux:ui.css"></link>
    <link rel="stylesheet" href="css/normalize.css"></link>

</head>
<body>
    <header>
    <div class="holder"></div>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">About me</a></li>
            <li><a href="Behance.html">Behance</a></li>
            <li><a href="Git.html">Git</a></li>
            <li><a class="active" href="Socialmedia.html">Social media</a></li>
            <li><a href="Mockups.html">Mockups</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>

    </nav>
    <main class="holder">
        <div class="Socialmedia">
            <a href="#">
                <link rel="stylesheet" href="https://www.linkedin.com/in/carlos-ospina-mu%C3%B1oz-ux-ui-designer-dev/"> LinkedIn</link>
            </a>
            <p>
                <img class="logolinkedin" src="css/logolinkedin.png" alt="logolinkedin"></img>
            </p>
             <a href="#">
                <link rel="stylesheet" href="https://www.behance.net/carlosospina13/projects"> Behance</link>
            </a>
            <p>
                <img class="logobehance" src="css/logobehance.png" alt="logobehance"></img>
            </p>
        </div>
    </main>
    <footer>
        <p>Design by Carlos Ospina &copy;</p>
    </footer>

</body>


</html>
    );
}

export default SocialMedia;