import styled from 'styled-components'

const StyledNav = styled.nav`
  border: 1px solid black;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  width: 100%;
`

const StyledSelect = styled.select`
  width: 15vw;
  height: 4vh;
`

export { StyledNav, StyledNavList, StyledSelect }
