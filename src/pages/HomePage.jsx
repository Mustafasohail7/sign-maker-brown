import BannerMain from '../components/BannerMain'
import Products from '../components/Products/Products'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const HomePage = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}    

  return (
    <div>
        <BannerMain/>
        <div style={{backgroundColor: 'var(--secondary-bg-color)'}}>
          <Products/>
          <Slider {...settings}>
            <div style={{border: '1px solid black'}}>
                hello
            </div>
            <div>
                hi
            </div>
          </Slider>
        </div>
    </div>
  )
}

export default HomePage
