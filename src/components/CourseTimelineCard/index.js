// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseCardCon,
  CourseTitleCard,
  CourseTitleHead,
  IconCard,
  TimePara,
  TagItemsCard,
  TagItemsList,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course

  return (
    <CourseCardCon>
      <CourseTitleCard>
        <CourseTitleHead>{courseTitle}</CourseTitleHead>
        <IconCard>
          <AiFillClockCircle />
          <TimePara as="p">{duration}</TimePara>
        </IconCard>
      </CourseTitleCard>
      <p>{description}</p>
      <TagItemsCard>
        {tagsList.map(eachTag => (
          <TagItemsList key={eachTag.id}>{eachTag.name}</TagItemsList>
        ))}
      </TagItemsCard>
    </CourseCardCon>
  )
}

export default CourseTimelineCard
