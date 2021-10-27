/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt="animal thumbnail"
            onClick={handleIndexClick}
            data-index={index}
            className={index === active ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
