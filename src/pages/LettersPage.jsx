import Header from '../components/HeaderMain'
import SignPreview from '../components/SignPreview/SignPreview'
import Setup from '../components/Setup/Setup'
import BestSeller from '../components/BestSeller/BestSeller'
import Gallery from '../components/Gallery/Gallery'
import BannerLetters from '../components/BannerLetterrs/BannerLetters'

const LettersPage = ({isMobile,setOrder,order,setCartOpen}) => {
  return (
    <>
        <Header setCartOpen={setCartOpen} order={order}/>
        <SignPreview isMobile={isMobile} setOrder={setOrder}/>
        <Setup isMobile={isMobile}/>
        <BestSeller isMobile={isMobile} />
        <Gallery isMobile={isMobile} />
        <BannerLetters isMobile={isMobile} />
    </>
  )
}

export default LettersPage
