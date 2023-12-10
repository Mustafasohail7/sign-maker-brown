import './DropDown.css'

import logo from '../../assets/logo.svg'

import DropDownItem from './DropDownItem'

const DropDown = ({dropDown,setDropDown,options}) => {

  return (
    <>
        <div className={`navbar-dropdown ${dropDown ? 'open' : ''}`}>
            <div className='dropdown-logo-place'>
              <img src={logo} className='dropdown-logo'/>
            </div>
            <ul className="navbar-options-dropdown">
                {options.map((option) => {
                  {/* console.log('from dropdown',option.link===path) */}
                  return  <DropDownItem key={option.id} opt={option} setDropDown={setDropDown}/>
                })}
            </ul>
        </div>
    </>
  )
}

export default DropDown
