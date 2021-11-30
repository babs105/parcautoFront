import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ReactPaginate from "react-paginate";

import AddIcon from "@material-ui/icons/Add";
import { StateContext } from "../../context/StateContext";
import Search from "../search/Search";
import Loader from "react-loader-spinner";

function ListReparation() {
  const { reparations, setFindKey, findey, search, loading } =
    useContext(StateContext);
  const [pagination, setPagination] = useState({
    data: [],
    offset: 0,
    numberPerPage: 5,
    pageCount: 0,
    currentData: [],
  });
  useEffect(() => {
    console.log("les reparations ", reparations);

    const newData = search([...reparations]);
    setPagination((prevState) => ({
      ...prevState,
      pageCount: newData.length / prevState.numberPerPage,
      currentData: newData.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset, reparations, search]);
  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };
  return (
    <div className="listDiagContainer">
      <div className="topAction">
        <div className="topActionleft">
          <div className="navigationStep">
            <ul className="nextStepLinkBloc">
              <Link
                to={"/reparation/add-reparation"}
                style={{ textDecoration: "none" }}
              >
                <li className="prevStepLink">
                  {" "}
                  <AddIcon />
                  Reparation
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Search setFindKey={setFindKey} findKey={findey} />
      </div>
      <div className="tableContainer">
        <h1 className="tableTitle">Types de Reparation</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Reparation</th>
              {/* <th>Quantite</th>
              <th>Prix Unitaire</th> */}
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
              pagination.currentData.map((reparation, index) => (
                <tr key={index} className="active-row">
                  <td>{reparation.actionName}</td>
                  {/* <td>{reparation.quantite}</td>
                  <td>{reparation.prixUnitaire}</td> */}
                  <td className="actionTable">
                    <Link
                      to={{
                        pathname: "/reparation/edit-reparation",
                        state: reparation,
                      }}
                    >
                      <span className="editItem">
                        <EditIcon />
                      </span>
                    </Link>
                  </td>
                </tr>
              ))
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
          pageCount={Math.ceil(pagination.pageCount)}
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

export default ListReparation;
