import './Products.css'

import { useState } from 'react'

import left_arrow from '../../assets/left-arrow.svg'
import right_arrow from '../../assets/right-arrow.svg'

import product_1 from '../../assets/product_1.png'
import product_2 from '../../assets/product_2.png'
import product_3 from '../../assets/product_3.png'
import product_4 from '../../assets/product_4.png'
import product_5 from '../../assets/product_5.png'

import ProductCarousel from './ProductCarousel'

const Products = () => {

    const products = [
        {id:0, name: 'magnetic-sign', price: 20, image:product_1},
        {id:1, name: 'I <3 U', price: 55, image:product_2},
        {id:2, name: 'home', price: 67, image:product_3},
        {id:3, name: 'love', price: 32, image:product_4},
        {id:4, name: 'kitchen', price: 91, image:product_5},
    ]

  return (
    <div className='products-div'>
        <div className='products-container'>
            <div className='products-heading-container'>
                <h2 className='products-heading'>our products</h2>
            </div>  
            <div className='products-products-container'>
                <div className='products-items-container'>
                    <ProductCarousel products={products} />
                </div>
                <div className='products-arrows-container'>
                    {/* <IoMdArrowBack className='products-arrow' />
                    <IoMdArrowForward className='products-arrow' /> */}
                    <img src={left_arrow} className='products-arrow' />
                    <img src={right_arrow} className='products-arrow' />
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Products
