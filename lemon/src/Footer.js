
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

function Footer() {
    return (
      <>
          <footer class="footer">
            <img src={require('./images/Logo.png')} alt="footerimg" width="20%"></img>
                <div>
                  <li>
                    <a href="./Header">Home</a>
                  </li>
                  <li>
                    <a href="./About">About</a>
                    </li>
                    <li>
                    <a href="./Menu">Menu</a>
                    </li>
                    <li>
                    <a href="./Reservations">Reservations</a>
                    </li>
                    <li>
                    <a href="./Order Online">Order Online</a>
                    </li>
                    <li>
                    <a href="./Login">Login</a>
                    </li>
                </div>
                <div class="contact">
                  <li>
                  <h5>Aderss:  CRN of Bush and Branch</h5>
                  </li>
                  <li>
                  <h5>Phone Number:  00555544466</h5>
                  </li>
                  <li>
                  <h5>Email:  littlelemon@outlook.com</h5>
                  </li>
                  </div>
                <div class="media">
                  <li>
                  <a href="facebook.com"><TiSocialFacebook /></a>
                  </li>
                  <li>
                  <a href="instagram.com"><TiSocialInstagram /></a>
                  </li>
                  <li>
                    <a href="twitter.com"><TiSocialTwitter /></a>
                  </li>
                </div>
          </footer>
      </>
    )
}

export default  Footer;