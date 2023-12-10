import BannerMain from '../components/BannerMain'
import Products from '../components/Products/Products'
import Gallery from '../components/Gallery/Gallery'
import CustomerVideos from '../components/CustomerVideos/CustomerVideos'
import Testimonials from '../components/Testimonials/Testimonials'
import Objects from '../components/Objects/Objects'
import Blog from '../components/Blog/Blog'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

const HomePage = ({isMobile}) => {  

  return (
    <div>
        <BannerMain/>
        <div style={{backgroundColor: 'var(--secondary-bg-color)'}}>
          <Products/>
          <Gallery isMobile={isMobile}/>
          <CustomerVideos isMobile={isMobile} />
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
