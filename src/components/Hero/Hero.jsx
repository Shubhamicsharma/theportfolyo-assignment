'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import parser from 'html-react-parser';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { Link as ScrollLink } from 'react-scroll';
import WaterWave from 'react-water-wave';
import './Hero.scss';
import { json } from 'react-router-dom';

import image from '../../../public/Images/background/hero-bg-1.jpg'

const Hero = ({ data, socialData }) => {
  const { title, name, avatar : {url} } = data;
  let imgLink = data.avatar.url;
  imgLink = imgLink.toString();

useEffect(() => {
  if (typeof window !== 'undefined') {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
}, []);

  return (
    <section id="home" className='st-hero-wrap'>
      <div className="st-hero st-bg st-style1" style={{ backgroundImage: 'url("/images/background/hero-bg.jpg")' }}>
        <div className="st-height-b80 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Hello I&apos;m</h3>
            {name && <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{parser(name)}</h1>}
            {title && <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{title}</h2>}
            <div className='st-hero-btn' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              <ScrollLink className= "st-btn st-style1 st-color1" to="contact">
                Hire Me
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <Image
          src={url}
          alt="Hero"
          // width={100}
          // height={100}
          layout="fill"
          // objectFit="cover"
          // className="st-hero-img"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
        />
        <div className='st-social-group' data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
          <SocialLinks data={socialData} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
