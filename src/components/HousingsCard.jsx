import PropTypes from 'prop-types'
import '../styles/HousingCard.scss';
import { NavLink } from 'react-router-dom';

function HousingsCard({ id, img, title }) {
  return (
    <div className='card-wrapper'>
      <li key={id}>
        <NavLink to={`/housing/${id}`}>
          <img
            className="card-img"
            src={img}
            alt={title}
          />
          <h3 className="card-title">{title}</h3>
        </NavLink>
      </li>
    </div>
  )
}

HousingsCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HousingsCard;

