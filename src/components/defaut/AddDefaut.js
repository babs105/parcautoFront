import { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import FormInput from "../formInput/FormInput";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "react-loader-spinner";

function AddDefaut() {
  const { addDefaut, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    defautName: "",
  });

  const inputs = [
    {
      id: 1,
      name: "defautName",
      type: "text",
      placeholder: "Type de Panne",
      errorMessage: "Type de Panne obligatoire ",
      label: "Type de Panne",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addDefaut(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <Link to={"/defaut/list-defaut"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Ajout Type de pannes</h1>
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
        {/* <button className="buttonForm">Enrgistrer</button> */}
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

export default AddDefaut;
