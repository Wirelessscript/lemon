function Specials() {
    return(

            <>
            <header class="heading1">
                <h1>Specials</h1>
                <button type="button" class="button">Online Menu</button>
            </header>
            <div class="card">
            <div class="post">
                <img src={require('./images/greek salad.jpg')} alt="Greek salad"></img>
                <p>The greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <button type="button" class="button">Order a delivery</button>
            </div>
            <div class="post">
                <img src={require('./images/bruschetta.jpg')} alt="Bruschetta"></img>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <button type="button" class="button">Order a delivery</button>
            </div>
            <div class="post">
                <img src={require('./images/lemon dessert.jpg')} alt="lemon dessert"></img>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <button type="button" class="button">Order a delivery</button>
            </div>
            </div>
            </>

    )
}
export default Specials;