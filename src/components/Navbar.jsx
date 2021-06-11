import React from 'react'

import { StyledNav, StyledNavList } from '../styles/Navbar'
import CategorySelector from './CategorySelector'
import CountrySelector from './CountrySelector'

const Navbar = (props) => {
  const { handleCategoryChange, handleCountryChange } = props

  return (
    <div>
      <StyledNav>
        <StyledNavList>
          <div
            style={{
              width: '30%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <label htmlFor="categories">Select a Category:</label>
            <CategorySelector handleCategoryChange={handleCategoryChange} />
          </div>

          <div
            style={{
              width: '30%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <label htmlFor="countries">Select a Country:</label>
            <CountrySelector handleCountryChange={handleCountryChange} />
          </div>
        </StyledNavList>
      </StyledNav>
    </div>
  )
}

export default Navbar
