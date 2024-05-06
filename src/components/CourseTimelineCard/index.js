import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {id, categoryId, title, courseTitle, description, duration, tagsList} =
    courseDetails
  return (
    <div>
      <div className="title-duration-contianer">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="duration-contianer">
          <AiFillClockCircle className="clock-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="unorder-list-contianer">
        {tagsList.map(eachItem => {
          return <p className="list-of-course">{eachItem.name}</p>
        })}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
