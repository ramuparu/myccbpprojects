// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardCon,
  ProjectTitle,
  ProjectImage,
  ProjectTitleCard,
  IconCard,
  TimePara,
  VisitAnchor,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = project

  return (
    <ProjectCardCon>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleCard>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <IconCard>
          <AiFillCalendar />
          <TimePara as="p">{duration}</TimePara>
        </IconCard>
      </ProjectTitleCard>
      <p>{description}</p>
      <VisitAnchor href={projectUrl}>Visit</VisitAnchor>
    </ProjectCardCon>
  )
}

export default ProjectTimelineCard
