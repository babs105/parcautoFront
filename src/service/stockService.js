import axios from "../axios/axios";

export const stockService = {
  createPiece,
  getAllStocks,
  getStockByPieceName,
  getQuantitePiece,
  updateStock,
  deleteStockByPieceName,
};
function createPiece(cuve) {
  return axios
    .post("/stock/create", cuve)
    .then(handleRegisterResponse)
    .then((stock) => stock);
}
function getAllStocks() {
  return axios
    .get("/stock/getAllStock")
    .then(handleRegisterResponse)
    .then((stocks) => stocks);
}
function getStockByPieceName(pieceName) {
  return axios
    .get("/stock/getStockByPieceName/" + pieceName)
    .then(handleRegisterResponse)
    .then((stock) => stock);
}
function getQuantitePiece(pieceName) {
  return axios
    .get("/stock/getQuantiteByPieceName/" + pieceName)
    .then(handleRegisterResponse)
    .then((stock) => stock);
}

function deleteStockByPieceName(pieceName) {
  return axios
    .delete("/stock/deleteStockByPieceName/" + pieceName)
    .then(handleRegisterResponse)
    .then((stock) => stock);
}
function updateStock(data) {
  return axios
    .put("/stock/updateStock", data)
    .then(handleRegisterResponse)
    .then((stock) => stock);
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
