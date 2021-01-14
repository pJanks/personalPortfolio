import { resumeData } from '../../resumeData'
import { StyledWrapper, StyledSchoolListItem, StyledSchoolName, StyledSchoolInfo, StyledSchoolUnorderedList, StyledHeader, StyledSchoolContainer,  StyledUnorderedList, StyledListItem } from './SkillsAndEducationStyledComponents'

export const SkillsAndEducation = () => {
  return (
    <>
      <StyledWrapper>
        <StyledHeader>Tech Skills</StyledHeader>
        <StyledUnorderedList>
          {resumeData.techSkills.map(skill => <StyledListItem key={skill}>{skill}</StyledListItem>)}
        </StyledUnorderedList>
      </StyledWrapper>

      <StyledWrapper>
        <StyledHeader>Education</StyledHeader>
        <StyledSchoolContainer>
          <StyledSchoolName>{resumeData.education.school}</StyledSchoolName>
          <StyledSchoolInfo>{resumeData.education.position}</StyledSchoolInfo>
          <StyledSchoolInfo>{resumeData.education.time}</StyledSchoolInfo>
          <StyledSchoolUnorderedList>
            {resumeData.education.description.map(element => <StyledSchoolListItem key={element}>{element}</StyledSchoolListItem>)}
          </StyledSchoolUnorderedList>
        </StyledSchoolContainer>
      </StyledWrapper>
    </>
  )
}