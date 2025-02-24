import "./styles.scss";
function Logement({ photo, title }) {
  return (
    <article className="oneLogementContainer">
      <div className="oneLogement">
        <img src={photo} alt={title} />
        <div className="colorBackText">
          <p>{title}</p>
        </div>
      </div>
    </article>
  );
}

export default Logement;
