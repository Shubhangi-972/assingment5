import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-container">
      <div className="img-job-title-container">
        <img
          className="compony-job-logo"
          src={companyLogoUrl}
          alt="similar job compony logo"
        />
        <div className="title-job-rating-container">
          <h1 className="title-job-heading">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-job-icon" />
            <p className="job-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-container">
        <h1 className="description-heading">Description</h1>
        <p className="job-para">{jobDescription}</p>
      </div>
      <div className="job_detail_type-container">
        <div className="location_job_container">
          <MdLocationOn className="location-icon" />
          <p className="job-location">{location}</p>
        </div>
        <div className="employment-job-type-container">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
