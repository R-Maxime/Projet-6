import PropTypes from 'prop-types';
import '../styles/BannerContainer.scss'

export default function BannerContainer({ img, altText, text }) {
  return (
    <div className="image-container">
      <img src={img} alt={altText} />
      <p className="image-container-text">{text}</p>
    </div>
  );
}

BannerContainer.propTypes = {
  img: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
};