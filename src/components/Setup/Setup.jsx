import './Setup.css'

import {useRef, useState} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import setup_vid from '../../assets/banner_video.mp4'
import play_btn from '../../assets/setup-play-button.svg'

const Setup = ({isMobile}) => {

    const videoRef = useRef(null)
    const [index,setIndex] = useState(0)
    const [isPaused,setIsPaused] = useState(true)

    var settings = {
        className: "setup-carousel",
        centerPadding: "200px",
        dots: true,
        leftArrow: false,
        rightArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // rtl: true,
        afterChange: (current) => {
            setIndex(current)
        },
        responsive: [
            {
                breakpoint: 785,
                settings: {
                    centerPadding: "50px",
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerPadding: "50px",
                }
            }
        ]
    }

    const setup_vids = [
        {id:0, name: 'video 1', src: setup_vid},
        {id:1, name: 'video 2', src: setup_vid},
        {id:2, name: 'video 3', src: setup_vid},
    ]

    const togglePause = (id) => {
        console.log('clicked bro')
        if (!isMobile && id===index) {
            console.log('we inside nigga')
            if (videoRef.current) {
                console.log('we got the ref')
                if (videoRef.current.paused) {
                    console.log('ayo we about to play')
                  videoRef.current.play();
                  setIsPaused(false)
                } else {
                  videoRef.current.pause();
                  setIsPaused(true)
                }
            }
        }
    }

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
                                ref={vid.id===index ? videoRef : null}
                            />
                            <button 
                            onClick={()=>togglePause(vid.id)}
                                className="video-play-btn-setup">
                                {isPaused && <img src={play_btn} alt='play button' />}
                            </button>
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
