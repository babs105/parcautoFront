import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FormInput from "../formInput/FormInput";
import FormSelectInput from "../formSelectInput/FormSelectInput";
import { StateContext } from "../../context/StateContext";
import Loader from "react-loader-spinner";

function EditStatutVehicule({ location }) {
  const { changeStatutVehicule, loading } = useContext(StateContext);
  const vehicule = location.state;
  const [values, setValues] = useState({
    id: "",
    statut: vehicule.statut,
    immatricule: vehicule.immatricule,
    kilometrageActuel: vehicule.kilometrageActuel,
  });

  const onChange = (e) => {
    console.log(" dfeaur valu", e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // setValues({...values,pieceForCommande:pieceAcommande,dateDebutDiagnostic:datedebutDiag,dateFinDiagnostic:datefinDiag})

    console.log("values: ", values);
    changeStatutVehicule(values);
    // resetValues();
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
      required: true,
    },
    {
      id: 2,
      name: "kilometrageActuel",
      type: "text",
      placeholder: "kilometrage Actuel",
      errorMessage: "kilometrage Actuel Obligatoire",
      pattern: "[0-9]{1,20}",
      label: "Kilometrage Actuel",
      required: true,
    },
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
    {
      id: 1,
      name: "statut",
      type: "text",
      errorMessage: "Statut obligatoire",
      label: "Changer Statut Vehicule",
      data: ["", "disponible", "defaillance", "panne", "diagnostic"],
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
          <Link to={"/vehicule/list-vehicule-panne"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="titleForm">Change Statut Vehicule</div>
        <div style={{ marginBottom: "20px" }}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div style={{ marginBottom: "20px" }}></div>
          {inputsSelect.map((input) => (
            <FormSelectInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        {/* <button className="buttonForm">Valider</button> */}
        {
          //   loading
          loading ? (
            <button disabled={true} className="login-buttonForm">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "green",
                }}
              >
                <Loader type="Puff" color="green" height={20} width={30} />
                Traitement ...
              </div>
            </button>
          ) : (
            <button disabled={loading} className="login-buttonForm">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Enregistrer
              </div>
            </button>
          )
        }
      </form>
    </>
  );
}

export default EditStatutVehicule;
