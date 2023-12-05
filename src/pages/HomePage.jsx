import BannerMain from '../components/BannerMain'
import Products from '../components/Products/Products'
import Gallery from '../components/Gallery/Gallery'
import CustomerVideos from '../components/CustomerVideos/CustomerVideos'
import Testimonials from '../components/Testimonials/Testimonials'
import Objects from '../components/Objects/Objects'
import Blog from '../components/Blog/Blog'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const HomePage = ({isMobile}) => {

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
          {/* <Products/> */}
          <Gallery isMobile={isMobile}/>
          <CustomerVideos/>
          <Testimonials/>
          <Objects/>
          <Blog isMobile={isMobile}/>
          <FAQ/>
          <Footer/>
        </div>
    </div>
  )
}

export default HomePage
