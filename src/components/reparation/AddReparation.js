import { useState, useContext } from "react";
import { StateContext } from "../../context/StateContext";
import FormInput from "../formInput/FormInput";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FormSelectInput from "../formSelectInput/FormSelectInput";
import Loader from "react-loader-spinner";

function AddReparation() {
  const { addReparation, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    actionName: "",
  });

  const inputs = [
    {
      id: 1,
      name: "actionName",
      type: "text",
      placeholder: "Type de Reparation",
      errorMessage: "Type de Reparation obligatoire ",
      label: "Type de Reparation",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addReparation(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="prevStepLinkBloc">
          <Link to={"/reparation/list-reparation"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Type de Reparation</h1>
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

        {
          //   loading
          loading ? (
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
          )
        }
      </form>
    </>
  );
}

export default AddReparation;
