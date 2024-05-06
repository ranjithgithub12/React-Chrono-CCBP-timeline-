import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-contianer">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calander-icons" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
