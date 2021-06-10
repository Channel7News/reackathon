import React, { useState } from "react";

const SearchBar = () => {
  const products = [
    "hair brush",
    "mouth wash",
    "mouth guard",
    "hair straightener",
    "soap wash",
  ];

  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("")
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    // makes the inputValue the searched value when submitted
    setSearchValue(inputValue)
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

      {/* Test data - needs to be changed to PROD data */}
      {products
        .filter((product) => product.includes(searchValue))
        .map((product, index) => {
          return (
            <div key={index}>
              <li>{product}</li>
            </div>
          );
        })}
    </div>
  );
};

export default SearchBar;
