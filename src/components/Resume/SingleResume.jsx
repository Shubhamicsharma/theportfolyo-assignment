import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {

  const { jobTitle, startDate, endDate, jobLocation, summary, company_name } = element;

  const startDateObj = new Date(startDate); 
  const endDateObj = new Date(endDate); 


  const options = { month: 'short', year: 'numeric' };

  return (
    <div className="st-resume-timeline">
      {jobTitle && <h3 className="st-resume-timeline-title">{jobTitle}</h3>}

      {startDate && endDate && (
        <div className="st-resume-timeline-duration">
          {startDateObj.toLocaleDateString('en-US', options)} - {endDateObj.toLocaleDateString('en-US', options)}
        </div>
      )}

      {jobLocation && company_name && (
        <h4 className="st-resume-timeline-subtitle">{company_name}, {jobLocation}</h4>
      )}

      {summary && (
        <div className="st-resume-timeline-text">
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
