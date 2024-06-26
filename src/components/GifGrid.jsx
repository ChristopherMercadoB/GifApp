import GiftItem from "./GiftItem";
import useFetchGif from "../hooks/useFetchGif";

const GifGrid = ({ category }) => {
  
  const {images, isLoading} = useFetchGif(category)

  return (
    <>



      <div className="text-center">
        <h1>{category}</h1>
        <h2>{isLoading? 'cargando...':''}</h2>
      </div>
      <div className="card-grid">
        {images.map((e) => (
          <GiftItem key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
