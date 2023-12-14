import './BestSeller.css'

import { useRef } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import arrow from '../../assets/arrow-left.svg'
import arrow2 from '../../assets/right-arrow.svg'
import waves from '../../assets/waves.svg'
import product_1 from '../../assets/product_1.png'
import product_2 from '../../assets/product_2.png'
import product_3 from '../../assets/product_3.png'
import product_4 from '../../assets/product_4.png'
import product_5 from '../../assets/product_5.png'

const BestSeller = () => {

    const sliderRef = useRef(null)

    const products = [
        {id:0, name: 'magnetic-sign', price: 20, image:product_1},
        {id:1, name: 'I <3 U', price: 55, image:product_2},
        {id:2, name: 'home', price: 67, image:product_3},
        {id:3, name: 'love', price: 32, image:product_4},
        {id:4, name: 'kitchen', price: 91, image:product_5},
        {id:5, name: 'magnetic-sign', price: 20, image:product_1},
        // {id:6, name: 'I <3 U', price: 55, image:product_2},
        // {id:7, name: 'home', price: 67, image:product_3},
    ]

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 2,
        slidesPerRow: 1,
        // slidesToScroll: 2,
        // centerMode: true,
        // rtl: true,
        responsive: [
            {
                breakpoint: 785,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    // slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    rows: 1,
                    centerPadding: "30px"
                }
            }
        ]
    }

    const handlePrev = () => {
        sliderRef.current.slickPrev()
    }

    const handleNext = () => {
        sliderRef.current.slickNext()
    }

  return (
    <div className='best-seller-div'>
        <div className='gallery-waves-container seller'>
            <div className='gallery-waves-place'>
                <img src={waves} className='gallery-waves' />
            </div>
            <div className='gallery-waves-place'>
                <img src={waves} className='gallery-waves' />
            </div>
        </div>
        <div className='best-seller-container'>
            <p className='best-seller-heading'>our best seller</p>
            <div className='best-seller-arrow-container'>
                <div className='arrow-div seller' onClick={handlePrev}>
                    <img src={arrow} className='arrow left' />
                </div>
                <Slider {...settings} className="best-seller-carousel" ref={sliderRef}>
                {products.map((product) => (
                    <div key={product.id} className='seller-product-item-div'>
                        <div className='seller-product-item'>
                            <div className='seller-item-img-place'>
                                <img src={product.image} 
                                className='seller-item-img' alt='product' />
                            </div>
                            <div className='seller-item-info'>
                                <p className='seller-item-name'>{product.name}</p>
                                <p className='seller-item-price'>$ {product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
                <div className='seller-arrows'>
                    <img src={arrow2} className='seller-arrow left' onClick={handlePrev}/>
                    <img src={arrow2} className='seller-arrow right' onClick={handleNext}/>
                </div>
                <div className='arrow-div seller' onClick={handleNext}>
                    <img src={arrow} className='arrow right' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSeller
