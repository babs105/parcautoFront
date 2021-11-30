import { useState, useContext ,useEffect} from "react";
import FormInput from "../../formInput/FormInput";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";


function DiagnosticInfo({values,nextStep,onChange,vehicules}) {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }

  const inputs = [
    {
      id: 1,
      name: "immatricule",
      type: "text",
      errorMessage: "Matricule obligatoire",
      label: "Matricule du Vehicule",
      placeholder:'Immatricule',
      // data:['',...vehicules.map(vehicule => vehicule.immatricule)],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required:true,
    },
    {
      id: 2,
      name: "dateDebutDiagnostic",
      type: "datetime-local",
      errorMessage: "Date Heure Debut obligatoire",
      label: "Date et Heure debut ",
      pattern:"^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$",
      required: true,
    },
    {
      id: 3,
      name: "intervenant",
      type: "text",
      placeholder:"L'intervenant",
      errorMessage:"Nom Intervenant Obligatoire",
      label:"Intervenant",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,

    },
     {
      id: 4,
      name: "dateFinDiagnostic",
      type: "datetime-local",
      errorMessage: "Date Heure Fin obligatoire et doit etre superieure a la date debut",
      label: "Date et Heure fin ",
      pattern:"^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$",
      required: true,
      min:values.dateDebutDiagnostic
     },
   
    {
      id: 5,
      name: "lieu",
      type: "text",
      placeholder:"Lieu",
      errorMessage:"Lieu",
      label:"Lieu/emplacement",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,

    },
  ];

  const inputsSelect = [
    // {
    //   id: 1,
      // name: "pieceName",
      // type: "text",
      // errorMessage: "Piece obligatoire",
      // label: "Materiel a commander",
      // data:['Selectionnez le Materiel',...pieces.map(piece => piece.pieceName)],
      // pattern: "^[A-Za-z0-9 ]{3,36}$",
      // required: true,
    // },
    {
      id: 1,
      name: "immatricule",
      type: "text",
      errorMessage: "Matricule obligatoire",
      label: "Matricule du Vehicule",
      placeholder:'Immatricule',
      // data:['',...vehicules.map(vehicule => vehicule.immatricule)],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required:true,
    },
  ]
  useEffect(() => {
//    getAllPieces()
//    getAllVehicules()
//    setData(['',...pieces.map(piece => piece.pieceName)])
//    console.log('useeffer')
  }, []);

  return (
    <>
        <div className="navigationStep">
          <ul className="nextStepLinkBloc">
          <Link to={"/diagnostic/list-diagnostic"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
          
            <li onClick={Continue} className='prevStepLink'>Suivant  <ArrowForwardIcon/></li>
          </ul>
        </div>
     
      <form  className="form">
        <div className="titleForm">Diagnostic Vehicule</div>
        {/* <div className="inputFormRow"> */}
        {/* {inputsSelect.map((input) => (
          <FormSelectInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
    
      </form>
    </>
  );
}

export default DiagnosticInfo
