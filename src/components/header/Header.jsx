import "./styles.scss";
import { Link } from "react-router";
import Logo from "../../assets/images/logoHeader.png";
function Header() {
  return (
    <header>
      <img className="logoHeader" src={Logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
