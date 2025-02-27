import "./styles.scss";
import { useNavigate } from "react-router";

function Page404() {
  const navigate = useNavigate();
  return (
    <div className="containerPage404">
      <h2>404</h2>
      <p>Oups! La page que vous recherchez n&apos;existe pas.</p>
      <button onClick={() => navigate("/", { replace: true })}>
        Retourner sur la page d&apos;accueil
      </button>
    </div>
  );
}

export default Page404;
