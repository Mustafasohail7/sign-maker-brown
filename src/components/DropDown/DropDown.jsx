import './DropDown.css'

import DropDownItem from './DropDownItem'

const DropDown = ({dropDown,setDropDown,options}) => {
  return (
    <>
        <div className={`navbar-dropdown ${dropDown ? 'open' : ''}`}>
            <ul className="navbar-options-dropdown">
                {options.map((option) => (
                    <DropDownItem key={option.id} name={option.name} setDropDown={setDropDown}/>
                ))}
            </ul>
        </div>
    </>
  )
}

export default DropDown
