import React from 'react'

import { StyledHeader, Channel } from '../styles/Header'

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        Channel 7 <Channel>News</Channel>
      </h1>
      <p>
        <em>Browse recent news articles by category and language</em>
      </p>
    </StyledHeader>
  )
}

export default Header
