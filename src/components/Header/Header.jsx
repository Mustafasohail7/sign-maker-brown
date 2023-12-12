import './Header.css'

import { useState, useEffect } from 'react'

// import { IoSearchOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { BsCart } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = ({order,options,setDropDown,path,setCartOpen}) => {

    const navigate = useNavigate()

    const [selected,setSelected] = useState(path[0].id)
    const home = path[0].id === 0

    const toggleMenu = () => {
        setDropDown(prev => !prev)
    }

    const handleResize = () => {
        if(window.innerWidth > 740) {
            setDropDown(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })

    const handleClick = (id) => {
        setSelected(id)
        navigate(options[id].link)
    }

    const handleCartOpen = () => {
        setCartOpen(prev => !prev)
        console.log('cart open')
        // setCartOpen(true)
    }
    
  return (
    <div className='header-div'>
        <div className={`header-container ${home ? 'transparent' : ''}`}>
            <div className='header-left'>
                <div className='toggle-bar' onClick={toggleMenu}>
                    <FaBarsStaggered/>
                </div>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
            </div>
            <div className='header-cart-container header-right'>
                <div className='option-flex'>
                    {options.map(option => (
                        <div key={option.id} 
                        className={`option ${selected === option.id ? 'selected' : ''}`}
                        onClick={()=>handleClick(option.id)}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
                <div className={`cart-container ${home ? 'transparent' : ''}`}
                    // onClick={()=>setOverlayActive(true)}
                >
                    <div className="search-bar-container">
                        {/* <div className='search-bar-icon'>
                            <IoSearchOutline/>
                            <div className='search-text'>Search...</div>
                        </div> */}
                        <input type="text" className='search-bar' 
                        placeholder="Search..."
                        />
                    </div>
                    <div className='cart-icon-container'
                        onClick={handleCartOpen}
                    >
                        <BsCart className='cart'/>
                        {/* <div className='cart-count'>{orders.length}</div> */}
                        <div className='cart-count'>{order.length}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
