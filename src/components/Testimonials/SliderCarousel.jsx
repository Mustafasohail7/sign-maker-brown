
import Slider from "react-slick";

import './SliderCarousel.css';

const SliderCarousel = () => {


    const reviews = [

    ]

    const settings = {
        dots: true,
        //   infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }


    return (
        <Slider {...settings} className="slider-container">
          <div className="slider-item">
            1
          </div>
          <div className="slider-item">
            2
          </div>
          <div className="slider-item">
            3
          </div>
          <div className="slider-item">
            4
          </div>
          <div className="slider-item">
            5
          </div>
          <div className="slider-item">
            6
          </div>
          <div className="slider-item">
            7
          </div>
          <div className="slider-item">
            8
          </div>
          <div className="slider-item">
            9
          </div>
        </Slider>
    );
  }

export default SliderCarousel