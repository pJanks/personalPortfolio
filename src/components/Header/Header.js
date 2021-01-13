import styled from 'styled-components'
import { resumeData } from '../../resumeData'
import gitHubIcon from '../../images/github_icon.png'
import twitterIcon from '../../images/twitter_icon.png'
import linkedInIcon from '../../images/linkedin_icon.png'
import downArrowIcon from '../../images/down_arrow_icon.png'

const StyledHeaderWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const StyledName = styled.h1`
  color: #D8F3DC;
  font-size: 500%;
  margin: 4% 0 2% 0;
  text-align: center;
`

const StyledJobTitle = styled.h3`
  color: #D8F3DC;
  font-size: 150%;
  text-align: center;
`

const StyledSocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`

const StyledIcons = styled.img`
  height: 50px;
  margin: 13vh 3vw 0 3vw;
  width: 50px;

  &:hover {
    cursor: pointer;
  }
`

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledName>Johnny Cassidy</StyledName>
      <StyledJobTitle>Software Developer</StyledJobTitle>
      <StyledSocialMediaWrapper>
        <a rel='noopener noreferrer' aria-label='my github profile' href={resumeData.gitHubURL} target='_blank'><StyledIcons alt='Github icon' src={gitHubIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my linkedin profile' href={resumeData.linkedInURL} target='_blank'><StyledIcons alt='Linkedin icon' src={linkedInIcon} className='social-icons'/></a>
        <a rel='noopener noreferrer' aria-label='my twitter profile' href={resumeData.twitterURL} target='_blank'><StyledIcons alt='Twitter icon' src={twitterIcon} className='social-icons'/></a>
      </StyledSocialMediaWrapper>
      <StyledIcons alt='Next section icon' src={downArrowIcon} tabIndex='0'/>
    </StyledHeaderWrapper>
  )
}