import { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import FormInput from "../formInput/FormInput";
import FormSelectInput from "../formSelectInput/FormSelectInput";
import Loader from "react-loader-spinner";

function SuiviKm() {
  const { vehicules, addSuiviKm, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    immatricule: "",
    kilometrageActuel: "",
    dateHeureSuivi: "",
  });
  const resetValues = () => {
    setValues({
      kilometrageActuel: "",
      dateHeureSuivi: "",
    });
  };
  const inputs = [
    {
      id: 1,
      name: "kilometrageActuel",
      type: "text",
      placeholder: "Kilometrage Actuel",
      errorMessage: "Kilometrage Actuel obligatoire ",
      label: "Kilometrage Actuel",
      pattern: "[0-9]{1,12}",
      required: true,
    },
    {
      id: 2,
      name: "dateHeureSuvi",
      type: "datetime-local",
      errorMessage: "Date Heure obligatoire",
      label: "Date et Heure  ",
      pattern: "^d{4}/d{2}/d{2} d{2}:d{2}$",
      required: true,
    },
  ];
  const inputsSelect = [
    {
      id: 1,
      name: "immatricule",
      type: "text",
      errorMessage: "Matricule obligatoire",
      label: "Matricule du Vehicule",
      placeholder: "Immatricule",
      data: ["", ...vehicules.map((vehicule) => vehicule.immatricule)],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addSuiviKm(values);
    resetValues();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Suivi kilometrage</h1>
        {/* <div className="inputFormRow"> */}
        {inputsSelect.map((input) => (
          <FormSelectInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div style={{ marginBottom: "20px" }}></div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* </div> */}
        {/* {   values['pieceName'] && Number(values['quantite'])} */}
        {/* <button disabled={!values["kilometrageActuel"]} className="buttonForm">
          Enrgistrer
        </button> */}
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
export default SuiviKm;
