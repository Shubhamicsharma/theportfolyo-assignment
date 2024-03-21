'use client'


import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import Link from 'next/link'; // Import Link from next/link

const SocialLinks2 = ({ data }) => {
  return (
    <div className="st-hero-social-links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      {data.map((item, index) => (
        <Link legacyBehavior href={item.url} key={index}>
          <a className="st-social-btn">
            <span className="st-social-icon"><Icon icon={`fa6-brands:${item.platform.toLowerCase()}`} /></span>
          </a>
        </Link>
      ))}
    </div>
  );
}

SocialLinks2.propTypes = {
  data: PropTypes.array,
}

export default SocialLinks2;
