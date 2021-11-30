import { v4 as uuidv4 } from "uuid";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

function EditCpteRenduIntervention({
  focused,
  setFocused,
  nextStep,
  prevStep,
  values,
  onChange,
}) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <div className="navigationStep">
        <ul className="nextStepLinkBloc">
          <li onClick={previous} className="prevStepLink">
            {" "}
            <ArrowBackIcon /> Retour
          </li>
          <li onClick={Continue} className="prevStepLink">
            Suivant <ArrowForwardIcon />
          </li>
        </ul>
      </div>
      <form className="form">
        <h1 className="titleForm">{"Infos complementaires"} </h1>

        <>
          {/* <div className="inputRowContainer"> */}
          {/* {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
          {values.nature !== "Vidange" && (
            <div className="formInput">
              <label className="labelInput">{"Essais effectues ?"}</label>
              <select
                className="pieceInputForm"
                name="estTeste"
                type="text"
                //   pattern="^[A-Za-z0-9 ]{3,36}$"
                //   required={true}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                value={values["estTeste"]}
              >
                {["", "Oui", "Non"].map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span className="inputError">{"Champs  obligatoire"}</span>
            </div>
          )}
          <div className="formInput">
            <label className="labelInput">{"Compte Rendu Intervention"}</label>
            <textarea
              rows="10"
              cols="50"
              name="cpteRendu"
              type="text"
              placeholder="Vous pouvez ecrire ici  "
              // pattern="[0-9]{1,10}"
              // required={true}
              value={values["cpteRendu"]}
              onChange={onChange}
              onBlur={() => setFocused(true)}
              focused={focused.toString()}
            />
            {/* <span className="inputError">{"Quantite Obligatoire"}</span> */}
          </div>

          {/* </div> */}
        </>
      </form>
    </>
  );
}

export default EditCpteRenduIntervention;
