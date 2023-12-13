import './Setup.css'

import {useState} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import setup_vid from '../../assets/banner_video.mp4'

const Setup = ({isMobile}) => {

    const [index,setIndex] = useState(0)

    var settings = {
        className: "setup-carousel",
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        rtl: true,
        afterChange: (current) => {
            setIndex(current)
        }
    }

    const setup_vids = [
        {id:0, name: 'video 1', src: setup_vid},
        {id:1, name: 'video 2', src: setup_vid},
        {id:2, name: 'video 3', src: setup_vid},
    ]

  return (
    <div className='how-to-setup-div'>
      <div className='how-to-setup-container'>
        <div className='setup-heading-container'>
            <p className='setup-heading'>How to setup?</p>
        </div>
        <div className='setup-slider-container'>
            <Slider {...settings} 
            // className='setup-carousel'
            >
                {setup_vids.map((vid) => (
                    <div key={vid.id} 
                    className={`setup-item-div ${vid.id===index ? 'center' : 'side'}`}
                    >
                        <div className='setup-item'>
                            <video
                                // ref={video.id===1 ? videoRef : null}
                                src={vid.src}
                                alt="Customer Video"
                                className='setup-item-video'
                                // className={`banner-img ${isPaused ? '' : 'hide'}`}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Setup
