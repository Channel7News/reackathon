import React from 'react'

import { StyledNavSelect } from '../styles/Navbar'

const CountrySelector = (props) => {
  const { handleCountryChange } = props

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

  const handleSelect = (event) => {
    handleCountryChange(event.target.value)
  }

  return (
    <StyledNavSelect onChange={handleSelect}>
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
