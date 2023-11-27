const DropDownItem = ({name,setDropDown}) => {

    return (
      <li className="nav-item-dropdown" onClick={()=>setDropDown(false)}>
          {/* <Link to={NavBarData.link} smooth={true} duration={NavBarData.duration} offset={-400} onClick={handleClick}> */}
          {name}
      </li>
    )
  }
  
  export default DropDownItem
  