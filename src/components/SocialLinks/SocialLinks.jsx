import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Link from 'next/link';

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {data.map((item, index) => (
        <Link legacyBehavior href={item.url} key={index}>
          <a
            className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
            onMouseEnter={() => handleIconHover(index)}
          >
            <span className="st-social-icon"><Icon icon={`fa6-brands:${item.platform.toLowerCase()}`} /></span>
            <span className="st-icon-name">{item.platform}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SocialLinks;
