import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import './Blog.scss'

const SingleBlog = ({ element }) => {
  const { image: { url }, name, position, review } = element;
  const firstFullStopIndex = review.indexOf('.');
  const title = review.substring(0, firstFullStopIndex);
  
  return (
    <div className={`st-post-single st-style1`}>
      <Link legacyBehavior href="#">
        <a className="st-post-thumb st-zoom">
          <Image src={url} alt="blog1" width={400} height={300} className="st-zoom-in" />
        </a>
      </Link>
      <div className="st-post-info">
        <div className="st-post-date">
          By:
          <a href="blog-details.html" className="st-post-author">
            {name}
          </a>
          <span className="st-post-date-divider">|</span>
          <span className="st-post-publish-date">{position}</span>
        </div>
        <h4 className="st-post-title">
          <Link legacyBehavior href="#">
            <a>{title}</a>
          </Link>
        </h4>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  element: PropTypes.object,
};

export default SingleBlog;
