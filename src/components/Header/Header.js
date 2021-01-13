import styled from 'styled-components'

const StyledHeaeerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const StyledName = styled.h1`
  color: #FFF;
  font-size: 500%;
  margin: 4% 0 2% 0;
  text-align: center;
`

const StyledJobTitle = styled.h3`
  color: #FFF;
  font-size: 150%;
  text-align: center;
`

export const Header = () => {
  return (
    <StyledHeaeerWrapper>
      <StyledName>Johnny Cassidy</StyledName>
      <StyledJobTitle>Software Developer</StyledJobTitle>
    </StyledHeaeerWrapper>
  )
}