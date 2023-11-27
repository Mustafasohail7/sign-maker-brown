import Header from './Header/Header'
import DropDown from './DropDown/DropDown'

import {useState} from 'react'

const HeaderMain = ({orders,setOverlayActive}) => {

    const [dropDown,setDropDown] = useState(false)

    const options = [
        {id:0, name: 'home'},
        {id:1, name: '3D letters'},
        {id:2, name: 'acrylic letters'},
        {id:3, name: 'LED display'},
    ]

  return (
    <>
        <Header orders={orders} options={options} setDropDown={setDropDown} setOverlayActive={setOverlayActive}/>
        <DropDown options={options} dropDown={dropDown} setDropDown={setDropDown}/>
    </>
  )
}

export default HeaderMain
