import HeaderMain from "./HeaderMain"
import Banner from './Banner/Banner'

const BannerMain = () => {
  return (
    <div className='banner-bg-container'>
      <div className="banner-bg" />
      <div className="banner-bg-content">
        <HeaderMain/>
        <Banner/>
      </div>
    </div>
  )
}

export default BannerMain
