import { useNavigate,useLocation } from "react-router-dom"

const DropDownItem = ({opt,current,setDropDown}) => {

    const location = useLocation()
    const path = location.pathname

    const navigate = useNavigate()

    const handleClick = () => {
        setDropDown(false)
        navigate(opt.link)
    }

     return (
      <li className={`nav-item-dropdown ${opt.link===path ? 'selected' : ''}`} onClick={handleClick}>
          {/* <Link to={NavBarData.link} smooth={true} duration={NavBarData.duration} offset={-400} onClick={handleClick}> */}
          {opt.name}
      </li>
    )
  }
  
  export default DropDownItem
  