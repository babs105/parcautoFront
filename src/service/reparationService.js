import axios from "../axios/axios";

export const reparationService = {
  createReparation,
  getAllReparations,
  getReparationByActionName,
  updateReparation,
  deleteReparationById,
};
function createReparation(cuve) {
  return axios
    .post("/reparation/create", cuve)
    .then(handleRegisterResponse)
    .then((Reparation) => Reparation);
}
function getAllReparations() {
  return axios
    .get("/reparation/getAllReparation")
    .then(handleRegisterResponse)
    .then((Reparations) => Reparations);
}
function getReparationByActionName(actionName) {
  return axios
    .get("/reparation/getReparationByActionName/" + actionName)
    .then(handleRegisterResponse)
    .then((Reparation) => Reparation);
}

function deleteReparationById(id) {
  return axios
    .delete("/reparation/deleteReparationById/" + id)
    .then(handleRegisterResponse)
    .then((Reparation) => Reparation);
}
function updateReparation(data) {
  return axios
    .put("/reparation/updateReparation", data)
    .then(handleRegisterResponse)
    .then((Reparation) => Reparation);
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
