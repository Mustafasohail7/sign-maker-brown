import './Products.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import { useRef } from 'react'

import left_arrow from '../../assets/left-arrow.svg'
import right_arrow from '../../assets/right-arrow.svg'
import waves from '../../assets/waves.svg'

import product_1 from '../../assets/product_1.png'
import product_2 from '../../assets/product_2.png'
import product_3 from '../../assets/product_3.png'
import product_4 from '../../assets/product_4.png'
import product_5 from '../../assets/product_5.png'


const Products = () => {

    const sliderRef = useRef()

    const products = [
        {id:0, name: 'magnetic-sign', price: 20, image:product_1},
        {id:1, name: 'I <3 U', price: 55, image:product_2},
        {id:2, name: 'home', price: 67, image:product_3},
        {id:3, name: 'love', price: 32, image:product_4},
        {id:4, name: 'kitchen', price: 91, image:product_5},
    ]

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    } 

    const handleNext = () => {
        if(sliderRef.current){
            sliderRef.current.slickNext()
        }
    }

    const handlePrev = () => {
        if(sliderRef.current){
            sliderRef.current.slickPrev()
        }
    }

  return (
    <div className='products-div'>
        <div className='waves-container'>
            <div className='waves-place'>
                <img src={waves} className='waves' alt='waves' />
                {/* <img src={waves} className='waves' alt='waves' /> */}
            </div>
            <div className='waves-place'>
                <img src={waves} className='waves' alt='waves' />
                {/* <img src={waves} className='waves' alt='waves' /> */}
            </div>
        </div>
        <div className='products-container'>
            <div className='products-heading-container'>
                <h2 className='products-heading'>our products</h2>
            </div>  
            <div className='products-products-container'>
                <div className='products-items-container'>
                    <Slider ref={sliderRef} {...settings} className="products-carousel">
                        {products.map((product) => (
                            <div key={product.id} className="product-item-div">
                                <div className='product-item'
                                // className={`product ${index === currentIndex ? 'active' : ''}`}
                                >
                                    <div className='product-item-img-place'>
                                        <img src={product.image} 
                                        className='product-item-img' alt='product' />
                                    </div>
                                    <div className='product-item-info'>
                                        <p className='product-item-name'>{product.name}</p>
                                        <p className='product-item-price'>$ {product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='products-arrows-container'>
                    {/* <IoMdArrowBack className='products-arrow' />
                    <IoMdArrowForward className='products-arrow' /> */}
                    <img src={left_arrow} className='products-arrow' onClick={handlePrev}/>
                    <img src={right_arrow} className='products-arrow' onClick={handleNext}/>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Products
