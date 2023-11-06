import { useEffect, useState } from 'react';
import HousingUtils from '../datas/HousingUtils';
import '../styles/HousingContainer.scss';
import HousingsCard from './HousingsCard';
import Loader from './Loader';
import PropTypes from 'prop-types';

function DisplayHousings() {
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    async function fetchHousings() {
      setDataLoading(true);
      try {
        const housing = await HousingUtils.getAllHousings();
        setHousings(housing);
      } catch (err) {
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchHousings();
  }, []);

  if (error) {
    return <div>Erreur lors du chargement des logements</div>;
  }

  return (
    <div className="housing-container">
      {isDataLoading ? (
        <Loader />
      ) : (
        <HousingList housings={housings} />
      )}
    </div>
  );
}

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
    return () => {};
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

export default DisplayHousings;
