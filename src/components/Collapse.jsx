import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/Collapse.scss';

function Collapse({ items, itemType }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleCollapse}>
        <span>{itemType}</span>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up down' : 'fa-chevron-up up'}`}></i>
      </div>
      <div className={`collapse-list ${isOpen ? 'open' : ''}`}>
        <div className='collapse-list-content'>
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

export default Collapse;

Collapse.propTypes = {
  items: PropTypes.array.isRequired,
  itemType: PropTypes.string.isRequired
};
