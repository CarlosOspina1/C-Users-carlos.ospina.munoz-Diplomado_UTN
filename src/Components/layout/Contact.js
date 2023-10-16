const Contact = (props) => {
    
    return (
<html lang="en">

<head>
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <title>Portfolio Carlos Ospina</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    </link>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="css/Portfolio_ux:ui.css"></link>
    <link rel="stylesheet" href="css/normalize.css"> </link>
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
            <li><a href="Mockups.html">Mockups</a></li>
            <li><a class="active" href="Contact.html">Contact</a></li>
        </ul>

    </nav>
    <main class="holder contact">
        <div class="Contact">
            <h2>Contact with me</h2>
            <form action="" method="" class="form">
                <p>
                    <label for="Name">Name</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="Email">Email</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="Phone">Phone</label>
                    <input type="text" name=""></input>
                </p>
                <p>
                    <label for="Message">Message</label>
                    <input type="text" name=""></input>
                </p>
                <p class="action"><input type="submit" value="Send"/></p>
            </form>
        </div>
        <div class="data">
            <h2>Other Ways to Contact</h2>
            <p>You can contact us</p>
            <ul>
                <li>Phone: 1127394927</li>
                <li>Email: karloz-88@hotmail.com</li>
            </ul>
        </div>
    </main>
    <footer>
        <p>Design by Carlos Ospina &copy;</p>
    </footer>

</body>


</html>
    );
}

export default Contact;