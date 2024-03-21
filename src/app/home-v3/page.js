'use client'
import About from '@/components/About/About';
import Iconbox from '@/components/Iconbox/Iconbox';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skill from '@/components/Skill/Skill';
import Resume from '@/components/Resume/ResumeSection';
import PortfolioSection from '@/components/Portfolio/PortfolioSection';
import Review from '@/components/Review/ReviewSection';
import Contact from '@/components/Contact/Contact';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Preloader from '@/components/Preloader/Preloader';
import Hero3 from '@/components/Hero/Hero3';
import Blog from '@/components/Blog/BlogSection';

const Page = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      setUsers(data.user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (

    <>
      {isLoading ? <Preloader /> : (
        <div>
        <CustomCursor />
        {users && (
          <div >
            <Header data = {users} />
            <Hero3 data={users.about} socialData={users.social_handles}/>
            <About data={users} data-aos="fade-right"/>
            <Iconbox data={users} data-aos="fade-right"/>
            <Skill data={users} data-aos="fade-right" />
            <Resume data={users} />
            <PortfolioSection data={users} data-aos="fade-right" />
            <Review data={users} data-aos="fade-right"/>
            <Blog data={users} data-aos="fade-right"/>
            <Contact data={users} socialData={users.social_handles} />
  
          </div>
        )}
        <Footer />
      </div>
      )
      }
    </>


    
  );
}

export default Page;
