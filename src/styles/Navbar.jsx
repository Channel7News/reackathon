import styled from 'styled-components'
import COLORS from './constants/COLORS'

const StyledNav = styled.nav`
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
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
  color: white;
  font-weight: bold;
`

const StyledSelect = styled.select`
  width: 15vw;
  height: 4vh;
  &:focus {
    outline-color: white;
    outline-style: double;
    outline-width: 2px;
  }
`

export { StyledNav, StyledNavList, StyledSelect }
