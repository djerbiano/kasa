import "./styles.scss";
import Logo from "../../assets/images/logoFooter.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <p>© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
