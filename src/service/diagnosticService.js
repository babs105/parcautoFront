import axios from "../axios/axios";

export const diagnosticService = {
  createDiagnostic,
  getAllDiagnostic,
  getDiagnosticById,
  updateDiagnostic,
};
function createDiagnostic(diag) {
  return axios
    .post("/diagnostic/create", diag)
    .then(handleRegisterResponse)
    .then((diag) => diag);
}
function getAllDiagnostic() {
  return axios
    .get("/diagnostic/getAllDiagnostic")
    .then(handleRegisterResponse)
    .then((diags) => diags);
}
function getDiagnosticById(id) {
  return axios
    .get("/diagnostic/getDiagnosticById/" + id)
    .then(handleRegisterResponse)
    .then((diagnostic) => diagnostic);
}
function updateDiagnostic(diagnostic) {
  return axios
    .put("/diagnostic/update", diagnostic)
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
