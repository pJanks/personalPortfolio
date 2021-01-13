import { resumeData } from '../../resumeData'
import { StyledHeaderWrapper, StyledName, StyledJobTitle, StyledSocialMediaWrapper, StyledIcon } from './HeaderStyledComponents'
import gitHubIcon from '../../images/github_icon.png'
import twitterIcon from '../../images/twitter_icon.png'
import linkedInIcon from '../../images/linkedin_icon.png'
import downArrowIcon from '../../images/down_arrow_icon.png'

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledName>Johnny Cassidy</StyledName>
      <StyledJobTitle>Software Developer</StyledJobTitle>
      <StyledSocialMediaWrapper>
        <a rel='noopener noreferrer' aria-label='my github profile' href={resumeData.gitHubURL} target='_blank'><StyledIcon alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my linkedin profile' href={resumeData.linkedInURL} target='_blank'><StyledIcon alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my twitter profile' href={resumeData.twitterURL} target='_blank'><StyledIcon alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
      </StyledSocialMediaWrapper>
      <StyledIcon alt='Next section icon' src={downArrowIcon} tabIndex='0'/>
    </StyledHeaderWrapper>
  )
}