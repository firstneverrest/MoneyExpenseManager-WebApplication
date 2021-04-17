import React from "react";

import Img from "../../img/img.jpg";

const Tooltip = (props) => {
  return (
    <div className="container">
      <p className="hover-text">hover me</p>
      <div className="tooltip">
        <img className="tooltip__img" src={Img} alt="nature" />
        <h3 className="tooltip__header">The magician book</h3>
        <p className="tooltip__text">
          Today, we want magician to protect our world from the other outsider
          "The Demon" which come to devour the Earth
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
