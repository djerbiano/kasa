import { useEffect, useState } from "react";
import "./styles.scss";
function Host({ data }) {
  const [starArray, setStarArray] = useState([]);

  // handle rating
  useEffect(() => {
    let starCalculator = [];
    for (let i = 0; i < 5; i++) {
      starCalculator.push(i < data.rating);
    }
    setStarArray(starCalculator);
  }, [data.rating]);

  return (
    <div>
      <div className="contentHost">
        <p>{data.host.name}</p>
        <img src={data.host.picture} alt={data.host.name} />
      </div>
      <div className="rating">
        {starArray.map((star, index) => (
          <i
            key={index}
            className={`fa-solid fa-star ${
              star ? "ratingColorPositive" : "ratingColorNegative"
            }`}
          ></i>
        ))}
      </div>
    </div>
  );
}

export default Host;
