import "./styles.scss";
import { useNavigate } from "react-router";
function Logement({ photo, title, id }) {
  const navigate = useNavigate();

  // function to get a single housing
  const getLogement = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <article className="oneLogementContainer">
      <div className="oneLogement" onClick={() => getLogement(id)}>
        <img src={photo} alt={title} />
        <div className="colorBackText">
          <p>{title}</p>
        </div>
      </div>
    </article>
  );
}

export default Logement;
