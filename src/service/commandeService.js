import axios from "../axios/axios";

export const commandeService = {
  createCommande,
  getAllCommandes,
  deleteCommandeById,
  updateCommande,
  livrerCommande,
  validateCommande,

  // upload
};
function createCommande(data) {
  // const requestOptions = user;
  return axios
    .post("/commande/create", data)
    .then(handleRegisterResponse)
    .then((commande) => commande);
}

function updateCommande(data) {
  // const requestOptions = user;
  return axios
    .put("/commande/updateCommande", data)
    .then(handleRegisterResponse)
    .then((commande) => commande);
}
function validateCommande(data) {
  // const requestOptions = user;
  return axios
    .put("/commande/validateCommande", data)
    .then(handleRegisterResponse)
    .then((commande) => commande);
}
function livrerCommande(data) {
  // const requestOptions = user;
  return axios
    .put("/commande/livrerCommande", data)
    .then(handleRegisterResponse)
    .then((commande) => commande);
}

function getAllCommandes() {
  return axios
    .get("/commande/getAllCommande")
    .then(handleRegisterResponse)
    .then((Commande) => Commande);
}

function deleteCommandeById(id) {
  return axios
    .delete("/commande/deleteCommandeById/" + id)
    .then(handleRegisterResponse)
    .then((Commande) => Commande);
}
// function upload(image) {
//   // const requestOptions = user;
//   return axios.post('/Commande/upload', image).then(handleRegisterResponse)
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
