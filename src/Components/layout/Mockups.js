const Mockups = (props) => {
    
    return (
<html lang="en">
<div>
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
            <li><a href="Socialmedia.html">Social media</a></li>
            <li><a class="active" href="Mockups.html">Mockups</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>

    </nav>
    <main class="holder">
        <div class="Mockups">
            <a href="#">
                <p>
                    <img class="mockup1" src="css/Mokcup plant in.png" alt="mockup1"> </img>
                </p>
                <p>
                    <img class="mockup2" src="css/mockup2.png" alt="mockup2"></img>
                </p>
                <p>
                    <img class="mockup3" src="css/mockup3.png" alt="mockup3"></img>
                 </p>
                 </a>
        </div>
    </main>
    <footer>
        <p>Design by Carlos Ospina &copy;</p>
    </footer>

</body>
</div>
</html>
    );
}

export default Mockups;