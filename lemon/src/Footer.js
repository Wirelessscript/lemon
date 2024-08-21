
function Footer() {
    return (
      <>
          <footer class="footer">
            <img src={require('./images/Logo.png')} alt="footerimg" width="20%"></img>
              <ul>
                <li>
                  <h4>Conact details:</h4>
                  <h5>Aderss:</h5>
                  <h5>Phone Number:</h5>
                  <h5>Email:</h5>
                </li>
                <li>
                  <h4>Social Media Links</h4>
                  <a href="facebook.com">facebook</a>
                  <a href="instagram.com">Instagram</a>
                </li>
              </ul>
          </footer>
      </>
    )
}

export default  Footer;