import { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import FormInput from "../formInput/FormInput";
import FormSelectInput from "../formSelectInput/FormSelectInput";
import Loader from "react-loader-spinner";
function AddParamVidange() {
  const { vehicules, addParamVidange, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    immatricule: "",
    kilometrageActuel: "",
    distanceVidange: "",
    distanceRappel: "",
  });

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
      name: "distanceVidange",
      type: "text",
      placeholder: "Kilometrage Vidange",
      errorMessage: "Kilometrage Vidange obligatoire ",
      label: "Kilometrage Vidange",
      pattern: "[0-9]{1,12}",
      required: true,
    },
    {
      id: 3,
      name: "distanceRappel",
      type: "text",
      placeholder: "Kilometrage rappel",
      errorMessage: "Kilometrage rappel obligatoire",
      label: "Kilometrage rappel",
      pattern: "[0-9]{1,12}",
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
      placeholder: "Immatricule",
      data: ["", ...vehicules.map((vehicule) => vehicule.immatricule)],
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addParamVidange(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Parametrage Vidange</h1>
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
        {/* <button className="buttonForm">Enrgistrer</button> */}
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

export default AddParamVidange;
