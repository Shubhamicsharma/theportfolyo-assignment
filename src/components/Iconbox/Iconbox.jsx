import PropTypes from 'prop-types'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Iconbox.scss';

const Iconbox = ({ data }) => {
  let { services } = data;
  services = services.filter(item => item.enabled === true);

  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {
            services.map((element, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos={element.effect ? element.effect : "zoom-out-up"} data-aos-duration={element.duration ? element.duration : "800"} data-aos-delay={element.delay ? element.delay : "200"}>
                <div className={`st-iconbox st-style1`}>
                  <div className="st-iconbox-icon">
                    <img src={element.image.url} alt="Icon" />
                  </div>
                  {element.name && <h2 className="st-iconbox-title">{element.name}</h2>}
                  {element.desc && <div className="st-iconbox-text">{element.desc}</div>}
                  {element.charge && <h2 className="st-iconbox-title mt-4">Price : {element.charge}</h2>}
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  )
}

Iconbox.propTypes = {
  data: PropTypes.object
}

export default Iconbox;
