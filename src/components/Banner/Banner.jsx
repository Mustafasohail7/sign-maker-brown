import './Banner.css'

import {useRef,useState} from 'react'

import banner_video from '../../assets/banner_video.mp4'
import arc from '../../assets/arc.svg'
import { FaPlay,FaPause } from 'react-icons/fa'

import Timer from './Timer'

const Banner = () => {

  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

    const expiryDate = '2023-12-31T23:59:59';

  return (
    <div className='banner-div'>
      <div className='banner-container'>
        <div className='banner-arc-container'>
          <div className='banner-arc-place'>
            <img src={arc} className='banner-arc'/>
          </div>
          <h1 className='banner-title'>black week <br></br> - save 20%</h1>
        </div>
        <div className='lamp-timer-container'>
          <div className='lamp-container'>
              <button className='lamp'>build your own lamp</button>
          </div>
          <div className='date-timer-container'>
              <div className='date-timer-text'>
                  <h3>black week ends on:</h3>
                  <h5>save 20% on youre entire order</h5>
              </div>
              <Timer expiryDate={expiryDate} />
          </div>
        </div>
      </div>
      <div className='banner-img-container'>
        <div className='banner-img-boundary'>
            <div className='banner-img-dotted-boundary'>
                <div className='banner-img-place'>
                    <video
                      ref={videoRef}
                      src={banner_video}
                      alt="Banner Video"
                      className={`banner-img ${isPaused ? '' : 'hide'}`}
                    />
                    <button onClick={togglePause}
                     className="video-play-btn">
                      {isPaused ? <FaPlay/> : <FaPause/> }
                    </button>
                    {/* <img src={banner} className='banner-img' alt='lady smiling' /> */}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
