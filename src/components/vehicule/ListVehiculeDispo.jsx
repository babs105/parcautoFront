import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import EditIcon from "@material-ui/icons/Edit";
// import { DiagnosticPdf } from "../../generatedPdf/DiagnosticPdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import ReactPaginate from "react-paginate";
import SearchIcon from "@material-ui/icons/Search";
import { StateContext } from "../../context/StateContext";
import Search from "../search/Search";
import  AddIcon  from "@material-ui/icons/Add";
import Loader from "react-loader-spinner";

function ListVehiculeDispo() {
  const { vehicules, setFindKey, findey, search,loading,getAllVehicules } = useContext(StateContext);
  const [pagination, setPagination] = useState({
    data: [],
    offset: 0,
    numberPerPage: 5,
    pageCount: 0,
    currentData: [],
  });
  useEffect(() => {
    //getAllVehicules()

    const newData = search([...vehicules]);
    setPagination((prevState) => ({
      ...prevState,
      pageCount: newData.length / prevState.numberPerPage,
      currentData: newData.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [
    pagination.numberPerPage, pagination.offset,
    //  vehicules,
      search]);
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
            <Link to="/vehicule/add-vehicule" style={{textDecoration:'none'}}>
           <li className='prevStepLink'> <AddIcon/>Vehicule</li> 
            </Link>
          </ul>  
        </div>
        </div>
        <Search setFindKey={setFindKey} findKey={findey} />
      </div>
      <div className="tableContainer">
        <h2 className="tableTitle">Vehicules Disponibles</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Matricule</th>
              <th>kilometrage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading? (
              <tr >
               <td> </td>
              <td style={{display:"flex",alignItems:'center',justifyContent:'center' ,color:'#CA3444'}}>
               <Loader type="Puff" color="#CA3444" height={30} width={30} />
                Chargement ....
              </td>
              <td> </td>
              </tr>
               ):(
            pagination.currentData &&
              pagination.currentData.map((vehicule, index) => {
                
             return (vehicule.statut==='disponible'&&  
                <tr key={index} className="active-row">
                  <td>{vehicule.immatricule}</td>
                  <td>{vehicule.kilometrageActuel}</td>
                  <td className="actionTable">
                    <Link
                       to={{
                        pathname: "/vehicule/edit-statut",
                        state: vehicule,
                      }}
                    >
                      <span className="editItem">
                        <EditIcon />
                      </span>
                    </Link>
                    <Link
                          to={{
                            pathname: "/demandeTravail/add-demande",
                            state: vehicule,
                          }}
                        >
                          <button className="buttonActionTab">
                            Demande de Travail
                          </button>
                        </Link>
              
                  </td>
                </tr>
                )}
               )
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

export default ListVehiculeDispo;
