import styled from 'styled-components'

const StyledNavWrapper = styled.nav`
  align-items: center;
  background-color: #74C69D;
  display: flex;
  justify-content: center;
  width: 100%;
`
const StyledNavButton = styled.button`
  background-color: #74C69D;
  border: none;
  border-radius: 20%;
  color: #FFF;
  font-size: 125%;
  font-weight: bold;
  margin: 1% 2% 1% 2%;
  padding: 1% 2% 1% 2%;

  &:hover {
    background-color: #52B788;
  }
`

const handleButtonClicks = (e) => {
  console.log(e.target.innerText)
}

export const Nav = () => {
  return (
    <StyledNavWrapper>
      <StyledNavButton onClick={(e) => handleButtonClicks(e)}>Home</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e)}>About</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e)}>Experience</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e)}>Projects</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e)}>Contact</StyledNavButton>
    </StyledNavWrapper>
  )
}