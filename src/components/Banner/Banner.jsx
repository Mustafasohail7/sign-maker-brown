import './Banner.css'

import banner from '../../assets/banner-img.jpg'

import Timer from './Timer'

const Banner = () => {

    const expiryDate = '2023-12-31T23:59:59';

  return (
    <div className='banner-div'>
      <div className='banner-container'>
        <h1 className='banner-title'>black week - save 20%</h1>
        <div className='lamp-container'>
            <button className='lamp'>build your own lamp</button>
        </div>
        <div className='date-timer-container'>
            <div className='date-timer-text'>
                <h3>black week ends on</h3>
                <h5>save 20% on youre entire order</h5>
            </div>
            <Timer expiryDate={expiryDate} />
        </div>
      </div>
      <div className='banner-img-container'>
        <div className='banner-img-boundary'>
            <div className='banner-img-dotted-boundary'>
                <div className='banner-img-place'>
                    <img src={banner} className='banner-img' alt='lady smiling' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
