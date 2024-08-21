function Header() {
    return (
      <>
        <header>
        <img src={require('./images/Logo.png')} alt="Logo" width="30%"></img>
          <nav class="Navbar">
            <ul class>
              <li class="link">
                <a href="./Header">Home</a>
              </li>
              <li class="link">
                <a href="./About">About</a>
              </li >
              <li class="link">
                <a href="./Menu">Menu</a>
              </li>
              <li class="link">
                <a href="./Reservations">Reservations</a>
              </li>
              <li class="link">
                <a href="./Order Online">Order Online</a>
              </li>
              <li class="link">
                <a href="./Login">Login</a>
              </li>
            </ul>
          </nav>
        </header>
        </>
    )}

    export default Header;