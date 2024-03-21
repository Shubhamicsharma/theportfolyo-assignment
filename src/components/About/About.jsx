import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import './About.scss'; // Import module stylesheet

const About = ({ data }) => {
  const { imgLink, about : {name}, about: {title}, about : {description}, details, cvPdf, about : {avatar: {url}}, about, email } = data;
  
  return (
    <section id="about" className='st-about-wrap'>
      <div className= 'st-height-b100 st-height-lg-b80 '></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className= 'st-about-img-wrap'>
              <div className= 'st-about-img st-bg' style={{ backgroundImage: `url(${url})`}} data-aos="fade-right" data-aos-duration="800" data-aos-delay="400"></div>
            </div>
            <div className= 'st-height-b0 st-height-lg-b30' ></div>
          </div>
          <div className="col-lg-6">
            <div className= 'st-vertical-middle'>
              <div className= 'st-vertical-middle-in'>
                <div className= {`st-text-block st-style1`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                  {name && <h2 className= 'st-text-block-title'>Hi There! I&apos;m {name}</h2>}
                  {title && <h4 className= 'st-text-block-subtitle'>{title}</h4>}
                  {description && <div className= 'st-text-block-text'>
                    <p>{description}</p>
                  </div>}
                  <ul className= 'st-text-block-details st-mp0' >
                      {about.phoneNumber && <li >
                        <span>Phone</span> : <span>{about.phoneNumber}</span>
                      </li>}
                      {email && <li >
                        <span>Email</span> : <span>{email}</span>
                      </li>}
                      {about.address && <li >
                        <span>From</span> : <span>{about.address}</span>
                      </li>}
                      {about.exp_year && <li >
                        <span>Experience</span> : <span>{about.exp_year} Years</span>
                      </li>}
                      {about.quote && <li >
                        <span>Quote</span> : <span>{about.quote}</span>
                      </li>}
                  </ul>
                  <div className= 'st-text-block-btn'>
                    <a className = 'st-btn st-style1 st-color1' href= '/images/Resume.pdf' download>Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  data: PropTypes.object
}

export default About;
