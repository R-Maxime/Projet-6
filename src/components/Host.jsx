import PropTypes from 'prop-types';
import '../styles/Host.scss';

function Host({ host }) {
  return (
    <div className='host'>
      <div className="host-name">{host.name}</div>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default Host;

Host.propTypes = {
  host: PropTypes.object.isRequired
};
