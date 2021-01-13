import { StyledAboutSection, StyledPortrait, StyledAboutParagraph } from './AboutStyledComponents'
import { resumeData } from '../../resumeData'
import profilePicture from '../../images/profilePicture.png'

export const About = () => {
  return (
    <StyledAboutSection>
      <StyledPortrait alt='photo of johnny cassidy' src={profilePicture} />
      <StyledAboutParagraph>
        {resumeData.bioDescription}
      </StyledAboutParagraph>
    </StyledAboutSection>
  )
}