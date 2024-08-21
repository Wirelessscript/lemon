import React from "react"

export default function Testimonials() {
    return(
        <>
            <header class="Testimonials">
                Testimonials
            </header>
            <body class="feedback">
                <ul>
                    <li>
                    <h5>⭐⭐⭐⭐⭐</h5>
                    <img src={require('./images/alipazani.jpg')} alt="profile img"></img>
                    <h6>Natasha M.</h6>
                    <p>Really enjoyed the food and service.</p>
                    </li>
                    <li>
                    <h5>⭐⭐⭐⭐⭐</h5>
                    <img src={require('./images/emilygarland.jpg')} alt="profile img"></img>
                    <h6>Bianca L.</h6>
                    <p>One of the best places I have gone to with my family.</p>
                    </li>
                    <li>
                    <h5>⭐⭐⭐⭐⭐</h5>
                    <img src={require('./images/italomelo.jpg')} alt="profile img"></img>
                    <h6>Jason S.</h6>
                    <p>Really clean and peacefull place.</p>
                    </li>
                    <li>
                    <h5>⭐⭐⭐⭐⭐</h5>
                    <img src={require('./images/viniciuswiesehofer.jpg')} alt="profile img"></img>
                    <h6>Cortney B.</h6>
                    <p>The dessert was exelent!!</p>
                    </li>
                </ul>
            </body>
            </>
    )
}