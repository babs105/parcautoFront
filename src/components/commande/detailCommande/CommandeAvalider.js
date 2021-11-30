import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FormInput from "../../formInput/FormInput";

function CommandeAvalider({ values, nextStep, onChange }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const inputs = [
    {
      id: 1,
      name: "dateCommande",
      type: "datetime-local",
      errorMessage: "Date Heure  obligatoire",
      label: "Date et Heure Commande  ",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      required: true,
    },
    {
      id: 2,
      name: "immatricule",
      type: "text",
      errorMessage: "Matricule obligatoire",
      label: "Matricule du Vehicule",
      placeholder: "Immatricule",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    // {
    //   id: 2,
    //   name: "intervenant",
    //   type: "text",
    //   placeholder: "L'intervenant",
    //   errorMessage: "Nom Intervenant Obligatoire",
    //   label: "Intervenant",
    //   pattern: "^[A-Za-z0-9 ]{3,36}$",
    //   required: true,
    // },
    // {
    //   id: 3,
    //   name: "dateFinDiagnostic",
    //   type: "datetime-local",
    //   errorMessage:
    //     "Date Heure Fin obligatoire et doit etre superieure a la date debut",
    //   label: "Date et Heure fin ",
    //   pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
    //   required: true,
    //   min: values.dateDebutDiagnostic,
    // },

    // {
    //   id: 4,
    //   name: "lieu",
    //   type: "text",
    //   placeholder: "Lieu",
    //   errorMessage: "Lieu",
    //   label: "Lieu/emplacement",
    //   pattern: "^[A-Za-z0-9 ]{3,36}$",
    //   required: true,
    // },
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
    // {
    //   id: 1,
    //   name: "immatricule",
    //   type: "text",
    //   errorMessage: "Matricule obligatoire",
    //   label: "Matricule du Vehicule",
    //   placeholder: "Immatricule",
    //   data: ["", ...vehicules.map((vehicule) => vehicule.immatricule)],
    //   pattern: "^[A-Za-z0-9 ]{3,36}$",
    //   required: true,
    // },
  ];
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
          <Link to={"list-commande-avalider"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
          <li onClick={Continue} className="nextStepLink">
            Suivant <ArrowForwardIcon />
          </li>
        </ul>
      </div>

      <form className="form">
        <div className="titleForm">Details Commande</div>
        {/* <div className="inputFormRow"> */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <button onClick={Continue} className="buttonForm">Suivant</button> */}
        {/* </div> */}
      </form>
    </>
  );
}

export default CommandeAvalider;
