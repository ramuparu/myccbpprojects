// Write your code here

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineViewPage,
  TimelineViewMainCon,
  CCbpHead,
  MyJourneyHead,
  ChronoContainer,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderChronoProjects = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} course={item} />
    }
    return <ProjectTimelineCard key={item.id} project={item} />
  }

  return (
    <TimelineViewPage>
      <TimelineViewMainCon>
        <MyJourneyHead>MY JOURNEY OF CCBP 4.0</MyJourneyHead>

        <ChronoContainer>
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            scrollable={{scrollbar: true}}
            slideShow
            slideItemDuration={4000}
          >
            {timelineItemsList.map(eachItem => renderChronoProjects(eachItem))}
          </Chrono>
        </ChronoContainer>
      </TimelineViewMainCon>
    </TimelineViewPage>
  )
}

export default TimelineView
