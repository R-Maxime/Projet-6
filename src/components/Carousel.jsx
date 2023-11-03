
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../styles/Carousel.scss';


function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="carousel-container">
      {pictures.map((picture, index) => (
        index === currentIndex &&
        <div key={index} className='slider'>
          <i onClick={goToPrevious} className='fa-solid fa-chevron-left left-arrow'></i>
          <img
            key={index}
            src={picture}
            alt={`Image ${index + 1}`}
            className={`carousel-image`}
          />
          <span className='carousel-index'>{`${index + 1} / ${pictures.length}`}</span>
          <i onClick={goToNext} className='fa-solid fa-chevron-right right-arrow'></i>
        </div>
      ))}
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {
  pictures: PropTypes.array
};    