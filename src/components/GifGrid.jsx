import React, { useEffect, useState } from "react";
import getGif from "../helpers/getGift";
import GiftItem from "./GiftItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const images = await getGif(category);
    setImages(images);
    console.log(images);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="card-grid">
        {images.map((e) => (
          <GiftItem key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
