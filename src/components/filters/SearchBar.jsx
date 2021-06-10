import React, { useState } from "react";

const SearchBar = (props) => {
  const {handleSearchValue} = props

  const products = [
    "Placeholder #1",
    "Placeholder #1",
    "Placeholder #1",
    "Placeholder #1",
    "Please don't remove this yet",
  ];

  const [inputValue, setInputValue] = useState("")
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    // makes the inputValue the searched value when submitted
    handleSearchValue(inputValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search here.."
          onChange={handleInputChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
