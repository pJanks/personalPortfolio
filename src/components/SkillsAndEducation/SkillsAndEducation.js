import { resumeData } from '../../resumeData'
import styled from 'styled-components'

const StyledSkillsWrapper = styled.section`
  background-color: #95D5B2;
  display: flex;
  padding: 1%;
  width: 100%;
`

const StyledSkillsHeader = styled.h3`
  background-color: #95D5B2;
  font-size: 200%;
  margin: 3%;
  padding: 3%;
  text-decoration: underline;
`

const StyledUnorderedList = styled.ul`
  background-color: #95D5B2;
  margin-top: 6%;
  width: 60%;
`
const StyledListItem = styled.li`
  background-color: #95D5B2;
  font-size: 150%;
  font-weight: bold;
  margin-left: 30%;
`

export const SkillsAndEducation = () => {
  return (
    <>
      <StyledSkillsWrapper>
        <StyledSkillsHeader>Tech Skills</StyledSkillsHeader>
        <StyledUnorderedList>
          {resumeData.techSkills.map(skill => <StyledListItem key={skill}>{skill}</StyledListItem>)}
        </StyledUnorderedList>
      </StyledSkillsWrapper>
    </>
  )
}