import Slider from "react-slick";
import PropTypes from 'prop-types';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";

const Carousel = ({ useFor, data }) => {
  let { testimonials, sliderImages } = data;
  testimonials = testimonials.filter(item => item.enabled === true);
  const sliderSetting = {
    "infinite": true,
    "speed": 500,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "arrows": false,
    "responsive": [
      {
        "breakpoint": 991,
        "settings": {
          "slidesToShow": 2,
          "autoplay": true
        }
      },
      {
        "breakpoint": 767,
        "settings": {
          "slidesToShow": 1,
          "autoplay": true
        }
      }
    ]
  }

  if (useFor === "blog") {
    return (
      <Slider  {...sliderSetting}>
        {
          testimonials.map((element, index) => (
            <SingleBlog element={element} key={index} />
          ))
        }
      </Slider >
    )
  }else if (useFor === "review") {
    return (
      <Slider  {...sliderSetting}>
        {
          testimonials.map((element, index) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider >
    )
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {
          sliderImages.map((item, index) => (
            <img src={item.imgLink} key={index} alt="" />
          ))
        }
      </Slider>
    )
  } else {
    <Slider {...sliderSetting}>

    </Slider>
  }
}

Carousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
}

export default Carousel
