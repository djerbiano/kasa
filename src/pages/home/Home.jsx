import "./styles.scss";
import Banner from "../../components/banner/Banner";
import logoBanner from "../../assets/images/Image-source1.png";
import Logement from "../../components/logement/Logement";
import Data from "../../data/logements.json";
function Home() {
  return (
    <main>
      <Banner photo={logoBanner} title="Chez vous, partout et ailleurs" />
      <div className="containerCard">
        {Data.map((logement) => (
          <Logement
            key={logement.id}
            photo={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
