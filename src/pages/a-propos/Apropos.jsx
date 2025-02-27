import "./styles.scss";
import Banner from "../../components/banner/Banner";
import logoBanner2 from "../../assets/images/Image-source2.png";
import Collapse from "../../components/collapse/Collapse";

function Apropos() {

  // data content object 
  const dataContent = {
    fiabilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    securite: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };
  return (
    <div className="containerApropos">
      <Banner photo={logoBanner2} />
      <div className="collapseContainer">
      <Collapse title={"Fiabilité"} data={dataContent.fiabilite} type={"text"} />
      <Collapse title={"Respect"} data={dataContent.respect} type={"text"} />
      <Collapse title={"Service"} data={dataContent.service} type={"text"} />
      <Collapse title={"Sécurité"} data={dataContent.securite} type={"text"} />
      </div>
    </div>
  );
}

export default Apropos;
