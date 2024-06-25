import React from "react";
import './GifItem.css'

const GiftItem = ({ category, images }) => {
  return (
    <div className="content">
      <h3>{category}</h3>
      <div className="img-container">
        {images.map(({ id, title, img }) => (
          <div className="img-item" key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftItem;
