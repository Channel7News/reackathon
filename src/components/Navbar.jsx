import React from 'react'

import { StyledNav, StyledNavList, StyledSelect } from '../styles/Navbar'

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
            <label htmlFor="categories">Select a Category</label>
            <StyledSelect name="categories">
              <option value="test">Test</option>
              <option value="potato">Potato</option>
            </StyledSelect>
          </div>

          <div
            style={{
              width: '30%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <label htmlFor="languages">Select a Language</label>
            <StyledSelect>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </StyledSelect>
          </div>
        </StyledNavList>
      </StyledNav>
    </div>
  )
}

export default Navbar
