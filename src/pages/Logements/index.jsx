import { Navigate, useParams } from 'react-router-dom';
import logementsUtils from "../../datas/LogementsUtils";

function Logements() {
  const LogementId = useParams().id;
  const logement = logementsUtils.getLogementById(LogementId);
  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <img src={logement.cover} alt={logement.title} height={500} style={
        {
          display: "block",
          margin: "25px auto",
          padding: "15px",
          backgroundColor: "#F9F9FC",
          borderRadius: "30px",
        }
      } />
    </div>
  )
}

export default Logements