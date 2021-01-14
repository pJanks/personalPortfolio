import styled from 'styled-components'

export const StyledNavWrapper = styled.nav`
  align-items: center;
  background-color: #74C69D;
  display: flex;
  height: 70px;
  justify-content: space-around;
  width: 100%;
`
export const StyledNavButton = styled.button`
  background-color: #74C69D;
  border: none;
  color: #081C15;
  font-size: 125%;
  font-weight: bold;
  padding: 2% 4% 2% 4%;

  &:hover {
    background-color: #52B788;
  }
`