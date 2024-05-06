import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {Chrono} from 'react-chrono'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="top-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{primary: '#0967d2', secondary: '#ffffff'}}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
            )
          }
          if (eachItem.categoryId === 'PROJECT') {
            return (
              <ProjectTimelineCard
                projectDetails={eachItem}
                key={eachItem.id}
              />
            )
          }
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
