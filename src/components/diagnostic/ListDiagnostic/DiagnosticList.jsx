import { useState, useContext ,useEffect} from "react";
import { StateContext } from "../../../context/StateContext";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import EditIcon from '@material-ui/icons/Edit';
import { DiagnosticPdf } from "../../generatedPdf/DiagnosticPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReactPaginate from "react-paginate";
import Search from "../../search/Search";
// import AddIcon from '@material-ui/icons/Add';
import Loader from "react-loader-spinner";


function DiagnosticList() {
   
    const {diagnostics,getAllDiagnostic ,search,findKey, setFindKey,loading} = useContext(StateContext);
    const [pagination, setPagination] = useState({
      data: [],
      offset: 0,
      numberPerPage: 5,
      pageCount: 0,
      currentData: [],
    });
    useEffect(() => {
      // getAllDiagnostic()
      console.log('list diagnostic')
      const newData = search([...diagnostics]);
      setPagination((prevState) => ({
        ...prevState,
        pageCount: newData.length / prevState.numberPerPage,
        currentData: newData.slice(
          pagination.offset,
          pagination.offset + pagination.numberPerPage
        ),
      }));
    }, [pagination.numberPerPage,
      pagination.offset,
     diagnostics,
      search,])
  const handlePageClick = (event) => {
        const selected = event.selected;
        const offset = selected * pagination.numberPerPage;
        setPagination({ ...pagination, offset });
      };
    return (
   
      <div className="listDiagContainer"> 
      <div className="topAction">
        <div className="topActionleft">
        {/* <div className="navigationStep">
          <ul className="nextStepLinkBloc">
            <Link to={'/diagnostic/add-diagnostic'} style={{textDecoration:'none'}}>
           <li className='prevStepLink'> <AddIcon/>diagnostic</li> 
            </Link>
          </ul>
        
        </div> */}
         
        </div>
          <Search findKey={findKey} setFindKey={setFindKey}/>
      </div>
         <div className="tableContainer">
           <h1 className="tableTitle">Liste Diagnostic</h1>
          <table className="styled-table">
        <thead>
        <tr>
            <th>Date Heure</th>
            <th>Matricule</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
    {loading ? (
              <tr >
               <td> </td>
              <td style={{display:"flex",alignItems:'center',justifyContent:'center' ,color:'#CA3444'}}>
               <Loader type="Puff" color="#CA3444" height={30} width={30} />
                Chargement ...
              </td>
              <td> </td>
              </tr>
               ):(
      pagination.currentData &&
      pagination.currentData.map((diagnostic ,index) =>
        <tr  key={index} className="active-row">
            <td>{diagnostic.dateDebutDiagnostic}</td>
            <td>{diagnostic.immatricule}</td>
            <td className='actionTable'>
            <Link
                
                    to={{
                          pathname: "/diagnostic/edit-diagnostic",
                          state: diagnostic,
                          }}
                      >
                  <span className='editItem'>
                <EditIcon/>
              </span>  
                    
              </Link>
              <span className='pdfItem'>
              <PDFDownloadLink
          document={<DiagnosticPdf data={diagnostic} />}
          style={{color:'red'}}
          fileName="Diagnostic.pdf"
        >
          {({  url, loading, error }) =>
            loading ? "..." : <PictureAsPdfIcon />  
          }
        </PDFDownloadLink>      
        </span>  
           </td>
        </tr>
       ))
      }
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

    )
}

export default DiagnosticList;
