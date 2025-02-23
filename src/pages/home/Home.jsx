import "./styles.scss";
import Banner from "../../components/banner/Banner";
import logoBanner from "../../assets/images/Image-source1.png";
function Home() {
  return (
    <main>
      <Banner photo={logoBanner} title="Chez vous, partout et ailleurs" />
    </main>
  );
}

export default Home;
