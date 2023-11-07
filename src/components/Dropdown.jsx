import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Dropdown.scss';

function Dropdown({ items, itemType }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        <span>{itemType}</span>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up down' : 'fa-chevron-up up'}`}></i>
      </div>
      <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
        <div className='dropdown-list-content'>
          {items.map((item, index) => (
            <div
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  itemType: PropTypes.string.isRequired
};
