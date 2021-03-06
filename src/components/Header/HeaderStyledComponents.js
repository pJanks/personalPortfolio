import styled from 'styled-components'

export const StyledHeaderWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
  width: 100%;
`

export const StyledName = styled.h1`
  color: #D8F3DC;
  font-size: 500%;
  margin: 10% 0 0 0;
  text-align: center;
`

export const StyledJobTitle = styled.h3`
  color: #D8F3DC;
  font-size: 150%;
  text-align: center;
`

export const StyledSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`

export const StyledIcon = styled.img`
  height: 50px;
  margin: 13vh 3vw 0 3vw;
  width: 50px;

  &:hover {
    cursor: pointer;
    height: 70px;
    margin: 10vh 3vw 0 3vw;
    width: 80px;
  }
`
