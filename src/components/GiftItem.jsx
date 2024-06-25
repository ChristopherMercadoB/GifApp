import React from "react";
import "./GifItem.css";

const GiftItem = ({ category, img, title }) => {
  return (
    <div className="content">
      <div className="card">
        <img src={img} alt="Algo mal" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GiftItem;
