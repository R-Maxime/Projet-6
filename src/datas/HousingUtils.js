const Housings = [];

async function loadHousings() {
  try {
    const response = await fetch(new URL('/src/datas/housings.json', import.meta.url));
    if (!response.ok) {
      throw new Error('HTTP Error ' + response.status);
    }
    const data = await response.json();
    Housings.length = 0;
    Housings.push(...data);
  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err)
  }
}

async function getAllHousings() {
  if (!Housings.length) {
    await loadHousings();
  }

  return Housings;
}

async function getHousingById(id) {
  if (!Housings.length) {
    await loadHousings();
  }
  const data = Housings.find((housing) => housing.id === id);
  return data;
}


export default {
  Housings,
  getAllHousings,
  getHousingById,
  loadHousings
};