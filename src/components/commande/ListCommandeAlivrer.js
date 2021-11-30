import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ReactPaginate from "react-paginate";
import { StateContext } from "../../context/StateContext";
import Search from "../search/Search";
import Loader from "react-loader-spinner";

function ListCommandeAlivrer() {
  const { commandes, setFindKey, findey, search, loading } =
    useContext(StateContext);
  const [pagination, setPagination] = useState({
    data: [],
    offset: 0,
    numberPerPage: 5,
    pageCount: 0,
    currentData: [],
  });
  useEffect(() => {
    const newData = search([...commandes]);
    setPagination((prevState) => ({
      ...prevState,
      pageCount: newData.length / prevState.numberPerPage,
      currentData: newData.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset, commandes, search]);
  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };
  return (
    <div className="listDiagContainer">
      <div className="topAction">
        <div className="topActionleft">
          {/* <Link to="/vehicule/add-vehicule">
            <button className="topActionButton">Ajout Vehicule</button>
          </Link> */}
        </div>
        <Search setFindKey={setFindKey} findKey={findey} />
      </div>
      <div className="tableContainer">
        <h1 className="tableTitle">Les Commandes à Livrer </h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Date Commande</th>
              <th>Date Validation</th>
              <th>Matricule</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td> </td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CA3444",
                  }}
                >
                  <Loader type="Puff" color="#CA3444" height={30} width={30} />
                  Chargement ....
                </td>
                <td> </td>
              </tr>
            ) : (
              pagination.currentData &&
              pagination.currentData.map((commande, index) => {
                return (
                  commande.statut === "alivrer" && (
                    <tr key={index} className="active-row">
                      <td>{commande.dateCommande}</td>
                      <td>{commande.dateCmValidee}</td>
                      <td>{commande.immatricule}</td>
                      <td className="actionTable">
                        <Link
                          to={{
                            pathname: "/commande/edit-commande",
                            state: commande,
                          }}
                        >
                          <span className="editItem">
                            <EditIcon />
                          </span>
                        </Link>
                        <Link
                          to={{
                            pathname: "/commande/livrer-commande",
                            state: commande,
                          }}
                        >
                          <button className="buttonActionTab">Livrer</button>
                        </Link>
                      </td>
                    </tr>
                  )
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="">
        <ReactPaginate
          previousLabel={"Précedent "}
          nextLabel={"Suivant"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.floor(pagination.pageCount)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"cp-pagination"}
          subContainerClassName={"pages cp-pagination"}
          activeClassName={"cp-active"}
        />
      </div>
    </div>
  );
}

export default ListCommandeAlivrer;
