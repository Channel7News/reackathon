import React from 'react'

import { StyledNavSelect } from '../styles/Navbar'

const CountrySelector = () => {
  const countryList = [
    {
      country: 'Australia',
      code: 'au',
    },
    {
      country: 'Brazil',
      code: 'br',
    },
    {
      country: 'Canada',
      code: 'ca',
    },
    {
      country: 'France',
      code: 'fr',
    },
    {
      country: 'Italy',
      code: 'it',
    },
  ]

  return (
    <StyledNavSelect>
      {countryList.map(({ country, code }, index) => {
        return (
          <option key={index} value={code}>
            {country}
          </option>
        )
      })}
    </StyledNavSelect>
  )
}

export default CountrySelector
