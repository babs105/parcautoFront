import axios from "../axios/axios";

export const demandeTravailService = {
  createDemandeTravail,
  getAllDemandeTravails,
  getAllDemandeTravailsDispo,
  getDemandeTravailByImmmatricule,
  deleteDemandeTravailById,
  updateDemandeTravail,
  // upload
};
function createDemandeTravail(demandeTravail) {
  // const requestOptions = user;
  return axios
    .post("/demande/create", demandeTravail)
    .then(handleRegisterResponse)
    .then((demandeTravail) => demandeTravail);
}
// function createDemandeTravail(formData) {
//   // const requestOptions = user;
//   return axios
//     .post("/photo/upload", formData)
//     .then(handleRegisterResponse)
//     .then((DemandeTravail) => DemandeTravail);
// }
function updateDemandeTravail(data) {
  // const requestOptions = user;
  return axios
    .put("/demande/updateDemandeTravail", data)
    .then(handleRegisterResponse)
    .then((demande) => demande);
}

function getAllDemandeTravails() {
  return axios
    .get("/demande/getAllDemandeTravail")
    .then(handleRegisterResponse)
    .then((DemandeTravail) => DemandeTravail);
}

function getAllDemandeTravailsDispo() {
  return axios
    .get("/demande/getAllDemandeTravailsDispo")
    .then(handleRegisterResponse)
    .then((DemandeTravail) => DemandeTravail);
}
function getDemandeTravailByImmmatricule(immmatricule) {
  return axios
    .get("/demande/getDemandeTravailByImmmatricule/" + immmatricule)
    .then(handleRegisterResponse)
    .then((demandeTravail) => demandeTravail);
}
function deleteDemandeTravailById(id) {
  return axios
    .delete("/demande/deleteDemandeTravailById/" + id)
    .then(handleRegisterResponse)
    .then((demandeTravail) => demandeTravail);
}
// function upload(image) {
//   // const requestOptions = user;
//   return axios.post('/DemandeTravail/upload', image).then(handleRegisterResponse)
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
