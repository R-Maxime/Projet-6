import { Navigate, useParams } from 'react-router-dom';
import HousingUtils from "../../datas/HousingUtils";
import { useEffect, useState } from 'react';

function Housings() {
  const housingId = useParams().id;
  const [housing, setHousing] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

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

  if (!housing) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      {isDataLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.description}</p>
          <img
            src={housing.cover}
            alt={housing.title}
            height={500}
            style={{
              display: "block",
              margin: "25px auto",
              padding: "15px",
              backgroundColor: "#F9F9FC",
              borderRadius: "30px",
            }}
          />
        </div>
      )}
    </div>
  );

}

export default Housings