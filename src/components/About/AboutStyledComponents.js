import styled from 'styled-components'

export const StyledAboutSection = styled.section`
  align-items: center;
  background-color: #1B4332;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  padding-bottom: 2%;
  padding-top: 13vh;
  width: 100%;
`

export const StyledPortrait = styled.img`
  border-radius: 100%;
  height: 200px;
  margin-left: 2%;
  margin-top: -18%;
  width: 200px;
`

export const StyledAboutInfo = styled.div`
  background-color: inherit;
  color: #FFF;
  display: flex;
  flex-direction: column;
  font-size: 115%;
  font-weight: bold;
  line-height: 130%;
  margin: 3%;
`

export const StyledContactInfo = styled.section`
  background-color: inherit;
  border-radius: 20%;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  width: 100%;
`

export const StyledAboutParagraph = styled.p`
  background-color: inherit;
  font-size: 90%;
  margin: 4% 4% 0 4%;
`

export const StyledContactLabel = styled.label`
  background-color: inherit;
  font-size: 113%;
  text-decoration: underline;
  margin-top: 4%;
  width: 100%;
`

export const StyledContactInfoSpan = styled.span`
  background-color: inherit;
  font-size: 90%;
  width: 100%;
`

export const StyledContactInfoLink = styled.a`
  background-color: inherit;
  color: #95D5B2;
  font-size: 90%;
  width: fit-content;
`

export const ContactInfoButton = styled.button`
  border: 2px solid #74C69D;
  border-radius: 30px;
  color: #95D5B2;
  font-size: 110%;
  margin-top: 50%;
  margin-bottom: 5%;
  padding: 13%;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`