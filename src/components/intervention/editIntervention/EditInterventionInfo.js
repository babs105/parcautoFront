import { useEffect } from "react";

import FormInput from "../../formInput/FormInput";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FormSelectInput from "../../formSelectInput/FormSelectInput";
import { Link } from "react-router-dom";

function EditInterventionInfo({ values, nextStep, onChange }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const inputs = [
    {
      id: 1,
      name: "immatricule",
      type: "text",
      errorMessage: "Matricule obligatoire",
      label: "Matricule du Vehicule",
      placeholder: "Immatricule",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      disabled: true,
      //   required: true,
    },
    {
      id: 2,
      name: "kilometrageActuel",
      type: "text",
      placeholder: "kilometrage Actuel",
      errorMessage: "kilometrage Actuel Obligatoire",
      label: "Kilometrage Actuel",
      pattern: "[0-9]{1,10}",
      required: true,
    },
    {
      id: 3,
      name: "dateDebutIntervention",
      type: "datetime-local",
      errorMessage: "Date Heure Debut obligatoire",
      label: "Date et Heure debut ",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      required: true,
    },

    {
      id: 4,
      name: "dateFinIntervention",
      type: "datetime-local",
      errorMessage:
        "Date Heure Fin obligatoire et doit etre >= a la date debut",
      label: "Date et Heure fin ",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      //   required: true,
      min: values.dateDebutIntervention,
    },
    {
      id: 5,
      name: "intervenant",
      type: "text",
      placeholder: "L'intervenant",
      errorMessage: "Nom Intervenant Obligatoire",
      label: "Intervenant",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    {
      id: 6,
      name: "lieu",
      type: "text",
      placeholder: "Lieu",
      errorMessage: "Lieu",
      label: "Lieu/emplacement",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  const inputsSelect = [
    {
      id: 1,
      name: "categorie",
      type: "text",
      placeholder: "Categorie",
      errorMessage: "Categorie obligatoire",
      label: "Categorie Intervention",
      data: ["", "Entretien", "Reparation"],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    {
      id: 2,
      name: "nature",
      type: "text",
      placeholder: "Nature ",
      errorMessage: "Nature intervention ",
      data: [
        "",
        "Vidange",
        "Electrique",
        "Mecanique",
        "Hydraulique",
        "Soudure",
        "Autres",
      ],
      label: "Nature Intervention",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    // {
    //   id: 1,
    //   name: "immatricule",
    //   type: "text",
    //   errorMessage: "Matricule obligatoire",
    //   label: "Matricule du Vehicule",
    //   placeholder: "Immatricule",
    //   // data:['',...vehicules.map(vehicule => vehicule.immatricule)],
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
          <Link to={"/intervention/list-intervention"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>

          <li onClick={Continue} className="prevStepLink">
            Suivant <ArrowForwardIcon />
          </li>
        </ul>
      </div>

      <form className="form">
        <div className="titleForm">Intervention</div>
        <div className="inputFormRow">
          {inputsSelect.map((input) => (
            <FormSelectInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {/* <div style={{ marginBottom: "20px" }}></div> */}

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {/* <button onClick={Continue} className="buttonForm">Suivant</button> */}
        </div>
      </form>
    </>
  );
}

export default EditInterventionInfo;
