import React from "react";
import DateFilter from "./filters/DateFilter";
import SearchBar from "./filters/SearchBar";

import { StyledFilter } from "../styles/Filter"

const Filter = (props) => {
  const {handleSearchValue} = props
  
  return (
    <StyledFilter>
      <DateFilter/>
      <SearchBar handleSearchValue={handleSearchValue}/>
    </StyledFilter>
  );
};

export default Filter;
