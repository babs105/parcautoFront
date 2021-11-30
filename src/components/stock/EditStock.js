import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/StateContext";
import FormInput from "../formInput/FormInput";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "react-loader-spinner";

function EditStock({ location }) {
  const piece = location.state;
  const { updatePiece, loading } = useContext(StateContext);
  const [values, setValues] = useState({
    pieceName: "",
    quantite: "",
    prixUnitaire: "",
  });

  const inputs = [
    {
      id: 1,
      name: "pieceName",
      type: "text",
      placeholder: "Nom de la Piece",
      errorMessage: "Identification Piece obligatoire ",
      label: "Nom Piece",
      pattern: "^[A-Za-z0-9 ]{3,36}$",
      required: true,
    },
    {
      id: 2,
      name: "quantite",
      type: "text",
      placeholder: "quantite",
      errorMessage: "Quantite Obligatoire",
      label: "Quantite",
      pattern: "[0-9]{1,10}",
      required: true,
    },
    {
      id: 3,
      name: "prixUnitaire",
      type: "text",
      placeholder: "Prix Unitaire",
      errorMessage: "Prix Unitaire Obligatoire",
      pattern: "[0-9]{1,20}",
      label: "Prix Unitaire",
      required: true,
    },
  ];
  useEffect(() => {
    setValues({
      ...piece,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    updatePiece(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <Link to={"/stock/list-stock"} className="noDecorLink">
            <li className="prevStepLink">
              <ArrowBackIcon /> Retour
            </li>
          </Link>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titleForm">Editer Piece</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <button className='buttonForm'>Ajouter</button> */}
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

export default EditStock;
