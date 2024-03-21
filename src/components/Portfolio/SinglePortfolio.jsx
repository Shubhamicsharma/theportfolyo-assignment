import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { get } from 'react-scroll/modules/mixins/scroller';

const SinglePortfolio = ({ data, getData }) => {
  const { image :{url}, image, title, techStack } = data;
  const techStackString = techStack.join(", ");
  let delay = 200;

  return (
    <div className="col-lg-4 col-md-6" data-aos= 'fade-up' data-aos-duration= '500' data-aos-delay={delay+=100}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(image, title, techStack)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <h5>{title}</h5>
              <Icon icon="mdi:plus-circle" />
              <p>{techStackString}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
