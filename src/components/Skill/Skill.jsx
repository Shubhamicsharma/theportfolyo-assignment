import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const Skill = ({ data }) => {
  const { about: {description}, about: {subTitle}, skills } = data;
  const skillsList = skills.filter(item => item.enabled === true);
  skills.sort((a, b) => a.sequence - b.sequence);
  let delay = 100;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{subTitle}</h2>
                <div className="st-skill-subtitle">{description}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
                
              {skillsList.slice(0,6).map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos='fade-up'
                  data-aos-duration = '500'
                  data-aos-delay={delay+=100}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.name}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.percentage}
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress={element.percentage}>
                    <div className="st-progressbar-in "></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
