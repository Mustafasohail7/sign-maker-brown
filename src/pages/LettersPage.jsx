import Header from '../components/HeaderMain'
import SignPreview from '../components/SignPreview/SignPreview'
import Setup from '../components/Setup/Setup'
import BestSeller from '../components/BestSeller/BestSeller'
import Gallery from '../components/Gallery/Gallery'
import BannerLetters from '../components/BannerLetterrs/BannerLetters'
import Products from '../components/Products/Products'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import FAQ from '../components/FAQ/FAQ'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const LettersPage = ({isMobile,setOrder,order,setCartOpen}) => {
  return (
    <>
        <Header setCartOpen={setCartOpen} order={order}/>
        <SignPreview isMobile={isMobile} setOrder={setOrder}/>
        <Setup isMobile={isMobile}/>
        <BestSeller isMobile={isMobile} />
        <Gallery isMobile={isMobile} />
        <BannerLetters isMobile={isMobile} />
        <Products isMobile={isMobile} />
        <Testimonials isMobile={isMobile} />
        <Blog isMobile={isMobile} />
        <FAQ isMobile={isMobile} />
        <NewsLetter isMobile={isMobile} />
    </>
  )
}

export default LettersPage
