import axios from "../axios/axios";

export const interventionService = {
  createIntervention,
  getAllIntervention,
  getInterventionById,
  updateIntervention,
};
function createIntervention(data) {
  return axios
    .post("/intervention/create", data)
    .then(handleRegisterResponse)
    .then((inter) => inter);
}
function getAllIntervention() {
  return axios
    .get("/intervention/getAllIntervention")
    .then(handleRegisterResponse)
    .then((diags) => diags);
}
function getInterventionById(id) {
  return axios
    .get("/intervention/getInterventionById/" + id)
    .then(handleRegisterResponse)
    .then((Intervention) => Intervention);
}
function updateIntervention(Intervention) {
  return axios
    .put("/intervention/update", Intervention)
    .then(handleRegisterResponse)
    .then((data) => data);
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
