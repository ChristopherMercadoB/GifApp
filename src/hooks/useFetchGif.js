import { useState, useEffect } from "react";
import getGif from "../helpers/getGift";

const useFetchGif = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const images = await getGif(category);
    setImages(images);
    setIsLoading(false);
    console.log(images);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};

export default useFetchGif;
