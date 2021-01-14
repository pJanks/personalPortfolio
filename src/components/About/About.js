import { StyledAboutSection, StyledPortrait, StyledContactInfoLink, StyledAboutInfo, StyledContactInfoSpan, StyledAboutParagraph, StyledContactLabel, StyledContactInfo, ContactInfoButton } from './AboutStyledComponents'
import { resumeData } from '../../resumeData'
import profilePicture from '../../images/profilePicture.png'

export const About = () => {
  return (
    <StyledAboutSection id='about'>
      <StyledPortrait alt='photo of johnny cassidy' src={profilePicture} />
      <StyledAboutInfo>
        <StyledAboutParagraph>
          {resumeData.bioDescription}
        </StyledAboutParagraph>
        <StyledContactInfo>
          <StyledContactLabel>Contact Details:</StyledContactLabel>
          <StyledContactInfoSpan>Johnny Cassidy</StyledContactInfoSpan>
          <StyledContactInfoSpan>Las Vegas, NV</StyledContactInfoSpan>
          <StyledContactInfoSpan>702.752.6523</StyledContactInfoSpan>
          <StyledContactInfoLink rel='noopener noreferrer' aria-label='send email' href='mailto: Johnny.K.Cassidy@gmail.com' target='_blank'>
            <StyledContactInfoSpan>Johnny.K.Cassidy@gmail.com</StyledContactInfoSpan>
          </StyledContactInfoLink>
          <StyledContactInfoLink rel='noopener noreferrer' href={resumeData.resumeURL} target='_blank'><ContactInfoButton tabIndex='0' aria-label='view resume as PDF'>resume.pdf</ContactInfoButton></StyledContactInfoLink>
        </StyledContactInfo>
      </StyledAboutInfo>
    </StyledAboutSection>
  )
}