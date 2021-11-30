import axios from "../axios/axios";

export const defautService = {
  createDefaut,
  getAllDefauts,
  getDefautByPieceName,
  updateDefaut,
  deleteDefautById,
};
function createDefaut(cuve) {
  return axios
    .post("/defaut/create", cuve)
    .then(handleRegisterResponse)
    .then((Defaut) => Defaut);
}
function getAllDefauts() {
  return axios
    .get("/defaut/getAllDefaut")
    .then(handleRegisterResponse)
    .then((Defauts) => Defauts);
}
function getDefautByPieceName(pieceName) {
  return axios
    .get("/Defaut/getDefautByPieceName/" + pieceName)
    .then(handleRegisterResponse)
    .then((Defaut) => Defaut);
}

function deleteDefautById(defautName) {
  return axios
    .delete("/defaut/deleteDefautById/" + defautName)
    .then(handleRegisterResponse)
    .then((Defaut) => Defaut);
}
function updateDefaut(data) {
  return axios
    .put("/defaut/updateDefaut", data)
    .then(handleRegisterResponse)
    .then((Defaut) => Defaut);
}

function handleRegisterResponse(response) {
  const { data } = response;
  if (response.status === 401) {
    const error = (data && data.message) || response.statusText;
    console.log("handleRegisterResponse => error");
    console.log(error);
    return Promise.reject(error);
  }

  return data;
}
