import { useEffect } from 'react'
import './CartOverlay.css'

import { RxCross2 } from 'react-icons/rx'

import arrow from '../../assets/right-arrow.svg'

const CartOverlay = ({order,cartOpen,setCartOpen}) => {

    useEffect(() => {
        if(cartOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    })

    console.log(cartOpen)

  return (
    <div className={`cart-overlay-div ${cartOpen ? 'open' : ''}`}>
        <div className='cart-overlay-container'>
            <div className='cart-overlay-header'>
                <p className='cart-overlay-heading'>shopping cart</p>
                <div className='cart-overlay-cross' 
                    onClick={() => setCartOpen(false)}
                ><RxCross2/></div>
            </div>
            <div className='cart-overlay-orders-container'>

            </div>
            <div className='cart-overlay-end'>
                <div className='proceed-btn-container'>
                    <button className='proceed-btn'>proceed</button>
                </div>
                <div className='continue-shopping'>
                    <img className='contine-shopping-arrow' src={arrow} />
                    <p className='continue-shopping-text'>continue shopping</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartOverlay
