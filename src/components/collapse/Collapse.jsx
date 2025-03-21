import { useState } from "react";
import "./styles.scss";
function Collapse({ title, data, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [collapseIcone, setCollapseIcone] = useState(false);

  return (
    <div className="collapse">
      <div className="summary">
        {title}
        <span
          onClick={() => {
            setCollapseIcone(!collapseIcone);
            setIsOpen(!isOpen);
          }}
        >
          <i className={collapseIcone ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}></i>
        </span>
      </div>

      <div className={`content-wrapper ${isOpen ? "open" : ""}`}>
        <div className="content">
          {type === "list" ? (data.map((item) => <p key={item}>{item}</p>)) : (<p>{data}</p>)}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
