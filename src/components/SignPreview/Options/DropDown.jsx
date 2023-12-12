import './DropDown.css'
import { useState } from 'react';

import caret from '../../../assets/caret-down.svg'

const Dropdown = ({ classname, options, setter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    if(setter) setter(option)
  }

  return (
    <div className={`dropdown ${classname}`}>
      <button onClick={toggleDropdown}>
        <span>{selectedOption.name}</span> <img src={caret} />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <p key={index} onClick={()=>handleSelect(option)}>{option.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
