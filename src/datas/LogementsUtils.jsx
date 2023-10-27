import { Logements } from "./Logements";


async function loadLogements() {
  try {
    const response = await fetch('/src/datas/logements.json');
    console.log('Chargement des données...')
    if (!response.ok) {
      throw new Error('HTTP Error ' + response.status);
    }
    const data = await response.json();
    Logements.length = 0;
    Logements.push(...data);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err)
  }
}

async function getAllLogements() {
  if (!Logements.length) {
    await loadLogements();
  }

  return Logements;
}

async function getLogementById(id) {
  if (!Logements.length) {
    await loadLogements();
  }
  const data = Logements.find((logement) => logement.id === id);
  return data;
}


export default {
  getAllLogements,
  getLogementById,
  loadLogements
};