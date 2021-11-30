import React, { useContext, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FormInput from "../formInput/FormInput";
import Loader from "react-loader-spinner";

function LivrerCommande({ location }) {
  const { livrerCommande, loading } = useContext(StateContext);
  const commande = location.state;

  const [values, setValues] = useState({
    id: commande.id,
    immatricule: commande.immatricule,
    dateLivraison: "",
    piecesCommamdes: commande.piecesCommamdes,
    // dateHeureSuivi: "",
  });
  const inputs = [
    {
      id: 1,
      name: "immatricule",
      type: "text",
      placeholder: "immatricule ",
      //   errorMessage: "Kilometrage Actuel obligatoire ",
      label: "Kilometrage ",
      pattern: "[0-9]{1,12}",
      disabled: true,
      //   required: true,
    },
    {
      id: 2,
      name: "dateLivraison",
      type: "datetime-local",
      errorMessage: "Date Heure obligatoire",
      label: "Date et Heure Livraison ",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    values.dateLivraison = moment(
      values.dateLivraison,
      "yyyy-MM-DDTHH:mm"
    ).format("DD/MM/YYYY HH:mm");
    console.log("values", values);
    livrerCommande(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <Link to={"/commande/list-commande-alivrer"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Livraison Commande</h1>
        {/* <div className="inputFormRow"> */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* </div> */}
        {/* <button className="buttonForm">Valider</button> */}
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

export default LivrerCommande;
