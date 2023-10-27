import { Navigate, useParams } from 'react-router-dom';
import logementsUtils from "../../datas/LogementsUtils";
import { useEffect, useState } from 'react';

function Logements() {
  const LogementId = useParams().id;
  const [logement, setLogement] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchLogement() {
      setDataLoading(true);
      try {
        const lgmt = await logementsUtils.getLogementById(LogementId);
        setLogement(lgmt);
      } catch (err) {
        console.error(err);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLogement();
  }, [LogementId]);

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      {isDataLoading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.description}</p>
          <img
            src={logement.cover}
            alt={logement.title}
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

export default Logements