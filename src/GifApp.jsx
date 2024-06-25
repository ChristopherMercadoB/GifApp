import React, { useCallback, useState } from "react";
import {AddCategory, GifGrid} from "./components/index";


const GifApp = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <div className="contenedor">
        <div className="text-center">
          <h1>GifApp</h1>
        </div>
        <AddCategory
          onNewCategory={(value) => {
            onAddCategory(value);
          }}
        />
        {categories.map((e) => (
          <GifGrid category={e} key={e} />
        ))}
      </div>
    </>
  );
};

export default GifApp;
