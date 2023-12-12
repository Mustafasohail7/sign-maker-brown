import HeaderMain from "./HeaderMain"
import Banner from './Banner/Banner'

const BannerMain = ({order,setCartOpen}) => {
  return (
    <div className='banner-bg-container'>
      <div className="banner-bg" />
      <div className="banner-bg-content">
        <HeaderMain order={order} setCartOpen={setCartOpen}/>
        <Banner/>
      </div>
    </div>
  )
}

export default BannerMain
