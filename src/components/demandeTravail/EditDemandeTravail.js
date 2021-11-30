import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateContext";
import Loader from "react-loader-spinner";
import FormSelectInput from "../formSelectInput/FormSelectInput";
import FormInput from "../formInput/FormInput";
import moment from "moment";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function EditDemandeTravail({ location }) {
  const demandeTravail = location.state;
  const { updateDemandeTravail, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    id: "",
    immatricule: "",
    dateDemande: "",
    emetteur: "",
    fonction: "",
    panne: "",
    natureTravail: "",
  });

  const inputs = [
    {
      id: 1,
      name: "dateDemande",
      type: "datetime-local",
      placeholder: "Date Demande ",
      errorMessage: "Date Demande obligatoire",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      label: "Date Demande",
      required: true,
    },
    {
      id: 2,
      name: "immatricule",
      type: "text",
      placeholder: "Matricule",
      errorMessage: "Matricule obligatoire ",
      label: "Matricule ",
      disabled: true,
      // pattern: "^[A-Za-z0-9 ]{3,36}$",
      // required: true,
    },
    {
      id: 3,
      name: "panne",
      type: "text",
      placeholder: "Motif",
      errorMessage: "motif est obligatoire",
      pattern: "[0-9]{2,3}",
      label: "Motif de la demande",
      pattern: "^[A-Za-z0-9 ]{3,50}$",
      required: true,
    },
    {
      id: 4,
      name: "emetteur",
      type: "text",
      placeholder: "Nom Emetteur ",
      errorMessage: "Nom Emetteur",
      label: "Nom de l'Emetteur ",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    {
      id: 5,
      name: "fonction",
      type: "text",
      placeholder: "Fonction ",
      errorMessage: "Fonction Obligatoire",
      label: "Fonction ",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];
  const inputsSelect = [
    {
      id: 1,
      name: "natureTravail",
      type: "text",
      placeholder: "Nature Travail ",
      errorMessage: "Nature Travail obligatoire ",
      data: ["", "Electrique", "Mecanique", "Hydraulique", "Soudure", "Autres"],
      label: "Nature Travail",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];
  useEffect(() => {
    const dateDemande = moment(
      demandeTravail.dateDemande,
      "DD/MM/YYYY HH:mm"
    ).format("yyyy-MM-DDTHH:mm");

    setValues({
      ...demandeTravail,
      dateDemande: dateDemande,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    values.dateDemande = moment(values.dateDemande, "yyyy-MM-DDTHH:mm").format(
      "DD/MM/YYYY HH:mm"
    );
    console.log(values);
    updateDemandeTravail(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <Link to={"/demandeTravail/list-demande"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
          {/* <li onClick={Continue} className="nextStepLink">
            Suivant <ArrowForwardIcon />
          </li> */}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Demande de Travail</h1>
        <div className="inputFormRow">
          {inputsSelect.map((input) => (
            <FormSelectInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        {/* <button className="buttonForm">Envoyer</button> */}
        {loading ? (
          <button disabled={true} className="buttonForm">
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
          <button disabled={loading} className="buttonForm">
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
        )}
      </form>
    </>
  );
}

export default EditDemandeTravail;
