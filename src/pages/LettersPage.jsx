import Header from '../components/HeaderMain'
import SignPreview from '../components/SignPreview/SignPreview'
import Setup from '../components/Setup/Setup'

const LettersPage = ({isMobile,setOrder,order,setCartOpen}) => {
  return (
    <>
        <Header setCartOpen={setCartOpen} order={order}/>
        <SignPreview isMobile={isMobile} setOrder={setOrder}/>
        <Setup isMobile={isMobile}/>
    </>
  )
}

export default LettersPage
