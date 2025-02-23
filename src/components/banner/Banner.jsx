import "./styles.scss";

function Banner({ photo, title }) {
  return (
    <div className="banner">
      <img src={photo} alt="banner" />
      <p>{title}</p>
    </div>
  );
}

export default Banner;
