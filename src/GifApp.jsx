import React, { useCallback, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
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
