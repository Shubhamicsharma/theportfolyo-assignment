import PropTypes from 'prop-types';
import React from 'react';
import './Hero.scss';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';

const Hero3 = ({ data, socialData }) => {
  const { name, subTitle, avatar: { url }, title } = data;
  return (
    <div id="home" className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: "url('/images/background/hero-bg-1.jpg')" }}>
      <div className="container">
        <div className="st-hero-text">
          {url && <div className="st-author" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <img src={url} alt="Author Image" />
          </div>}
          {name && <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I am <span>{perser(name)}</span></h1>}
          {title && subTitle && <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">I am a {title}. {perser(subTitle)}</p>}
          <SocialLinks2 data={socialData} />
        </div>
      </div>
    </div>
  )
}

Hero3.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};


export default Hero3;
