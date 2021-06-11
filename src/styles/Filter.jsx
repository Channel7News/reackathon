import styled from "styled-components";
import COLORS from "./constants/COLORS";

const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLORS.secondary};
  padding: 0.5rem 0;
`

const StyledSearchBar = styled.div`
`

const StyledSearchInput = styled.input`
  width: 15vw;
  height: 3.5vh;
  margin-right: 0.4rem;
  &:focus {
    outline-color: white;
    outline-style: double;
    outline-width: 2px;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 60vw;
  }
`

const StyledSearchButton = styled.button`
  height: 4vh;
  background-color: black;
  color: white;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;

  &:focus {
    outline-color: white;
    outline-style: double;
    outline-width: 2px;
  }
  &:hover {
    background-color: white;
    color: black;
  }

  `

export { StyledFilter, StyledSearchBar, StyledSearchButton,  StyledSearchInput }