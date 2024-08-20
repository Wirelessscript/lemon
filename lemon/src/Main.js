

export default function Main() {
    return (
        <body class="main">
        <section>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button type="button" class="button">Reserve a Table</button>
        </section>
        <div class="img">
        <img src={require('./images/heroimg.jpg')} alt="Logo" height="500px" width="500px"></img>
        </div>
        </body>
    )
}