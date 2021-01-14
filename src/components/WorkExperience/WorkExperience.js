import { resumeData } from '../../resumeData'
import { StyledExperienceWrapper, StyledListItem, StyledUnorderedList, StyledExperienceTime, StyledExperiencePosition, StyledExperienceTitle, StyledExperienceHeader, StyledWorkExperienceSection, StyledListItemWrapper } from './WorkExperienceStyledComponents'

const populateExperience = (section) => {
  return resumeData.section.map(element => <li key={element}>{element}</li>)
}

export const WorkExperience = () => {
  return (
    <StyledExperienceWrapper id='experience'>
      <StyledExperienceHeader>
        Work History
      </StyledExperienceHeader>
      <StyledWorkExperienceSection>
        {resumeData.jobs.map(job => {
          return (
            <StyledListItemWrapper key={job.name}>
              <StyledExperienceTitle>{job.name}</StyledExperienceTitle>
              <StyledExperiencePosition>{job.position}</StyledExperiencePosition>
              <StyledExperienceTime>{job.time}</StyledExperienceTime>
              <StyledUnorderedList>
                {job.description.map(element => <StyledListItem key={element}>{element}</StyledListItem>)}
              </StyledUnorderedList>
            </StyledListItemWrapper>
          )
        })}
      </StyledWorkExperienceSection>
    </StyledExperienceWrapper>
  )
}