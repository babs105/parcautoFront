import axios from "../axios/axios";

export const vehiculeService = {
  createVehicule,
  getAllVehicules,
  getAllVehiculesDispo,
  getVehiculeByImmmatricule,
  deleteVehiculeByImmmatricule,
  updateVehicule,
  addParamVidange,
  addSuiviKm,
  changeStatutVehicule,
  // upload
};
function createVehicule(vehicule) {
  // const requestOptions = user;
  return axios
    .post("/vehicule/create", vehicule)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
// function createVehicule(formData) {
//   // const requestOptions = user;
//   return axios
//     .post("/photo/upload", formData)
//     .then(handleRegisterResponse)
//     .then((vehicule) => vehicule);
// }
function updateVehicule(data) {
  // const requestOptions = user;
  return axios
    .put("/vehicule/update", data)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function addParamVidange(data) {
  // const requestOptions = user;
  return axios
    .put("/vehicule/paramVidange", data)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function addSuiviKm(data) {
  // const requestOptions = user;
  return axios
    .put("/vehicule/suiviKm", data)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function changeStatutVehicule(data) {
  // const requestOptions = user;
  return axios
    .put("/vehicule/changeStatut", data)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function getAllVehicules() {
  return axios
    .get("/vehicule/getAllVehicule")
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}

function getAllVehiculesDispo() {
  return axios
    .get("/vehicule/getAllVehiculesDispo")
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function getVehiculeByImmmatricule(immmatricule) {
  return axios
    .get("/vehicule/getVehiculeByImmmatricule/" + immmatricule)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
function deleteVehiculeByImmmatricule(immmatricule) {
  return axios
    .delete("/vehicule/deleteVehiculeByImmmatricule/" + immmatricule)
    .then(handleRegisterResponse)
    .then((vehicule) => vehicule);
}
// function upload(image) {
//   // const requestOptions = user;
//   return axios.post('/vehicule/upload', image).then(handleRegisterResponse)
//     .then(data => data);
// }
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
