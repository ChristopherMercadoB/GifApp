import React, { useState } from "react";

const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("one punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim() <= 1) return 
    onAddCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={(event)=>{onSubmit(event)}}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
