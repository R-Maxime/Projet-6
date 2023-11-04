import PropTypes from 'prop-types';
import '../styles/Rate.scss';

function Rate({ rate }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<i key={i} className="fa-solid fa-star active"></i>);
    } else {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
  }
  return (
    <div className='stars'>{stars}</div>
  );
}

export default Rate;

Rate.propTypes = {
  rate: PropTypes.number.isRequired
};