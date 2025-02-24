import "./styles.scss";
import { useParams, useNavigate } from "react-router";
import Data from "../../data/logements.json";
import { useEffect, useState } from "react";

function Logement() {
  const [oneHousing, setOneHousing] = useState(null);
  const [indexPicture, setIndexPicture] = useState(0);
  const [hidElement, setHidElement] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // function to find one housing
  useEffect(() => {
    const housing = Data.find((housing) => housing.id === id);
    if (housing) {
      setOneHousing(housing);

      // hide element if one picture is present
      if (housing.pictures.length === 1) {
        setHidElement(true);
      }
      console.log(housing);
    } else {
      navigate("/page404", { replace: true });
    }
  }, [id, navigate]);

  const nextPicture = () => {
    if (indexPicture < oneHousing.pictures.length - 1) {
      setIndexPicture(indexPicture + 1);
    } else {
      setIndexPicture(0);
    }
  };

  const previousPicture = () => {
    if (indexPicture > 0) {
      setIndexPicture(indexPicture - 1);
    } else {
      setIndexPicture(oneHousing.pictures.length - 1);
    }
  };

  return oneHousing ? (
    <section className="logementContainer">
      <div className="carousel">
        <img src={oneHousing.pictures[indexPicture]} alt={oneHousing.title} />
        <i
          className={`fa-solid fa-chevron-right right ${hidElement ? "active" : ""}`}
          onClick={nextPicture}
        ></i>
        <i
          className={`fa-solid fa-chevron-left left ${hidElement ? "active" : ""}`}
          onClick={previousPicture}
        ></i>
        <span className={`indexPicture ${hidElement ? "active" : ""}`}>
          {indexPicture + 1}/{oneHousing.pictures.length}
        </span>
      </div>
    </section>
  ) : (
    <p>Chargement...</p>
  );
}

export default Logement;
