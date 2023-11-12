import { useEffect, useState } from 'react';
import HousingUtils from '../datas/HousingUtils';
import '../styles/HousingContainer.scss';
import Loader from './Loader';
import HousingList from './HousingList';

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

export default DisplayHousings;
