import { useEffect, useState } from "react";
import LogementsUtils from "../datas/LogementsUtils";
import { NavLink } from 'react-router-dom';

function DisplayLogements() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [logements, setLogements] = useState([])

  useEffect(() => {
    async function fetchLogements() {
      setDataLoading(true);
      try {
        const lgmt = await LogementsUtils.getAllLogements();
        setLogements(lgmt);
      } catch (err) {
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLogements();
  }, []);

  if (error) {
    return <div>Erreur lors du chargement des logements</div>
  }

  return (
    <div>
      <h2>Logements</h2>
      <ul>
        {isDataLoading ? (
          <li>Chargement en cours...</li>
        ) : (logements.map((logement) => (
          <li key={logement.id}>
            <NavLink to={`/logement/${logement.id}`} style={{
              textDecoration: 'none',
              color: 'inherit'
            }}>
              {logement.title} - {logement.rating}
            </NavLink>
          </li>
        )))}
      </ul>
    </div>
  );
}



export default DisplayLogements;