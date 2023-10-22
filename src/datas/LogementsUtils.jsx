import Logements from "./logements.json";
import { LogementsCache } from "./LogementsCache";

LogementsCache.LOGEMENT_BY_ID = {};
LogementsCache.LOGEMENT_BY_TITLE = {};
LogementsCache.LOGEMENTS_BY_TAG = {};

function getAllLogements() {
  return Logements;
}

function getLogementById(id) {
  const data = LogementsCache.LOGEMENT_BY_ID[id]
    || (LogementsCache.LOGEMENT_BY_ID[id] = Logements.find((logement) => logement.id === id));
  return data
}

function getLogementByTitle(title) {
  const data = LogementsCache.LOGEMENT_BY_TITLE[title]
    || (LogementsCache.LOGEMENT_BY_TITLE[title] = Logements.find((logement) => logement.title === title));
  return data
}

function getLogementsByTag(tag) {
  const data = LogementsCache.LOGEMENTS_BY_TAG[tag]
    || (LogementsCache.LOGEMENTS_BY_TAG[tag] = Logements.filter((logement) => logement.tags.includes(tag)));
  return data
}

export default {
  getAllLogements,
  getLogementById,
  getLogementByTitle,
  getLogementsByTag,
};