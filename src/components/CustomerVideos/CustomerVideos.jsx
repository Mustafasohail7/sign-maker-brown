import './CustomerVideos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import video_img from '../../assets/banner-img.jpg'

const CustomerVideos = ({isMobile}) => {

    const videos = [
        {id:0, image:video_img},
        {id:1, image:video_img},
        {id:2, image:video_img},
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null
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
                                        <img src={video.image} className='video-img' />
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
