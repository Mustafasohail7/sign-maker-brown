import Header from '../components/HeaderMain'
import SignPreview from '../components/SignPreview/SignPreview'

const LettersPage = ({isMobile,setOrder,order,setCartOpen}) => {
  return (
    <>
        <Header setCartOpen={setCartOpen} order={order}/>
        <SignPreview isMobile={isMobile} setOrder={setOrder}/>
    </>
  )
}

export default LettersPage
