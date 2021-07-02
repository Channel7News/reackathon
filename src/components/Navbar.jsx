import React from 'react'

import { StyledNav, StyledNavDiv, StyledNavList } from '../styles/Navbar'
import CategorySelector from './CategorySelector'
import CountrySelector from './CountrySelector'

const Navbar = (props) => {
  const { handleCategoryChange, handleCountryChange } = props

  return (
    <div>
      <StyledNav>
        <StyledNavList>
          <StyledNavDiv>
            <label htmlFor="categories">Select a Category:</label>
            <CategorySelector handleCategoryChange={handleCategoryChange} />
          </StyledNavDiv>

          <StyledNavDiv>
            <label htmlFor="countries">Select a Country:</label>
            <CountrySelector handleCountryChange={handleCountryChange} />
          </StyledNavDiv>
        </StyledNavList>
      </StyledNav>
    </div>
  )
}

export default Navbar
