import { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import moment from "moment";
import FormInput from "../formInput/FormInput";
import Loader from "react-loader-spinner";
function AddVehicule() {
  const {addVehicule,loading}= useContext(StateContext)
  const [values, setValues] = useState({
    immatricule: "",
    dateAchat: "",
    kilometrageAchat: "",
    kilometrageActuel: "",
    capacityReservoir: "",
    // etat: "",
    // statut: "",
    // categorie: "",
    // etat: "",
    // statut: "",
    // affection: "",
    // modele: "",
    // marque: "",
    // couleur: "",
  });

  const inputs = [
    {
      id: 1,
      name: "immatricule",
      type: "text",
      placeholder: "Matricule",
      errorMessage: "Matricule obligatoire ",
      label: "Matricule ",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    {
      id: 2,
      name: "dateAchat",
      type: "date",
      placeholder: "Date Achat",
      //   errorMessage: "Matricule obligatoire ",
      label: "Date Achat",
      required: false,
    },
    {
      id: 3,
      name: "kilometrageAchat",
      type: "text",
      placeholder: "kilometrage Achat",
      errorMessage: "kilometrageAchat Obligatoire",
      label: "Kilometrage Achat",
      pattern: "[0-9]{1,10}",
      required: true,
    },
    {
      id: 4,
      name: "kilometrageActuel",
      type: "text",
      placeholder: "kilometrage Actuel",
      errorMessage: "kilometrage Actuel Obligatoire",
      pattern: "[0-9]{1,20}",
      label: "Kilometrage Actuel",
      required: true,
    },
    {
      id: 5,
      name: "capacityReservoir",
      type: "text",
      placeholder: "Capacite Reservoir",
      errorMessage: "Capacite Reservoir Obligatoire",
      pattern: "[0-9]{2,3}",
      label: "Capacite Reservoir",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    values.dateAchat = moment(values.dateAchat, "yyyy-MM-DD").format(
      "DD/MM/YYYY"
    );
     addVehicule(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Ajout Vehicule</h1>
        <div className="inputFormRow">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
          </div>
        {/* <button className="buttonForm">Ajouter</button> */}
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
export default AddVehicule;
