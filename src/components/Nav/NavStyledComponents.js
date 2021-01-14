import styled from 'styled-components'

export const StyledNavWrapper = styled.nav`
  align-items: center;
  background-color: #74C69D;
  box-shadow: 0px 5px 13px 0px #000;
  display: flex;
  height: 13vh;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`
export const StyledNavButton = styled.button`
  background-color: #74C69D;
  border: none;
  color: #081C15;
  font-size: 125%;
  font-weight: bold;
  height: 100%;
  padding: 2% 4% 2% 4%;

  &:hover {
    background-color: #52B788;
  }
`