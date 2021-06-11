import React from 'react'

import { StyledNavSelect } from '../styles/Navbar'

const CategorySelector = (props) => {
  const { handleCategoryChange } = props

  const categoryList = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ]

  const handleSelect = (event) => {
    handleCategoryChange(event.target.value)
  }

  return (
    <StyledNavSelect onChange={handleSelect}>
      {categoryList.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.substring(1)}
          </option>
        )
      })}
    </StyledNavSelect>
  )
}

export default CategorySelector
