import LogementsUtils from "../datas/LogementsUtils";
import { NavLink } from 'react-router-dom';

function DisplayLogements() {
  const logements = LogementsUtils.getAllLogements();

  return (
    <div>
      <h2>Logements</h2>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            <NavLink to={`/logement/${logement.id}`} style={{
              textDecoration: 'none',
              color: 'inherit'
            }}>
              {logement.title} - {logement.rating}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default DisplayLogements;