import "./styles.scss";
import { Link } from "react-router";
import Logo from "../../assets/images/logoHeader.png";
function Header() {
  return (
    <header>
      <div className="logoHeader">
        <img src={Logo} alt="Logo Kasa" />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
