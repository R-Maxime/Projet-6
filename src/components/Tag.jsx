import PropTypes from 'prop-types';
import '../styles/Tag.scss';


function Tag({ tag }) {
  return (
    <div className="tag">
      {tag}
    </div>
  )
}

export default Tag

Tag.propTypes = {
  tag: PropTypes.string.isRequired
};