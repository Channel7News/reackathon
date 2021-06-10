import styled from 'styled-components'
import COLORS from './constants/COLORS'

export const StyledHeader = styled.header`
  text-align: center;
`

export const StyledLogo = styled.h1`
  border: 1px solid black;
`

export const Channel = styled.span`
  border: 3px solid ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: white;
`
