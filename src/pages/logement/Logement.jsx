import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./styles.scss";
import Data from "../../data/logements.json";
import Tags from "../../components/tags/Tags";
import Host from "../../components/host/Host";
import Collapse from "../../components/collapse/Collapse";
import Gallery from "../../components/carousel/Gallery";

function Logement() {
  const [oneHousing, setOneHousing] = useState(null);
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
    } else {
      navigate("/page404", { replace: true });
    }
  }, [id, navigate]);

  return oneHousing ? (
    <div className="logementContainer">
      <Gallery id={id} oneHousing={oneHousing} hidElement={hidElement} />

      <div className="detailsContainer">
        <div className="details">
          <div className="title">
            <h2>{oneHousing.title}</h2>
            <p>{oneHousing.location}</p>
          </div>

          <div className="tagsContainer">
            {oneHousing.tags.map((tag, index) => (
              <Tags key={index} content={tag} />
            ))}
          </div>
        </div>

        <div className="hostConatiner">
          <Host data={oneHousing} />
        </div>
      </div>

      <div className="collapseContainer">
        <Collapse
          title={"Description"}
          data={oneHousing.description}
          type={"text"}
        />
        <Collapse
          title={"Équipements"}
          data={oneHousing.equipments}
          type={"list"}
        />
      </div>
    </div>
  ) : (
    <p>Chargement...</p>
  );
}

export default Logement;
