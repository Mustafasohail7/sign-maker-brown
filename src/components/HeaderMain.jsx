import Header from './Header/Header'
import DropDown from './DropDown/DropDown'

import { useLocation } from 'react-router-dom'

import {useState} from 'react'

const HeaderMain = ({orders,setOverlayActive}) => {

    const options = [
      {id:0, name: 'home', link: '/'},
      {id:1, name: '3D letters', link: '/3d-letters'},
      {id:2, name: 'LED lightbox', link: '/led-lightbox'},
      {id:3, name: 'acrylic letters', link: '/acrylic-letters'},
      {id:4, name: 'get a free quote', link:'/quote'}
  ]

    const location = useLocation()
    const currentPath = location.pathname

    const path = options.filter(option => option.link === currentPath)

    const [dropDown,setDropDown] = useState(false)

  return (
    <>
        <Header orders={orders} options={options} setDropDown={setDropDown} path={path} setOverlayActive={setOverlayActive}/>
        <DropDown options={options} dropDown={dropDown} setDropDown={setDropDown}/>
    </>
  )
}

export default HeaderMain
