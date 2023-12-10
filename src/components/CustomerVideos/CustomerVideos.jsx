import './CustomerVideos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import {FaPlay,FaPause} from 'react-icons/fa'

import {useState,useRef} from 'react'

// import video_img from '../../assets/banner-img.jpg'
import dummy_vid from '../../assets/banner_video.mp4'

const CustomerVideos = ({isMobile}) => {

    const videoRef = useState(null);
    const [isPaused, setIsPaused] = useState(true);

    const togglePause = (id) => {
        if (id===1) {
            if (videoRef.current) {
                if (isPaused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
                setIsPaused(!isPaused);
            }
        }
        
    };

    const videos = [
        {id:0, image:dummy_vid},
        {id:1, image:dummy_vid},
        {id:2, image:dummy_vid},
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null,
    }

  return (
    <div className='videos-div'>
        <div className='videos-container'>
            <p className='videos-heading'>videos from our customers</p>
            <div className='videos-holder'>
                {
                    isMobile ? (
                        <Slider {...settings} className="videos-carousel">
                            {videos.map((video) => (
                                <div  key={video.id} className='video-slider-div'>
                                    <div className='video-white-boundary'
                                    // className={`video-white-boundary ${video.id===1 ? 'center' : ''}`}
                                    >
                                        <div className='video-dotted-boundary'>
                                            <div className='video-holder'>
                                                <img src={video.image} className='video-img' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <>
                        {videos.map((video) => (
                            <div key={video.id} className={`video-white-boundary ${video.id===1 ? 'center' : ''}`}>
                                <div className='video-dotted-boundary'>
                                    <div className='video-holder'>
                                        {/* <img src={video.image} className='video-img' /> */}
                                        <video
                                            ref={video.id===1 ? videoRef : null}
                                            src={video.image}
                                            alt="Customer Video"
                                            className={`banner-img ${isPaused ? '' : 'hide'}`}
                                        />
                                        <button onClick={()=>togglePause(video.id)}
                                            className="video-play-btn">
                                            {video.id===1 ? (isPaused ? <FaPlay/> : <FaPause/>) : <FaPlay/>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default CustomerVideos
