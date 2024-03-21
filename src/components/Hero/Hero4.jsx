import PropTypes from 'prop-types';
import React from 'react';
import './Hero.scss';
import { Icon } from '@iconify/react';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';

const Hero4 = ({ data, socialData }) => {
  const { name, title, subTitle } = data;
  return (
    <section id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: 'url("/images/background/hero-bg-2.jpg")' }}>
      <div className="container">
        <div className="st-hero-text">
          {name && <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I am <span>{perser(name)}</span></h1>}
          {title && subTitle && <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">I am a {title}. {perser(subTitle)}</p>}
          <SocialLinks2 data={socialData} />
        </div>
      </div>
    </section>
  )
}

Hero4.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero4;
