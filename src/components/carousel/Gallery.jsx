import { useState } from "react";

function Gallery({ oneHousing, hidElement }) {
  const [indexPicture, setIndexPicture] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextPicture = () => {
    setIsFading(true);
    setTimeout(() => {
      if (indexPicture < oneHousing.pictures.length - 1) {
        setIndexPicture(indexPicture + 1);
      } else {
        setIndexPicture(0);
      }
      setIsFading(false);
    }, 650);
  };

  const previousPicture = () => {
    setIsFading(true);
    setTimeout(() => {
      if (indexPicture > 0) {
        setIndexPicture(indexPicture - 1);
      } else {
        setIndexPicture(oneHousing.pictures.length - 1);
      }
      setIsFading(false);
    }, 650);
  };
  return (
    <div className="carousel">
      <img
        src={oneHousing.pictures[indexPicture]}
        alt={oneHousing.title}
        className={isFading ? "fade" : "show"}
      />
      <i
        className={`fa-solid fa-chevron-right right ${
          hidElement ? "active" : ""
        }`}
        onClick={nextPicture}
      ></i>
      <i
        className={`fa-solid fa-chevron-left left ${
          hidElement ? "active" : ""
        }`}
        onClick={previousPicture}
      ></i>
      <span className={`indexPicture ${hidElement ? "active" : ""}`}>
        {indexPicture + 1}/{oneHousing.pictures.length}
      </span>
    </div>
  );
}

export default Gallery;
