import React from "react";
import DateFilter from "./filters/DateFilter";
import SearchBar from "./filters/SearchBar";

import { StyledFilter } from "../styles/Filter"

const Filter = () => {
  
  return (
    <StyledFilter>
      <DateFilter/>
      <SearchBar />
    </StyledFilter>
  );
};

export default Filter;
