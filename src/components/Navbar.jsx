import React from 'react'

import { StyledNav, StyledNavList, StyledNavSelect } from '../styles/Navbar'
import CountrySelector from './CountrySelector'

const Navbar = () => {
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
            <StyledNavSelect name="categories">
              <option value="test">Test</option>
              <option value="potato">Potato</option>
            </StyledNavSelect>
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
            <CountrySelector />
          </div>
        </StyledNavList>
      </StyledNav>
    </div>
  )
}

export default Navbar
