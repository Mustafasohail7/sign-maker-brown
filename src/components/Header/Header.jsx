import './Header.css'

import { useState, useEffect } from 'react'

import { IoSearchOutline } from 'react-icons/io5'

import logo from '../../assets/logo.svg'
import { BsCart } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = ({orders,options,setDropDown,setOverlayActive}) => {

    const [selected,setSelected] = useState(0)

    useEffect(() => { 
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setDropDown(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[setDropDown])

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

  return (
    <div className='header-div'>
        <div className='header-container'>
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
                        onClick={() => setSelected(option.id)}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
                <div className='cart-container' 
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
                    <div className='cart-icon-container'>
                        <BsCart className='cart'/>
                        {/* <div className='cart-count'>{orders.length}</div> */}
                        <div className='cart-count'>0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
