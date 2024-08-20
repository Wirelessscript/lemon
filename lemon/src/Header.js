function Header() {
    return (
        <nav>
          <div>
          <img src={require('./images/logo.jpeg')} alt="Logo"></img>
          </div>
          <ul>
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
          </ul>
        </nav>
    )}

    export default Header;