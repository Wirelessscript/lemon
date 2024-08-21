function About() {
    return (
        <>
        <section class="about">
        <div class="about-content">
        <h4>Little Lemon</h4>
        <h5>Chicago</h5>
        <p>We are a family friendly restaurant that is owned by two Italian brothers. We hope you enjoy your vistit with us.</p>
        </div>
        <img id="restaurant" src={require('./images/restaurant.jpg')} alt="footerimg"></img>
        <img id="chefs" src={require('./images/Mario and Adrian b.jpg')} alt="footerimg"></img>
        </section>
        </>
    )
}

export default About;