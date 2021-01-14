import { StyledNavWrapper, StyledNavButton } from './NavStyledComponents'

export const Nav = () => {

  const handleButtonClicks = (section) => {
    document.querySelector(`#${section}`).scrollIntoView({behavior: 'smooth'});
  }

  return (
    <StyledNavWrapper>
      <StyledNavButton onClick={(e) => handleButtonClicks(e.target.innerText.toLowerCase())}>Home</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e.target.innerText.toLowerCase())}>About</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e.target.innerText.toLowerCase())}>Experience</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e.target.innerText.toLowerCase())}>Projects</StyledNavButton>
      <StyledNavButton onClick={(e) => handleButtonClicks(e.target.innerText.toLowerCase())}>Contact</StyledNavButton>
    </StyledNavWrapper>
  )
}