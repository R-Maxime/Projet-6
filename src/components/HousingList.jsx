import { useEffect, useState } from 'react';
import HousingsCard from './HousingsCard';
import PropTypes from 'prop-types';

function HousingList({ housings }) {
  const [displayedHousings, setDisplayedHousings] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < housings.length) {
      const timer = setTimeout(() => {
        setDisplayedHousings((prevHousings) => [
          ...prevHousings,
          housings[currentIndex]
        ]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
    return () => { };
  }, [currentIndex, housings]);

  return (
    <>
      {displayedHousings.map((housing, index) => (
        <HousingsCard
          key={`${housing.id}-${index}`}
          id={housing.id}
          img={housing.cover}
          title={housing.title}
        />
      ))}
    </>
  );
}

HousingList.propTypes = {
  housings: PropTypes.array.isRequired
};

export default HousingList;
