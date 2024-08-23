import React from 'react';
import Logo from '../images/Logo.png'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={Logo} alt='Logo' width="300" height="100" viewbox="0 0 148 40"/>
                    <p>We are a family owned Mediteraneran restaurant, focused on traditional reciepes served with a modern twist.</p>
                </div>
                <div>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Adress: <br/> 44 Branch City, NY</li>
                        <li>Phone Number: <br/> 054 2688 2223</li>
                        <li>E-mail: <br/> littlelemon@outlook.company</li>
                    </ul>
                </div>

                <div>
                    <ul>
                    <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;