import React from "react";
import "./GifItem.css";

const GiftItem = ({ img, title }) => {
  return (
      <div className="card">
        <img src={img} alt="Algo mal" />
        <p>{title}</p>
      </div>
  );
};

export default GiftItem;
