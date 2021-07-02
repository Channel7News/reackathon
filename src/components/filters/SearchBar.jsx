import React, { useState } from "react";
import { StyledSearchBar, StyledSearchButton, StyledSearchInput } from "../../styles/Filter";

const SearchBar = (props) => {
  const {handleSearchValue} = props

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
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <StyledSearchInput
          type="text"
          value={inputValue}
          placeholder="Search here.."
          onChange={handleInputChange}
        />
        <StyledSearchButton>Search</StyledSearchButton>
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
