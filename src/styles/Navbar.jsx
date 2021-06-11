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

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;

  }
`

const StyledNavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.1rem 0rem;
`

const StyledNavSelect = styled.select`
  width: 15vw;
  height: 4vh;
  &:focus {
    outline-color: white;
    outline-style: double;
    outline-width: 2px;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: auto;

  }
`

export { StyledNav, StyledNavList, StyledNavDiv, StyledNavSelect }
