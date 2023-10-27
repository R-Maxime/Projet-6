import { useEffect, useState } from "react";
import HousingUtils from "../datas/HousingUtils";
import '../styles/HousingContainer.scss';
import HousingsCard from "./HousingsCard";

function DisplayHousings() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [housings, setHousings] = useState([])

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
    return <div>Erreur lors du chargement des logements</div>
  }

  return (
    <div>
      <ul>
        {isDataLoading ? (
          <li>Chargement en cours...</li>
        ) :
          (
            <div className="housing-container">
              {
                housings.map((housing, index) => (
                  <HousingsCard
                    key={`${housing.id}-${index}`}
                    id={housing.id}
                    img={housing.cover}
                    title={housing.title}
                  />
                ))
              }
            </div>
          )
        }
      </ul>
    </div>
  );
}



export default DisplayHousings;