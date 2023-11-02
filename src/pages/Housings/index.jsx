import { Navigate, useParams } from 'react-router-dom';
import HousingUtils from "../../datas/HousingUtils";
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Carousel from '../../components/Carousel';

function Housings() {
  const housingId = useParams().id;
  const [housing, setHousing] = useState({})
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    async function fetchHousing() {
      setDataLoading(true);
      try {
        const lgmt = await HousingUtils.getHousingById(housingId);
        setHousing(lgmt);
      } catch (err) {
        console.error(err);
      } finally {
        setDataLoading(false);
      }
    }
    fetchHousing();
  }, [housingId]);

  if (isDataLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (!housing) {
    return <Navigate to="/404" />;
  }

  return (
    <Carousel pictures={housing.pictures} />
  );
}

export default Housings