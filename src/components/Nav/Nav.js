import { StyledNavWrapper, StyledNavButton } from './NavStyledComponents'

export const Nav = () => {

const handleButtonClicks = (e) => {
  console.log(e.target.innerText)
}

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