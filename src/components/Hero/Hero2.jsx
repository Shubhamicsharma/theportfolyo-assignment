'use client'

import PropTypes from 'prop-types';
import React from 'react';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';

const Hero2 = ({ data, socialData }) => {
  const { name, subTitle, title } = data;
  console.log(socialData);
  return (
    <section id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: 'url("/images/background/hero-bg.jpg")' }}>
      <div className="container">
        <div className="st-hero-text">
          {name && <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I am <span>{perser(name)}</span></h1>}
          {subTitle && title && <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">I am a {title}. {perser(subTitle)}</p>}
          <SocialLinks2 data={socialData} data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" />
        </div>
      </div>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </section>
  )
}

Hero2.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};


export default Hero2;
