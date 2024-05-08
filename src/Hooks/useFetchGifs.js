import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/getGifs";


export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    SetIsLoading(false);
  }
  useEffect(() => {
    getImages();
  }, []);


  return {
    images,
    isLoading
  };
}
