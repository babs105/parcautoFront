import axios from "../axios/axios";

export const dashboardService = {
  getRavitaillementByVehiculeInPreviousMonth,
  getRavitaillementByVehiculeInCurrentMonth,
  getTotalRavitaillementAndVehiculeInPreviousMonth,
  getTotalRavitaillementAndVehiculeInCurrentMonth,
  getNumberRajoutAndTotalQteInCurrentMonth,
  getNumberRajoutAndTotalQteInPreviousMonth,
  getNumberRajoutAndTotalQteByCuveInCurrentMonth,
  getNumberRajoutAndTotalQteByCuveInPreviousMonth,
  getNumberRavitaillementByCuveInPreviousMonth,
  getNumberRavitaillementByCuveInCurrentMonth,
};

function getRavitaillementByVehiculeInPreviousMonth() {
  return axios
    .get("/operationsCuve/getRavitaillementByVehiculeInPreviousMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getRavitaillementByVehiculeInCurrentMonth() {
  return axios
    .get("/operationsCuve/getRavitaillementByVehiculeInCurrentMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}

function getTotalRavitaillementAndVehiculeInPreviousMonth() {
  return axios
    .get("/operationsCuve/getTotalRavitaillementAndVehiculeInPreviousMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getTotalRavitaillementAndVehiculeInCurrentMonth() {
  return axios
    .get("/operationsCuve/getTotalRavitaillementAndVehiculeInCurrentMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRajoutAndTotalQteInCurrentMonth() {
  return axios
    .get("/rajout/getNumberRajoutAndTotalQteInCurrentMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRajoutAndTotalQteInPreviousMonth() {
  return axios
    .get("/rajout/getNumberRajoutAndTotalQteInPreviousMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRajoutAndTotalQteByCuveInPreviousMonth() {
  return axios
    .get("/rajout/getNumberRajoutAndTotalQteByCuveInPreviousMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRajoutAndTotalQteByCuveInCurrentMonth() {
  return axios
    .get("/rajout/getNumberRajoutAndTotalQteByCuveInCurrentMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRavitaillementByCuveInPreviousMonth() {
  return axios
    .get("/operationsCuve/getNumberRavitaillementByCuveInPreviousMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
}
function getNumberRavitaillementByCuveInCurrentMonth() {
  return axios
    .get("/operationsCuve/getNumberRavitaillementByCuveInCurrentMonth")
    .then(handleRegisterResponse)
    .then((results) => results);
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
